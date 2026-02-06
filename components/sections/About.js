import { useTranslation } from 'next-i18next';

export default function About() {
  const { t } = useTranslation('common');

  return (
    <section className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>{t('about.title')}</h2>
            <p>{t('about.story_text')}</p>
          </div>
          <div className="about-image">
            <div className="about-placeholder">
              <i className="fas fa-building"></i>
              <p>Наша команда</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
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
        }

        .about-placeholder {
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

        .about-placeholder i {
          font-size: 48px;
          margin-bottom: 16px;
        }

        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>
    </section>
  );
}