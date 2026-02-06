import { useTranslation } from 'next-i18next';

export default function Services() {
  const { t } = useTranslation('common');

  const services = [
    {
      id: 'web',
      icon: 'fas fa-code',
      title: t('services.web.title'),
      description: t('services.web.description')
    },
    {
      id: 'mobile',
      icon: 'fas fa-mobile-alt',
      title: t('services.mobile.title'),
      description: t('services.mobile.description')
    },
    {
      id: 'cloud',
      icon: 'fas fa-cloud',
      title: t('services.cloud.title'),
      description: t('services.cloud.description')
    },
    {
      id: 'security',
      icon: 'fas fa-shield-alt',
      title: t('services.security.title'),
      description: t('services.security.description')
    }
  ];

  return (
    <section className="services-overview">
      <div className="container">
        <div className="section-header">
          <h2>{t('services.title')}</h2>
          <p>{t('services.subtitle')}</p>
        </div>
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

      <style jsx>{`
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

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}