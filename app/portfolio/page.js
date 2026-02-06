'use client';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Plattform',
      category: 'web',
      description: 'Vollständige E-Commerce-Plattform',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 2,
      title: 'Essenslieferservice-App',
      category: 'mobile',
      description: 'Cross-Plattform-App',
      technologies: ['React Native', 'Firebase']
    },
    {
      id: 3,
      title: 'Unternehmensportal',
      category: 'web',
      description: 'Dokumentenverwaltungssystem',
      technologies: ['Vue.js', 'Laravel', 'PostgreSQL']
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

        .portfolio-section {
          padding: 100px 0;
          background: #ffffff;
        }

        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 40px;
        }

        .portfolio-item {
          background: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }

        .portfolio-item:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        .portfolio-image {
          height: 250px;
          background: #f8fafc;
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
          color: #94a3b8;
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
          color: #1e293b;
          margin-bottom: 12px;
        }

        .portfolio-info p {
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tech-tag {
          background: #dbeafe;
          color: #2563eb;
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .portfolio-grid {
            grid-template-columns: 1fr;
          }

          .page-hero h1 {
            font-size: 36px;
          }
        }
      `}</style>

      <section className="page-hero">
        <div className="container">
          <h1>Unser Portfolio</h1>
          <p>Unsere erfolgreichen Projekte und Fallstudien</p>
        </div>
      </section>

      <section className="portfolio-section">
        <div className="container">
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
      </section>
    </div>
  );
}