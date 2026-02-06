const express = require('express');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const path = require('path');
const fs = require('fs');
const axios = require('axios');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const morgan = require('morgan');
const { body, validationResult } = require('express-validator');
const csurf = require('csurf');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

// Security middleware
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com", "https://cdnjs.cloudflare.com"],
            fontSrc: ["'self'", "https://fonts.gstatic.com"],
            scriptSrc: ["'self'", "'unsafe-inline'"],
            imgSrc: ["'self'", "data:", "https:"],
            connectSrc: ["'self'"]
        }
    }
}));
app.use(cors());
app.use(compression());
app.use(morgan('combined'));

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});
app.use('/api/', limiter);

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Session configuration
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false, // Set to true in production with HTTPS
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
}));

// Passport configuration
app.use(passport.initialize());
app.use(passport.session());

// CSRF protection (except for API routes)
app.use(csurf({ cookie: true }));

// Static files
app.use(express.static(path.join(__dirname)));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Create uploads directory if it doesn't exist
if (!fs.existsSync('uploads')) {
    fs.mkdirSync('uploads');
}

// Language middleware
app.use((req, res, next) => {
    const lang = req.query.lang || req.session.lang || 'ru';
    req.session.lang = lang;
    res.locals.lang = lang;
    next();
});

// Passport Local Strategy
passport.use(new LocalStrategy(
    async (username, password, done) => {
        if (username === process.env.ADMIN_USERNAME) {
            const isValidPassword = await bcrypt.compare(password, process.env.ADMIN_PASSWORD_HASH);
            if (isValidPassword) {
                return done(null, { id: 1, username: username });
            }
        }
        return done(null, false, { message: 'Invalid credentials' });
    }
));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    if (id === 1) {
        done(null, { id: 1, username: process.env.ADMIN_USERNAME });
    } else {
        done(null, false);
    }
});

// Authentication middleware
function requireAuth(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/admin/login');
}

// Language data
const translations = {
    ru: {
        nav: {
            home: "Главная",
            about: "О компании",
            services: "Услуги",
            portfolio: "Портфолио",
            contact: "Контакты"
        },
        hero: {
            title: "Цифровая Трансформация Вашего Бизнеса",
            subtitle: "Профессиональные IT-решения для компаний любого масштаба",
            cta1: "Наши услуги",
            cta2: "Связаться с нами"
        },
        services: {
            title: "Наши Услуги",
            subtitle: "Комплексные IT-решения для развития вашего бизнеса",
            web: "Веб-разработка",
            mobile: "Мобильная разработка",
            cloud: "Облачные решения",
            security: "Кибербезопасность"
        }
    },
    de: {
        nav: {
            home: "Startseite",
            about: "Über uns",
            services: "Dienstleistungen",
            portfolio: "Portfolio",
            contact: "Kontakt"
        },
        hero: {
            title: "Digitale Transformation Ihres Geschäfts",
            subtitle: "Professionelle IT-Lösungen für Unternehmen jeder Größe",
            cta1: "Unsere Dienstleistungen",
            cta2: "Kontaktieren Sie uns"
        },
        services: {
            title: "Unsere Dienstleistungen",
            subtitle: "Umfassende IT-Lösungen für die Entwicklung Ihres Geschäfts",
            web: "Webentwicklung",
            mobile: "Mobile Entwicklung",
            cloud: "Cloud-Lösungen",
            security: "Cybersicherheit"
        }
    }
};

// API Routes
app.post('/api/contact', [
    body('name').trim().isLength({ min: 2, max: 100 }).withMessage('Name muss 2-100 Zeichen lang sein'),
    body('email').isEmail().normalizeEmail().withMessage('Ungültige E-Mail-Adresse'),
    body('message').trim().isLength({ min: 10, max: 2000 }).withMessage('Nachricht muss 10-2000 Zeichen lang sein')
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, phone, company, service, budget, message } = req.body;

        const telegramMessage = `
📬 Neue Kontaktanfrage:

👤 Name: ${name}
📧 Email: ${email}
📱 Telefon: ${phone || 'Nicht angegeben'}
🏢 Firma: ${company || 'Nicht angegeben'}
🛠️ Dienstleistung: ${service || 'Nicht angegeben'}
💰 Budget: ${budget || 'Nicht angegeben'}

💬 Nachricht:
${message}

⏰ Zeit: ${new Date().toLocaleString('de-DE')}
        `;

        await axios.post(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
            chat_id: process.env.TELEGRAM_CHAT_ID,
            text: telegramMessage,
            parse_mode: 'Markdown'
        });

        res.json({ success: true, message: 'Nachricht erfolgreich gesendet!' });
    } catch (error) {
        console.error('Error sending message:', error);
        res.status(500).json({ error: 'Fehler beim Senden der Nachricht' });
    }
});

// Admin routes
app.get('/admin/login', (req, res) => {
    if (req.isAuthenticated()) {
        return res.redirect('/admin');
    }
    res.sendFile(path.join(__dirname, 'admin', 'login.html'));
});

app.post('/admin/login', passport.authenticate('local', {
    successRedirect: '/admin',
    failureRedirect: '/admin/login',
    failureFlash: false
}));

app.get('/admin/logout', (req, res) => {
    req.logout(() => {
        res.redirect('/admin/login');
    });
});

app.get('/admin', requireAuth, (req, res) => {
    res.sendFile(path.join(__dirname, 'admin', 'index.html'));
});

// API routes for admin panel
app.get('/api/admin/content', requireAuth, (req, res) => {
    // Return current content data
    const content = {
        company: {
            name: "T.Digital",
            description: "Professionelle IT-Lösungen für Ihr Unternehmen"
        },
        contact: {
            email: "info@t.digital",
            phone: "+7 (495) 123-45-67",
            address: "Moskau, Russland"
        },
        services: [],
        team: [],
        portfolio: []
    };
    res.json(content);
});

app.post('/api/admin/content', requireAuth, (req, res) => {
    // Save content changes
    // In a real application, this would save to a database
    res.json({ success: true });
});

// Language API
app.get('/api/lang/:lang', (req, res) => {
    const lang = req.params.lang;
    if (translations[lang]) {
        req.session.lang = lang;
        res.json({ success: true, translations: translations[lang] });
    } else {
        res.status(404).json({ error: 'Language not found' });
    }
});

// Dynamic HTML rendering with language support
app.get('/', (req, res) => {
    let html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
    const lang = req.session.lang || 'ru';
    const langData = translations[lang];

    // Replace placeholders with translations
    html = html.replace('{{lang}}', lang);
    html = html.replace(/\{\{(\w+)\.(\w+)\}\}/g, (match, section, key) => {
        return langData[section] && langData[section][key] ? langData[section][key] : match;
    });

    res.send(html);
});

// 404 handler
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'));
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
    console.log(`📱 Admin panel: http://localhost:${PORT}/admin/login`);
    console.log('Press Ctrl+C to stop the server');
});