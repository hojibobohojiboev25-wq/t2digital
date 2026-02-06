import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function Services() {
  const { t } = useTranslation('common');

  const services = [
    {
      id: 'web',
      icon: 'fas fa-code',
      title: t('services.web.title'),
      description: t('services.web.description'),
      features: [
        'React, Vue.js, Angular',
        'Node.js, Python, PHP',
        'HTML5, CSS3, JavaScript',
        'REST API, GraphQL'
      ]
    },
    {
      id: 'mobile',
      icon: 'fas fa-mobile-alt',
      title: t('services.mobile.title'),
      description: t('services.mobile.description'),
      features: [
        'iOS (Swift, Objective-C)',
        'Android (Kotlin, Java)',
        'React Native, Flutter',
        'Progressive Web Apps'
      ]
    },
    {
      id: 'cloud',
      icon: 'fas fa-cloud',
      title: t('services.cloud.title'),
      description: t('services.cloud.description'),
      features: [
        'Amazon Web Services (AWS)',
        'Microsoft Azure',
        'Google Cloud Platform',
        'Yandex Cloud'
      ]
    },
    {
      id: 'security',
      icon: 'fas fa-shield-alt',
      title: t('services.security.title'),
      description: t('services.security.description'),
      features: [
        'Аудит безопасности',
        'Внедрение систем защиты',
        'Мониторинг угроз',
        'Реагирование на инциденты'
      ]
    }
  ];

  return (
    <Layout>
      <Head>
        <title>{t('nav.services')} - T.Digital</title>
        <meta name="description" content="Услуги компании T.Digital: веб-разработка, мобильная разработка, облачные решения, кибербезопасность" />
      </Head>

      <section className="page-hero">
        <div className="container">
          <h1>{t('services.title')}</h1>
          <p>{t('services.subtitle')}</p>
        </div>

        <style jsx>{`
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

          @media (max-width: 768px) {
            .page-hero h1 {
              font-size: 36px;
            }

            .page-hero p {
              font-size: 18px;
            }
          }
        `}</style>
      </section>

      <section className="services-section">
        <div className="container">
          {services.map((service, index) => (
            <div key={service.id} className={`service-detailed ${index % 2 === 1 ? 'reverse' : ''}`}>
              <div className="service-content">
                <div className="service-header">
                  <div className="service-icon-large">
                    <i className={service.icon}></i>
                  </div>
                  <div className="service-title">
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                  </div>
                </div>
                <div className="service-features">
                  <div className="feature-list">
                    <h4>Технологии:</h4>
                    <ul>
                      {service.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="service-image">
                <div className="service-placeholder">
                  <i className={service.icon}></i>
                  <p>{service.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <style jsx>{`
          .services-section {
            padding: 100px 0;
            background: var(--bg-primary);
          }

          .service-detailed {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 80px;
            align-items: center;
            margin-bottom: 120px;
          }

          .service-detailed.reverse {
            direction: rtl;
          }

          .service-detailed.reverse .service-content {
            direction: ltr;
          }

          .service-header {
            display: flex;
            align-items: center;
            gap: 24px;
            margin-bottom: 24px;
          }

          .service-icon-large {
            width: 80px;
            height: 80px;
            background: var(--primary-light);
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 32px;
            color: var(--primary-color);
            flex-shrink: 0;
          }

          .service-title h2 {
            font-size: 36px;
            font-weight: 700;
            color: var(--text-primary);
            margin-bottom: 8px;
          }

          .service-title p {
            font-size: 18px;
            color: var(--text-secondary);
          }

          .service-features {
            display: grid;
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .feature-list h4 {
            font-size: 18px;
            font-weight: 600;
            color: var(--text-primary);
            margin-bottom: 16px;
          }

          .feature-list ul {
            list-style: none;
            padding: 0;
          }

          .feature-list li {
            padding: 8px 0;
            color: var(--text-secondary);
            position: relative;
            padding-left: 20px;
          }

          .feature-list li::before {
            content: "✓";
            color: var(--primary-color);
            font-weight: bold;
            position: absolute;
            left: 0;
          }

          .service-image {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .service-placeholder {
            width: 100%;
            max-width: 400px;
            height: 300px;
            background: var(--bg-secondary);
            border-radius: 16px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: var(--text-light);
            border: 2px dashed var(--border-color);
          }

          .service-placeholder i {
            font-size: 48px;
            margin-bottom: 16px;
          }

          @media (max-width: 768px) {
            .service-detailed {
              grid-template-columns: 1fr;
              gap: 40px;
              margin-bottom: 80px;
            }

            .service-detailed.reverse {
              direction: ltr;
            }

            .service-header {
              flex-direction: column;
              text-align: center;
            }

            .service-title h2 {
              font-size: 28px;
            }
          }
        `}</style>
      </section>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}