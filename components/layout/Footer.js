import { useTranslation } from 'next-i18next';
import Link from 'next/link';

export default function Footer() {
  const { t } = useTranslation('common');

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3><span>T.</span>Digital</h3>
            <p>{t('footer.description')}</p>
            <div className="social-links">
              <a href="#" className="social-link"><i className="fab fa-telegram"></i></a>
              <a href="#" className="social-link"><i className="fab fa-vk"></i></a>
              <a href="#" className="social-link"><i className="fab fa-github"></i></a>
            </div>
          </div>
          <div className="footer-section">
            <h4>{t('footer.services')}</h4>
            <ul>
              <li><Link href="/services">Веб-разработка</Link></li>
              <li><Link href="/services">Мобильная разработка</Link></li>
              <li><Link href="/services">Облачные решения</Link></li>
              <li><Link href="/services">Кибербезопасность</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>{t('footer.company')}</h4>
            <ul>
              <li><Link href="/about">О нас</Link></li>
              <li><Link href="/portfolio">Портфолио</Link></li>
              <li><Link href="/contact">Контакты</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>{t('footer.contacts')}</h4>
            <p><i className="fas fa-envelope"></i> info@t.digital</p>
            <p><i className="fas fa-phone"></i> +7 (495) 123-45-67</p>
            <p><i className="fas fa-map-marker-alt"></i> Москва, Россия</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 T.Digital. Все права защищены.</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--text-primary);
          color: white;
          padding: 60px 0 20px;
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
          margin-bottom: 40px;
        }

        .footer-section h3 {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 20px;
          color: white;
        }

        .footer-section h4 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 20px;
          color: white;
        }

        .footer-section p {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .footer-section ul {
          list-style: none;
        }

        .footer-section ul li {
          margin-bottom: 12px;
        }

        .footer-section ul li a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-section ul li a:hover {
          color: var(--primary-color);
        }

        .social-links {
          display: flex;
          gap: 16px;
          margin-top: 20px;
        }

        .social-link {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: var(--primary-color);
          transform: translateY(-2px);
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 20px;
          text-align: center;
          color: rgba(255, 255, 255, 0.6);
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .social-links {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
}