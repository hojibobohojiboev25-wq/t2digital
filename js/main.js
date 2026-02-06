// Main JavaScript for T.Digital Website

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    initMobileMenu();

    // Navbar scroll effect
    initNavbarScroll();

    // Smooth scrolling for anchor links
    initSmoothScroll();

    // Animation on scroll
    initScrollAnimations();

    // Form validation
    initFormValidation();

    // Initialize all functions
    function initMobileMenu() {
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');

        if (navToggle && navMenu) {
            navToggle.addEventListener('click', function() {
                navMenu.classList.toggle('mobile-menu');

                // Animate hamburger menu
                const spans = navToggle.querySelectorAll('span');
                spans.forEach(span => span.classList.toggle('active'));
            });

            // Close mobile menu when clicking on a link
            const navLinks = navMenu.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    navMenu.classList.remove('mobile-menu');
                    const spans = navToggle.querySelectorAll('span');
                    spans.forEach(span => span.classList.remove('active'));
                });
            });
        }
    }

    function initNavbarScroll() {
        const navbar = document.querySelector('.navbar');
        let lastScrollTop = 0;

        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            lastScrollTop = scrollTop;
        });
    }

    function initSmoothScroll() {
        const anchorLinks = document.querySelectorAll('a[href^="#"]');

        anchorLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();

                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar

                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Add fade-in class to elements that should animate
        const animateElements = document.querySelectorAll('.service-card, .feature-item, .stat-item');
        animateElements.forEach(element => {
            element.classList.add('fade-in');
            observer.observe(element);
        });
    }

    function initFormValidation() {
        const forms = document.querySelectorAll('form');

        forms.forEach(form => {
            form.addEventListener('submit', function(e) {
                e.preventDefault();

                if (validateForm(form)) {
                    // Simulate form submission
                    showFormSuccess(form);
                }
            });
        });
    }

    function validateForm(form) {
        let isValid = true;
        const requiredFields = form.querySelectorAll('[required]');
        const emailFields = form.querySelectorAll('input[type="email"]');

        // Clear previous error messages
        form.querySelectorAll('.error-message').forEach(error => error.remove());

        // Validate required fields
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                showFieldError(field, 'Это поле обязательно для заполнения');
                isValid = false;
            }
        });

        // Validate email fields
        emailFields.forEach(field => {
            if (field.value && !isValidEmail(field.value)) {
                showFieldError(field, 'Введите корректный email адрес');
                isValid = false;
            }
        });

        return isValid;
    }

    function showFieldError(field, message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        errorDiv.style.cssText = `
            color: #dc2626;
            font-size: 14px;
            margin-top: 4px;
            font-weight: 500;
        `;

        field.parentNode.insertBefore(errorDiv, field.nextSibling);
        field.style.borderColor = '#dc2626';
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function showFormSuccess(form) {
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;

        // Show success message
        submitBtn.textContent = '✓ Отправлено!';
        submitBtn.style.backgroundColor = '#10b981';
        submitBtn.disabled = true;

        // Reset form
        form.reset();

        // Reset button after 3 seconds
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.backgroundColor = '';
            submitBtn.disabled = false;
        }, 3000);
    }

    // Typing animation for hero title (optional enhancement)
    function initTypingAnimation() {
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle && window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
            const text = heroTitle.textContent;
            heroTitle.textContent = '';
            heroTitle.style.borderRight = '2px solid var(--primary-color)';

            let i = 0;
            const timer = setInterval(() => {
                if (i < text.length) {
                    heroTitle.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(timer);
                    setTimeout(() => {
                        heroTitle.style.borderRight = 'none';
                    }, 500);
                }
            }, 50);
        }
    }

    // Initialize typing animation with a small delay
    setTimeout(initTypingAnimation, 1000);

    // Add loading animation for page transitions
    function addPageTransition() {
        const links = document.querySelectorAll('a[href]');

        links.forEach(link => {
            link.addEventListener('click', function(e) {
                if (this.hostname === window.location.hostname) {
                    e.preventDefault();
                    document.body.style.opacity = '0';

                    setTimeout(() => {
                        window.location.href = this.href;
                    }, 300);
                }
            });
        });
    }

    addPageTransition();

    // Add scroll progress indicator
    function addScrollProgress() {
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: var(--primary-color);
            z-index: 9999;
            transition: width 0.3s ease;
        `;

        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;

            progressBar.style.width = scrollPercent + '%';
        });
    }

    addScrollProgress();
});

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add some CSS for mobile menu animations
const style = document.createElement('style');
style.textContent = `
    .nav-toggle span.active:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }

    .nav-toggle span.active:nth-child(2) {
        opacity: 0;
    }

    .nav-toggle span.active:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }

    .scroll-progress {
        transition: width 0.3s ease;
    }

    @media (max-width: 768px) {
        .nav-menu.mobile-menu {
            animation: slideDown 0.3s ease;
        }
    }

    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);