'use client';

export default function About() {
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
          color: #1e293b;
          margin-bottom: 24px;
        }

        .story-text p {
          font-size: 18px;
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 40px;
        }

        .story-placeholder {
          width: 100%;
          max-width: 400px;
          height: 300px;
          background: #f8fafc;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #94a3b8;
          border: 2px dashed #e2e8f0;
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

          .page-hero h1 {
            font-size: 36px;
          }
        }
      `}</style>

      <section className="page-hero">
        <div className="container">
          <h1>Über uns</h1>
          <p>Professionelles Entwicklerteam mit langjähriger Erfahrung</p>
        </div>
      </section>

      <section className="story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Unsere Geschichte</h2>
              <p>
                T.Digital wurde 2019 von einer Gruppe von IT-Technologie-Enthusiasten gegründet... Wir glauben, dass die richtige Anwendung von IT Geschäftsprozesse grundlegend verändern und neue Möglichkeiten für Wachstum und Entwicklung eröffnen kann.
              </p>
            </div>
            <div className="story-image">
              <div className="story-placeholder">
                <i className="fas fa-building"></i>
                <p>Офис T.Digital</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}