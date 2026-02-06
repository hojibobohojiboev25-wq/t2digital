export default function Services() {
  const services = [
    {
      id: 'web',
      icon: 'fas fa-code',
      title: 'Веб-разработка',
      description: 'Создание современных веб-приложений и сайтов'
    },
    {
      id: 'mobile',
      icon: 'fas fa-mobile-alt',
      title: 'Мобильная разработка',
      description: 'Нативные и кроссплатформенные приложения'
    },
    {
      id: 'cloud',
      icon: 'fas fa-cloud',
      title: 'Облачные решения',
      description: 'Миграция в облако, DevOps и инфраструктура'
    },
    {
      id: 'security',
      icon: 'fas fa-shield-alt',
      title: 'Кибербезопасность',
      description: 'Защита данных и информационная безопасность'
    }
  ];

  return (
    <div>
      <style jsx global>{`
        .page-hero {
          padding: 120px 0 60px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          text-align: center;
        }

        .page-hero h1 {
          font-size: 48px;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .page-hero p {
          font-size: 20px;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .services-section {
          padding: 100px 0;
          background: #ffffff;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 40px;
        }

        .service-card {
          background: #ffffff;
          padding: 40px 30px;
          border-radius: 16px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          text-align: center;
          transition: all 0.3s ease;
          border: 1px solid #e2e8f0;
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        .service-icon {
          width: 80px;
          height: 80px;
          background: #dbeafe;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
          font-size: 32px;
          color: #2563eb;
        }

        .service-card h3 {
          font-size: 24px;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 16px;
        }

        .service-card p {
          color: #64748b;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }

          .page-hero h1 {
            font-size: 36px;
          }
        }
      `}</style>

      <section className="page-hero">
        <div className="container">
          <h1>Наши Услуги</h1>
          <p>Комплексные IT-решения для развития вашего бизнеса</p>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}