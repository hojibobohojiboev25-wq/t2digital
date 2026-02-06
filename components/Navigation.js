'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <a href="/" style={{
            textDecoration: 'none',
            color: 'inherit'
          }}>
            <h2><span style={{ color: '#2563eb' }}>T.</span>Digital</h2>
          </a>
        </div>

        <div className={`nav-menu ${isMobileMenuOpen ? 'mobile-menu' : ''}`}>
            <a href="/" className="nav-link active">Startseite</a>
            <a href="/about" className="nav-link">Über uns</a>
            <a href="/services" className="nav-link">Dienstleistungen</a>
            <a href="/portfolio" className="nav-link">Portfolio</a>
            <a href="/contact" className="nav-link">Kontakt</a>
        </div>

        <div className="nav-toggle" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid #e2e8f0;
          z-index: 1000;
          transition: all 0.3s ease;
        }

        .navbar.scrolled {
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 80px;
        }

        .nav-logo h2 {
          font-size: 28px;
          font-weight: 700;
          color: #1e293b;
          margin: 0;
        }

        .nav-menu {
          display: flex;
          list-style: none;
          gap: 40px;
        }

        .nav-link {
          text-decoration: none;
          color: #64748b;
          font-weight: 500;
          font-size: 16px;
          transition: color 0.3s ease;
          position: relative;
        }

        .nav-link:hover,
        .nav-link.active {
          color: #2563eb;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: #2563eb;
          transition: width 0.3s ease;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }

        .nav-toggle {
          display: none;
          flex-direction: column;
          cursor: pointer;
          gap: 4px;
        }

        .nav-toggle span {
          width: 25px;
          height: 3px;
          background: #1e293b;
          transition: 0.3s;
        }

        @media (max-width: 768px) {
          .nav-menu {
            display: none;
          }

          .nav-toggle {
            display: flex;
          }

          .nav-container {
            height: 70px;
          }

          .nav-menu.mobile-menu {
            display: flex;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            flex-direction: column;
            padding: 20px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            border-top: 1px solid #e2e8f0;
          }

          .nav-menu.mobile-menu .nav-link {
            padding: 12px 0;
            border-bottom: 1px solid #e2e8f0;
          }

          .nav-menu.mobile-menu .nav-link:last-child {
            border-bottom: none;
          }
        }
      `}</style>
    </nav>
  );
}