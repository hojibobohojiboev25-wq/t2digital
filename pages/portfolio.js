import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function Portfolio() {
  const { t } = useTranslation('common');

  const projects = [
    {
      id: 1,
      title: 'E-commerce платформа',
      category: 'web',
      description: 'Полнофункциональный интернет-магазин с интеграцией платежных систем',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      metrics: {
        users: '10.000+',
        revenue: '+150%',
        conversion: '3.2%'
      }
    },
    {
      id: 2,
      title: 'Приложение доставки еды',
      category: 'mobile',
      description: 'Кроссплатформенное приложение с геолокацией и онлайн-оплатой',
      technologies: ['React Native', 'Firebase', 'Google Maps', 'Stripe'],
      metrics: {
        downloads: '50.000+',
        rating: '4.8',
        retention: '75%'
      }
    },
    {
      id: 3,
      title: 'Корпоративный портал',
      category: 'web',
      description: 'Внутренняя система управления документами для крупной компании',
      technologies: ['Vue.js', 'Laravel', 'PostgreSQL', 'Docker'],
      metrics: {
        efficiency: '+40%',
        accuracy: '95%',
        time: '6 месяцев'
      }
    },
    {
      id: 4,
      title: 'Миграция в облако',
      category: 'cloud',
      description: 'Полная миграция legacy-систем в AWS с автоматизацией',
      technologies: ['AWS', 'Terraform', 'Docker', 'Kubernetes'],
      metrics: {
        performance: '+60%',
        costs: '-30%',
        uptime: '99.9%'
      }
    },
    {
      id: 5,
      title: 'Система безопасности',
      category: 'security',
      description: 'Комплексная защита корпоративной сети и данных',
      technologies: ['SIEM', 'Firewall', 'MFA', 'SSL/TLS'],
      metrics: {
        threats: '-95%',
        compliance: '100%',
        incidents: '0'
      }
    },
    {
      id: 6,
      title: 'Медицинское приложение',
      category: 'mobile',
      description: 'Приложение для мониторинга здоровья с телемедициной',
      technologies: ['Flutter', 'Firebase', 'HIPAA', 'WebRTC'],
      metrics: {
        patients: '5.000+',
        satisfaction: '98%',
        compliance: 'HIPAA'
      }
    }
  ];

  return (
    <Layout>
      <Head>
        <title>{t('nav.portfolio')} - T.Digital</title>
        <meta name="description" content="Портфолио проектов компании T.Digital - успешные кейсы веб-разработки, мобильных приложений и IT-решений" />
      </Head>

      <section className="page-hero">
        <div className="container">
          <h1>{t('nav.portfolio')}</h1>
          <p>Наши успешные проекты и кейсы</p>
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

      <section className="portfolio-section">
        <div className="container">
          <div className="portfolio-grid">
            {projects.map((project) => (
              <div key={project.id} className="portfolio-item">
                <div className="portfolio-image">
                  <div className="project-placeholder">
                    <i className={`fas fa-${project.category === 'web' ? 'code' : project.category === 'mobile' ? 'mobile-alt' : project.category === 'cloud' ? 'cloud' : project.category === 'security' ? 'shield-alt' : 'building'}`}></i>
                    <p>{project.title}</p>
                  </div>
                </div>
                <div className="portfolio-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-metrics">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="metric">
                        <div className="metric-value">{value}</div>
                        <div className="metric-label">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
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

          .portfolio-image {
            height: 250px;
            background: var(--bg-secondary);
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .project-placeholder {
            width: 100%;
            height: 100%;
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

          .project-tech {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-bottom: 16px;
          }

          .tech-tag {
            background: var(--primary-light);
            color: var(--primary-color);
            padding: 4px 12px;
            border-radius: 12px;
            font-size: 12px;
            font-weight: 500;
          }

          .project-metrics {
            display: flex;
            gap: 16px;
            flex-wrap: wrap;
          }

          .metric {
            text-align: center;
            min-width: 60px;
          }

          .metric-value {
            font-size: 16px;
            font-weight: 700;
            color: var(--primary-color);
            margin-bottom: 4px;
          }

          .metric-label {
            font-size: 12px;
            color: var(--text-secondary);
          }

          @media (max-width: 768px) {
            .portfolio-grid {
              grid-template-columns: 1fr;
            }

            .project-metrics {
              justify-content: center;
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