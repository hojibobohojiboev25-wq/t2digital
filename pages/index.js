import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <div>
      <Head>
        <title>T.Digital - IT Решения для Вашего Бизнеса</title>
        <meta name="description" content="T.Digital - профессиональные IT решения, разработка ПО, веб-приложений и цифровых стратегий" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', sans-serif;
          line-height: 1.6;
          color: #333;
          background-color: #ffffff;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .hero {
          padding: 120px 0 80px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
          color: white;
          text-align: center;
        }

        .hero-title {
          font-size: 56px;
          font-weight: 700;
          margin-bottom: 24px;
        }

        .hero-subtitle {
          font-size: 20px;
          opacity: 0.9;
          margin-bottom: 40px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          padding: 16px 32px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 16px;
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
          border: none;
          background: #2563eb;
          color: white;
        }

        .btn:hover {
          background: #1d4ed8;
          transform: translateY(-2px);
        }

        .btn-secondary {
          background: transparent;
          border: 2px solid white;
          margin-left: 20px;
        }

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid #e2e8f0;
          z-index: 1000;
          padding: 16px 0;
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-logo h2 {
          font-size: 28px;
          font-weight: 700;
          color: #1e293b;
        }

        .nav-logo span {
          color: #2563eb;
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
        }

        .nav-link:hover, .nav-link.active {
          color: #2563eb;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 36px;
          }

          .nav-menu {
            display: none;
          }

          .hero {
            padding: 100px 0 60px;
          }
        }
      `}</style>

      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <h2><span>T.</span>Digital</h2>
          </div>
          <div className="nav-menu">
            <a href="/" className="nav-link active">Главная</a>
            <a href="/about" className="nav-link">О компании</a>
            <a href="/services" className="nav-link">Услуги</a>
            <a href="/portfolio" className="nav-link">Портфолио</a>
            <a href="/contact" className="nav-link">Контакты</a>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="container">
          <h1 className="hero-title">
            Цифровая Трансформация<br />
            <span style={{ color: '#06b6d4' }}>Вашего Бизнеса</span>
          </h1>
          <p className="hero-subtitle">
            Профессиональные IT-решения для компаний любого масштаба
          </p>
          <div>
            <a href="/services" className="btn">Наши услуги</a>
            <a href="/contact" className="btn btn-secondary">Связаться с нами</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}