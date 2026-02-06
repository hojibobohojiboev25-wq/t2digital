const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const crypto = require('crypto');

const PORT = process.env.PORT || 8080;

// Simple in-memory storage for content (in production, use database)
let contentData = {
    company: {
        name: "T.Digital",
        description: "Professionelle IT-Lösungen für Ihr Unternehmen"
    },
    contact: {
        email: "info@t.digital",
        phone: "+7 (495) 123-45-67"
    }
};

// Simple session storage
const sessions = new Map();

// Language data
const translations = {
    ru: JSON.parse(fs.readFileSync('./languages/ru.json', 'utf8')),
    de: JSON.parse(fs.readFileSync('./languages/de.json', 'utf8'))
};

function parseCookies(cookieHeader) {
    const cookies = {};
    if (cookieHeader) {
        cookieHeader.split(';').forEach(cookie => {
            const [name, value] = cookie.trim().split('=');
            cookies[name] = value;
        });
    }
    return cookies;
}

function generateSessionId() {
    return crypto.randomBytes(16).toString('hex');
}

function serveFile(filePath, res) {
    const ext = path.extname(filePath);
    const contentType = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.svg': 'image/svg+xml',
        '.ico': 'image/x-icon'
    }[ext] || 'text/plain';

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end('File not found');
            return;
        }

        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    });
}

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const method = req.method;
    const query = parsedUrl.query;

    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    // Parse cookies
    const cookies = parseCookies(req.headers.cookie);
    let sessionId = cookies.sessionId;
    let session = sessions.get(sessionId);

    if (!session) {
        sessionId = generateSessionId();
        session = { lang: 'ru', isAuthenticated: false };
        sessions.set(sessionId, session);
        res.setHeader('Set-Cookie', `sessionId=${sessionId}; HttpOnly; Path=/`);
    }

    // Language handling
    if (pathname.startsWith('/api/lang/')) {
        const lang = pathname.split('/api/lang/')[1];
        if (translations[lang]) {
            session.lang = lang;
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: true, translations: translations[lang] }));
        } else {
            res.writeHead(404);
            res.end(JSON.stringify({ error: 'Language not found' }));
        }
        return;
    }

    // Contact form handling
    if (pathname === '/api/contact' && method === 'POST') {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', async () => {
            try {
                const formData = JSON.parse(body);
                console.log('New contact form submission:', formData);

                // Here you would send to Telegram
                // For now, just log it
                console.log('Would send to Telegram:', formData);

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true, message: 'Message sent successfully!' }));
            } catch (error) {
                console.error('Error processing contact form:', error);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Internal server error' }));
            }
        });
        return;
    }

    // Admin routes
    if (pathname.startsWith('/admin')) {
        if (pathname === '/admin/login') {
            if (method === 'GET') {
                serveFile('./admin/login.html', res);
            } else if (method === 'POST') {
                let body = '';
                req.on('data', chunk => body += chunk);
                req.on('end', () => {
                    // Simple authentication (in production, use proper hashing)
                    const formData = JSON.parse(body || '{}');
                    if (formData.username === 'admin' && formData.password === 'admin123') {
                        session.isAuthenticated = true;
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ success: true }));
                    } else {
                        res.writeHead(401, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ error: 'Invalid credentials' }));
                    }
                });
            }
            return;
        }

        if (pathname === '/admin/logout') {
            session.isAuthenticated = false;
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: true }));
            return;
        }

        if (pathname === '/admin' && session.isAuthenticated) {
            serveFile('./admin/index.html', res);
            return;
        }

        if (pathname === '/admin' && !session.isAuthenticated) {
            res.writeHead(302, { 'Location': '/admin/login' });
            res.end();
            return;
        }
    }

    // API routes
    if (pathname === '/api/admin/content' && session.isAuthenticated) {
        if (method === 'GET') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(contentData));
        } else if (method === 'POST') {
            let body = '';
            req.on('data', chunk => body += chunk);
            req.on('end', () => {
                try {
                    const updateData = JSON.parse(body);
                    Object.assign(contentData, updateData);
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ success: true }));
                } catch (error) {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'Invalid data' }));
                }
            });
        }
        return;
    }

    // Serve static files
    let filePath = path.join(__dirname, pathname === '/' ? 'index.html' : pathname);

    // Handle directory requests
    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
        filePath = path.join(filePath, 'index.html');
    }

    // Apply language to HTML files
    if (path.extname(filePath) === '.html') {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end('File not found');
                return;
            }

            // Simple language replacement (in production, use template engine)
            if (session.lang && session.lang !== 'ru') {
                const langData = translations[session.lang];
                if (langData) {
                    // Replace data-key attributes with translations
                    data = data.replace(/data-key="([^"]+)"/g, (match, key) => {
                        const keys = key.split('.');
                        let value = langData;
                        for (const k of keys) {
                            value = value && value[k];
                        }
                        return value ? `>${value}<` : match;
                    });
                }
            }

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } else {
        serveFile(filePath, res);
    }
});

server.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
    console.log(`📱 Admin panel: http://localhost:${PORT}/admin/login`);
    console.log('Admin credentials: admin / admin123');
    console.log('Press Ctrl+C to stop the server');
});