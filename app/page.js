'use client';

export default function Home() {

  return (
    <div>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: 'Inter', sans-serif;
          line-height: 1.6;
          color: #333;
          background-color: #ffffff;
        }

        /* Color Variables */
        :root {
          --primary-color: #2563eb;
          --primary-dark: #1d4ed8;
          --primary-light: #dbeafe;
          --secondary-color: #64748b;
          --accent-color: #06b6d4;
          --text-primary: #1e293b;
          --text-secondary: #64748b;
          --text-light: #94a3b8;
          --bg-primary: #ffffff;
          --bg-secondary: #f8fafc;
          --bg-tertiary: #f1f5f9;
          --border-color: #e2e8f0;
          --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }


        /* Buttons */
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
        }

        .btn-primary {
          background: var(--primary-color);
          color: white;
          box-shadow: var(--shadow);
        }

        .btn-primary:hover {
          background: var(--primary-dark);
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }

        .btn-secondary {
          background: transparent;
          color: var(--primary-color);
          border: 2px solid var(--primary-color);
        }

        .btn-secondary:hover {
          background: var(--primary-color);
          color: white;
        }

        /* Sections */
        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-header h2 {
          font-size: 40px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 16px;
        }

        .section-header p {
          font-size: 18px;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        /* Hero Section */
        .hero {
          padding: 120px 0 80px;
          background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
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

        .hero-content {
          color: var(--text-primary);
        }

        .hero-title {
          font-size: 56px;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.1;
          margin-bottom: 24px;
        }

        .hero-accent {
          color: var(--primary-color);
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

        /* Services Overview */
        .services-overview {
          padding: 100px 0;
          background: var(--bg-primary);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 40px;
        }

        .service-card {
          background: var(--bg-primary);
          padding: 40px 30px;
          border-radius: 16px;
          box-shadow: var(--shadow);
          text-align: center;
          transition: all 0.3s ease;
          border: 1px solid var(--border-color);
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
        }

        .service-icon {
          width: 80px;
          height: 80px;
          background: var(--primary-light);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
          font-size: 32px;
          color: var(--primary-color);
        }

        .service-card h3 {
          font-size: 24px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 16px;
        }

        .service-card p {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* About Section */
        .about-section {
          padding: 100px 0;
          background: var(--bg-secondary);
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .about-text h2 {
          font-size: 40px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 24px;
        }

        .about-text p {
          font-size: 18px;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 40px;
        }

        .story-placeholder {
          width: 100%;
          max-width: 400px;
          height: 300px;
          background: var(--bg-primary);
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: var(--text-light);
          border: 2px dashed var(--border-color);
        }

        .story-placeholder i {
          font-size: 48px;
          margin-bottom: 16px;
        }

        /* Portfolio Section */
        .portfolio-section {
          padding: 100px 0;
          background: var(--bg-primary);
        }

        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 40px;
        }

        .portfolio-item {
          background: var(--bg-primary);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: var(--shadow);
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }

        .portfolio-item:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
        }

        .project-placeholder {
          width: 100%;
          height: 250px;
          background: var(--bg-secondary);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: var(--text-light);
        }

        .project-placeholder i {
          font-size: 48px;
          margin-bottom: 16px;
        }

        .portfolio-info {
          padding: 24px;
        }

        .portfolio-info h3 {
          font-size: 20px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 12px;
        }

        .portfolio-info p {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 16px;
        }

        /* Responsive Design */

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

          .about-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }

          .portfolio-grid {
            grid-template-columns: 1fr;
          }

          .section-header h2 {
            font-size: 32px;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Цифровая Трансформация<br>
              <span className="hero-accent">Вашего Бизнеса</span>
            </h1>
            <p className="hero-subtitle">
              Профессиональные IT-решения для компаний любого масштаба.
              Разработка ПО, веб-приложений и цифровых стратегий.
            </p>
            <div className="hero-buttons">
              <a href="/services" className="btn btn-primary">Наши услуги</a>
              <a href="/contact" className="btn btn-secondary">Связаться с нами</a>
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
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <div className="container">
          <div className="section-header">
            <h2>Наши Услуги</h2>
            <p>Комплексные IT-решения для развития вашего бизнеса</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-code"></i>
              </div>
              <h3>Веб-разработка</h3>
              <p>Создание современных веб-приложений и сайтов с использованием передовых технологий</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h3>Мобильная разработка</h3>
              <p>Нативные и кроссплатформенные мобильные приложения для iOS и Android</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-cloud"></i>
              </div>
              <h3>Облачные решения</h3>
              <p>Миграция в облако, DevOps и инфраструктурные решения</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Кибербезопасность</h3>
              <p>Защита данных и информационная безопасность вашего бизнеса</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Наша история</h2>
              <p>
                Компания T.Digital была основана в 2019 году группой энтузиастов IT-технологий... Мы верим, что правильное применение IT может кардинально изменить бизнес-процессы и открыть новые возможности для роста и развития.
              </p>
            </div>
            <div className="about-image">
              <div className="story-placeholder">
                <i className="fas fa-building"></i>
                <p>Офис T.Digital</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio-section">
        <div className="container">
          <div className="section-header">
            <h2>Наше портфолио</h2>
            <p>Наши успешные проекты и кейсы</p>
          </div>

          <div className="portfolio-grid">
            <div className="portfolio-item">
              <div className="project-placeholder">
                <i className="fas fa-shopping-cart"></i>
                <p>E-commerce платформа</p>
              </div>
              <div className="portfolio-info">
                <h3>E-commerce платформа</h3>
                <p>Полнофункциональный интернет-магазин с интеграцией платежных систем</p>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="project-placeholder">
                <i className="fas fa-mobile-screen-button"></i>
                <p>Мобильное приложение</p>
              </div>
              <div className="portfolio-info">
                <h3>Приложение доставки еды</h3>
                <p>Кроссплатформенное приложение с геолокацией</p>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="project-placeholder">
                <i className="fas fa-building"></i>
                <p>Корпоративный портал</p>
              </div>
              <div className="portfolio-info">
                <h3>Корпоративный портал</h3>
                <p>Система управления документами</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}