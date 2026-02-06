import { useTranslation } from 'next-i18next';

export default function Portfolio() {
  const { t } = useTranslation('common');

  const projects = [
    {
      id: 1,
      title: 'E-commerce платформа',
      category: 'web',
      description: 'Полнофункциональный интернет-магазин',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 2,
      title: 'Мобильное приложение доставки',
      category: 'mobile',
      description: 'Кроссплатформенное приложение',
      technologies: ['React Native', 'Firebase']
    },
    {
      id: 3,
      title: 'Корпоративный портал',
      category: 'web',
      description: 'Система управления документами',
      technologies: ['Vue.js', 'Laravel', 'PostgreSQL']
    }
  ];

  return (
    <section className="portfolio-section">
      <div className="container">
        <div className="section-header">
          <h2>{t('nav.portfolio')}</h2>
          <p>Наши успешные проекты</p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project) => (
            <div key={project.id} className="portfolio-item">
              <div className="portfolio-image">
                <div className="project-placeholder">
                  <i className={`fas fa-${project.category === 'web' ? 'code' : project.category === 'mobile' ? 'mobile-alt' : 'building'}`}></i>
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
        }

        .tech-tag {
          background: var(--primary-light);
          color: var(--primary-color);
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .portfolio-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}