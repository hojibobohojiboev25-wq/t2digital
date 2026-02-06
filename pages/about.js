import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function About() {
  const { t } = useTranslation('common');

  return (
    <Layout>
      <Head>
        <title>{t('about.title')} - T.Digital</title>
        <meta name="description" content="Узнайте больше о компании T.Digital - нашей истории, команде и ценностях" />
      </Head>

      <section className="page-hero">
        <div className="container">
          <h1>{t('about.title')}</h1>
          <p>Профессиональная команда разработчиков с многолетним опытом</p>
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

      <section className="story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>{t('about.story')}</h2>
              <p>{t('about.story_text')}</p>
              <div className="story-stats">
                <div className="stat">
                  <div className="stat-number">5+</div>
                  <div className="stat-label">Лет опыта</div>
                </div>
                <div className="stat">
                  <div className="stat-number">150+</div>
                  <div className="stat-label">Проектов</div>
                </div>
                <div className="stat">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Клиентов</div>
                </div>
              </div>
            </div>
            <div className="story-image">
              <div className="story-placeholder">
                <i className="fas fa-building"></i>
                <p>Офис T.Digital</p>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .story-section {
            padding: 100px 0;
            background: var(--bg-primary);
          }

          .story-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 80px;
            align-items: center;
          }

          .story-text h2 {
            font-size: 40px;
            font-weight: 700;
            color: var(--text-primary);
            margin-bottom: 24px;
          }

          .story-text p {
            font-size: 18px;
            color: var(--text-secondary);
            line-height: 1.6;
            margin-bottom: 40px;
          }

          .story-stats {
            display: flex;
            gap: 40px;
          }

          .stat {
            text-align: center;
          }

          .stat-number {
            font-size: 36px;
            font-weight: 700;
            color: var(--primary-color);
            margin-bottom: 8px;
          }

          .stat-label {
            font-size: 14px;
            color: var(--text-secondary);
          }

          .story-placeholder {
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

          .story-placeholder i {
            font-size: 48px;
            margin-bottom: 16px;
          }

          @media (max-width: 768px) {
            .story-content {
              grid-template-columns: 1fr;
              gap: 40px;
            }

            .story-stats {
              flex-direction: column;
              gap: 20px;
            }
          }
        `}</style>
      </section>

      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2>{t('about.team')}</h2>
            <p>{t('about.team_subtitle')}</p>
          </div>

          <div className="team-grid">
            <div className="team-member">
              <div className="member-photo">
                <div className="photo-placeholder">
                  <i className="fas fa-user-tie"></i>
                </div>
              </div>
              <div className="member-info">
                <h3>Алексей Иванов</h3>
                <p className="member-position">Генеральный директор</p>
                <p className="member-description">
                  Более 10 лет опыта в управлении IT-проектами.
                  Специализируется на цифровой трансформации бизнеса.
                </p>
                <div className="member-social">
                  <a href="#" className="social-link"><i className="fab fa-linkedin"></i></a>
                  <a href="#" className="social-link"><i className="fab fa-telegram"></i></a>
                </div>
              </div>
            </div>

            <div className="team-member">
              <div className="member-photo">
                <div className="photo-placeholder">
                  <i className="fas fa-user"></i>
                </div>
              </div>
              <div className="member-info">
                <h3>Мария Петрова</h3>
                <p className="member-position">Ведущий разработчик</p>
                <p className="member-description">
                  Full-stack разработчик с опытом работы с React,
                  Node.js и облачными технологиями.
                </p>
                <div className="member-social">
                  <a href="#" className="social-link"><i className="fab fa-github"></i></a>
                  <a href="#" className="social-link"><i className="fab fa-telegram"></i></a>
                </div>
              </div>
            </div>

            <div className="team-member">
              <div className="member-photo">
                <div className="photo-placeholder">
                  <i className="fas fa-user-cog"></i>
                </div>
              </div>
              <div className="member-info">
                <h3>Дмитрий Сидоров</h3>
                <p className="member-position">DevOps инженер</p>
                <p className="member-description">
                  Специалист по автоматизации развертывания и
                  инфраструктуре. Опыт работы с AWS, Docker и Kubernetes.
                </p>
                <div className="member-social">
                  <a href="#" className="social-link"><i className="fab fa-github"></i></a>
                  <a href="#" className="social-link"><i className="fab fa-telegram"></i></a>
                </div>
              </div>
            </div>

            <div className="team-member">
              <div className="member-photo">
                <div className="photo-placeholder">
                  <i className="fas fa-user-shield"></i>
                </div>
              </div>
              <div className="member-info">
                <h3>Елена Козлова</h3>
                <p className="member-position">Специалист по кибербезопасности</p>
                <p className="member-description">
                  Эксперт в области информационной безопасности.
                  Сертификаты CISSP и CEH.
                </p>
                <div className="member-social">
                  <a href="#" className="social-link"><i className="fab fa-linkedin"></i></a>
                  <a href="#" className="social-link"><i className="fab fa-telegram"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .team-section {
            padding: 100px 0;
            background: var(--bg-secondary);
          }

          .team-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 40px;
          }

          .team-member {
            background: var(--bg-primary);
            border-radius: 16px;
            overflow: hidden;
            box-shadow: var(--shadow);
            border: 1px solid var(--border-color);
            transition: all 0.3s ease;
          }

          .team-member:hover {
            transform: translateY(-8px);
            box-shadow: var(--shadow-lg);
          }

          .member-photo {
            height: 200px;
            background: var(--bg-secondary);
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .photo-placeholder {
            width: 80px;
            height: 80px;
            background: var(--primary-light);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 32px;
            color: var(--primary-color);
          }

          .member-info {
            padding: 24px;
          }

          .member-info h3 {
            font-size: 20px;
            font-weight: 600;
            color: var(--text-primary);
            margin-bottom: 8px;
          }

          .member-position {
            font-size: 16px;
            color: var(--primary-color);
            font-weight: 500;
            margin-bottom: 16px;
          }

          .member-description {
            font-size: 14px;
            color: var(--text-secondary);
            line-height: 1.6;
            margin-bottom: 20px;
          }

          .member-social {
            display: flex;
            gap: 12px;
          }

          .social-link {
            width: 36px;
            height: 36px;
            background: var(--bg-secondary);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--text-secondary);
            text-decoration: none;
            transition: all 0.3s ease;
          }

          .social-link:hover {
            background: var(--primary-color);
            color: white;
          }

          @media (max-width: 768px) {
            .team-grid {
              grid-template-columns: 1fr;
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