import { useTranslation } from 'next-i18next';
import Link from 'next/link';

export default function Hero() {
  const { t } = useTranslation('common');

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1
            className="hero-title"
            dangerouslySetInnerHTML={{ __html: t('hero.title') }}
          />
          <p className="hero-subtitle">{t('hero.subtitle')}</p>
          <div className="hero-buttons">
            <Link href="/services" legacyBehavior>
              <a className="btn btn-primary">{t('hero.button1')}</a>
            </Link>
            <Link href="/contact" legacyBehavior>
              <a className="btn btn-secondary">{t('hero.button2')}</a>
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-illustration">
            <i className="fas fa-code"></i>
            <i className="fas fa-mobile-alt"></i>
            <i className="fas fa-cloud"></i>
            <i className="fas fa-rocket"></i>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          padding: 120px 0 80px;
          background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .hero-title {
          font-size: 56px;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.1;
          margin-bottom: 24px;
        }

        .hero-subtitle {
          font-size: 20px;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 40px;
        }

        .hero-buttons {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .hero-image {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-illustration {
          position: relative;
          width: 400px;
          height: 400px;
        }

        .hero-illustration i {
          position: absolute;
          font-size: 60px;
          color: var(--primary-color);
          opacity: 0.7;
          animation: float 6s ease-in-out infinite;
        }

        .hero-illustration i:nth-child(1) {
          top: 20%;
          left: 20%;
          animation-delay: 0s;
        }

        .hero-illustration i:nth-child(2) {
          top: 60%;
          left: 10%;
          animation-delay: 2s;
        }

        .hero-illustration i:nth-child(3) {
          top: 30%;
          right: 15%;
          animation-delay: 4s;
        }

        .hero-illustration i:nth-child(4) {
          bottom: 20%;
          right: 25%;
          animation-delay: 1s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @media (max-width: 768px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }

          .hero-title {
            font-size: 36px;
          }

          .hero-subtitle {
            font-size: 18px;
          }

          .hero-buttons {
            justify-content: center;
          }

          .hero-illustration {
            width: 300px;
            height: 300px;
          }

          .hero-illustration i {
            font-size: 40px;
          }
        }
      `}</style>
    </section>
  );
}