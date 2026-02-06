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
          background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #1e40af 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.05)"/><circle cx="50" cy="50" r="0.5" fill="rgba(255,255,255,0.15)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
          opacity: 0.1;
          animation: hero-float 20s ease-in-out infinite;
        }

        @keyframes hero-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(1deg); }
          50% { transform: translateY(-20px) rotate(0deg); }
          75% { transform: translateY(-10px) rotate(-1deg); }
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
          color: rgba(255, 255, 255, 0.8);
          opacity: 0.9;
          animation: hero-float 8s ease-in-out infinite;
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
        }

        .hero-illustration i:nth-child(1) {
          top: 15%;
          left: 15%;
          animation-delay: 0s;
        }

        .hero-illustration i:nth-child(2) {
          top: 55%;
          left: 8%;
          animation-delay: 2s;
        }

        .hero-illustration i:nth-child(3) {
          top: 25%;
          right: 10%;
          animation-delay: 4s;
        }

        .hero-illustration i:nth-child(4) {
          bottom: 15%;
          right: 20%;
          animation-delay: 1s;
        }

        .hero-illustration i:nth-child(5) {
          top: 40%;
          left: 50%;
          transform: translateX(-50%);
          animation-delay: 3s;
        }

        @keyframes hero-float {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          25% { transform: translateY(-25px) rotate(5deg) scale(1.05); }
          50% { transform: translateY(-30px) rotate(0deg) scale(1.1); }
          75% { transform: translateY(-25px) rotate(-5deg) scale(1.05); }
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
          border-radius: 20px;
          box-shadow: 0 4px 25px rgba(0, 0, 0, 0.08);
          text-align: center;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(255, 255, 255, 0.8);
          position: relative;
          overflow: hidden;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }

        .service-card:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
        }

        .service-card:hover::before {
          transform: scaleX(1);
        }

        .service-icon {
          width: 90px;
          height: 90px;
          background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
          font-size: 36px;
          color: white;
          box-shadow: 0 8px 25px rgba(37, 99, 235, 0.3);
          transition: all 0.4s ease;
          position: relative;
        }

        .service-card:hover .service-icon {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 12px 35px rgba(37, 99, 235, 0.4);
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
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 25px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.8);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        .portfolio-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(37, 99, 235, 0.05), rgba(6, 182, 212, 0.05));
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 1;
        }

        .portfolio-item:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
        }

        .portfolio-item:hover::before {
          opacity: 1;
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
          position: relative;
          z-index: 2;
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
            Digitale Transformation<br />
            <span className="hero-accent">Ihres Geschäfts</span>
          </h1>
          <p className="hero-subtitle">
            Professionelle IT-Lösungen für Unternehmen jeder Größe.
            Softwareentwicklung, Webanwendungen und digitale Strategien.
          </p>
          <div className="hero-buttons">
            <a href="/services" className="btn btn-primary">Unsere Dienstleistungen</a>
            <a href="/contact" className="btn btn-secondary">Kontaktieren Sie uns</a>
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
            <h2>Unsere Dienstleistungen</h2>
            <p>Umfassende IT-Lösungen für die Entwicklung Ihres Geschäfts</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-code"></i>
              </div>
              <h3>Webentwicklung</h3>
              <p>Erstellung moderner Webanwendungen und Websites mit fortschrittlichen Technologien</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h3>Mobile Entwicklung</h3>
              <p>Native und Cross-Plattform-Mobile-Apps für iOS und Android</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-cloud"></i>
              </div>
              <h3>Cloud-Lösungen</h3>
              <p>Migration in die Cloud, DevOps und Infrastrukturlösungen</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Cybersicherheit</h3>
              <p>Datenschutz und Informationssicherheit Ihres Unternehmens</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Unsere Geschichte</h2>
              <p>
                T.Digital wurde 2019 von einer Gruppe von IT-Technologie-Enthusiasten gegründet... Wir glauben, dass die richtige Anwendung von IT Geschäftsprozesse grundlegend verändern und neue Möglichkeiten für Wachstum und Entwicklung eröffnen kann.
              </p>
            </div>
            <div className="about-image">
              <div className="story-placeholder">
                <i className="fas fa-building"></i>
                <p>Büro T.Digital</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio-section">
        <div className="container">
          <div className="section-header">
            <h2>Unser Portfolio</h2>
            <p>Unsere erfolgreichen Projekte und Fallstudien</p>
          </div>

          <div className="portfolio-grid">
            <div className="portfolio-item">
              <div className="project-placeholder">
                <i className="fas fa-shopping-cart"></i>
                <p>E-Commerce Plattform</p>
              </div>
              <div className="portfolio-info">
                <h3>E-Commerce Plattform</h3>
                <p>Vollständige E-Commerce-Plattform mit Zahlungssystem-Integration</p>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="project-placeholder">
                <i className="fas fa-mobile-screen-button"></i>
                <p>Mobile App</p>
              </div>
              <div className="portfolio-info">
                <h3>Essenslieferservice-App</h3>
                <p>Cross-Plattform-App für Essensbestellung mit Geolocation</p>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="project-placeholder">
                <i className="fas fa-building"></i>
                <p>Unternehmensportal</p>
              </div>
              <div className="portfolio-info">
                <h3>Unternehmensportal</h3>
                <p>Dokumentenverwaltungssystem für große Unternehmen</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}