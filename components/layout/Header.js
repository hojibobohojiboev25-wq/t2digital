import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Header({ isScrolled }) {
  const { t } = useTranslation('common');
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const changeLanguage = (lang) => {
    router.push(router.pathname, router.asPath, { locale: lang });
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <Link href="/" legacyBehavior>
            <a>
              <h2><span>T.</span>Digital</h2>
            </a>
          </Link>
        </div>

        <div className={`nav-menu ${isMobileMenuOpen ? 'mobile-menu' : ''}`}>
          <Link href="/" legacyBehavior>
            <a className={`nav-link ${router.pathname === '/' ? 'active' : ''}`}>
              {t('nav.home')}
            </a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className={`nav-link ${router.pathname === '/about' ? 'active' : ''}`}>
              {t('nav.about')}
            </a>
          </Link>
          <Link href="/services" legacyBehavior>
            <a className={`nav-link ${router.pathname === '/services' ? 'active' : ''}`}>
              {t('nav.services')}
            </a>
          </Link>
          <Link href="/portfolio" legacyBehavior>
            <a className={`nav-link ${router.pathname === '/portfolio' ? 'active' : ''}`}>
              {t('nav.portfolio')}
            </a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className={`nav-link ${router.pathname === '/contact' ? 'active' : ''}`}>
              {t('nav.contact')}
            </a>
          </Link>
        </div>

        <div className="nav-language">
          <select
            value={router.locale}
            onChange={(e) => changeLanguage(e.target.value)}
          >
            <option value="ru">Русский</option>
            <option value="de">Deutsch</option>
          </select>
        </div>

        <div className="nav-toggle" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}