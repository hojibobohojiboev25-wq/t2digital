import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function Contact() {
  const { t } = useTranslation('common');

  return (
    <Layout>
      <Head>
        <title>{t('nav.contact')} - T.Digital</title>
        <meta name="description" content="Свяжитесь с компанией T.Digital - контакты, адрес, форма обратной связи для обсуждения IT-проектов" />
      </Head>

      <section className="page-hero">
        <div className="container">
          <h1>{t('contact.title')}</h1>
          <p>{t('contact.subtitle')}</p>
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

      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>{t('contact.form_title')}</h2>
              <p>{t('contact.form_subtitle')}</p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="method-content">
                    <h3>Телефон</h3>
                    <p>+7 (495) 123-45-67</p>
                    <p>+7 (800) 555-01-23</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="method-content">
                    <h3>Email</h3>
                    <p>info@t.digital</p>
                    <p>projects@t.digital</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="method-content">
                    <h3>Адрес</h3>
                    <p>Москва, ул. Технологическая, д. 15</p>
                    <p>БЦ "Цифровой", офис 301</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="method-content">
                    <h3>Режим работы</h3>
                    <p>Пн-Пт: 9:00 - 18:00</p>
                    <p>Сб-Вс: выходной</p>
                  </div>
                </div>
              </div>

              <div className="social-contact">
                <h3>Следите за нами</h3>
                <div className="social-links">
                  <a href="#" className="social-link-large"><i className="fab fa-telegram"></i></a>
                  <a href="#" className="social-link-large"><i className="fab fa-vk"></i></a>
                  <a href="#" className="social-link-large"><i className="fab fa-github"></i></a>
                  <a href="#" className="social-link-large"><i className="fab fa-linkedin"></i></a>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>

        <style jsx>{`
          .contact-section {
            padding: 100px 0;
            background: var(--bg-primary);
          }

          .contact-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 80px;
            align-items: start;
          }

          .contact-info h2 {
            font-size: 40px;
            font-weight: 700;
            color: var(--text-primary);
            margin-bottom: 16px;
          }

          .contact-info > p {
            font-size: 18px;
            color: var(--text-secondary);
            line-height: 1.6;
            margin-bottom: 40px;
          }

          .contact-methods {
            display: flex;
            flex-direction: column;
            gap: 24px;
            margin-bottom: 40px;
          }

          .contact-method {
            display: flex;
            align-items: flex-start;
            gap: 20px;
          }

          .method-icon {
            width: 50px;
            height: 50px;
            background: var(--primary-light);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--primary-color);
            font-size: 20px;
            flex-shrink: 0;
          }

          .method-content h3 {
            font-size: 18px;
            font-weight: 600;
            color: var(--text-primary);
            margin-bottom: 8px;
          }

          .method-content p {
            color: var(--text-secondary);
            line-height: 1.5;
            margin: 0;
          }

          .social-contact h3 {
            font-size: 20px;
            font-weight: 600;
            color: var(--text-primary);
            margin-bottom: 16px;
          }

          .social-links {
            display: flex;
            gap: 12px;
          }

          .social-link-large {
            width: 48px;
            height: 48px;
            background: var(--bg-secondary);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--text-secondary);
            text-decoration: none;
            transition: all 0.3s ease;
            font-size: 20px;
          }

          .social-link-large:hover {
            background: var(--primary-color);
            color: white;
            transform: translateY(-2px);
          }

          @media (max-width: 768px) {
            .contact-content {
              grid-template-columns: 1fr;
              gap: 40px;
            }

            .social-links {
              justify-content: center;
            }
          }
        `}</style>
      </section>
    </Layout>
  );
}

function ContactForm() {
  const { t } = useTranslation('common');

  return (
    <div className="contact-form-container">
      <form className="contact-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">{t('contact.name')} *</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">{t('contact.email')} *</label>
            <input type="email" id="email" name="email" required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone">{t('contact.phone')}</label>
            <input type="tel" id="phone" name="phone" />
          </div>
          <div className="form-group">
            <label htmlFor="company">{t('contact.company')}</label>
            <input type="text" id="company" name="company" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="service">{t('contact.service')}</label>
          <select id="service" name="service">
            <option value="">Выберите услугу</option>
            <option value="web">Веб-разработка</option>
            <option value="mobile">Мобильная разработка</option>
            <option value="cloud">Облачные решения</option>
            <option value="security">Кибербезопасность</option>
            <option value="consulting">Консультации</option>
            <option value="other">Другое</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="budget">{t('contact.budget')}</label>
          <select id="budget" name="budget">
            <option value="">Выберите диапазон</option>
            <option value="small">До 300 000 ₽</option>
            <option value="medium">300 000 - 1 000 000 ₽</option>
            <option value="large">1 000 000 - 3 000 000 ₽</option>
            <option value="enterprise">Более 3 000 000 ₽</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">{t('contact.message')} *</label>
          <textarea id="message" name="message" rows="5" required placeholder="Опишите ваш проект или задачу..."></textarea>
        </div>

        <button type="submit" className="btn btn-primary btn-full">
          {t('contact.send')}
        </button>
      </form>

      <style jsx>{`
        .contact-form-container {
          background: var(--bg-primary);
          border-radius: 16px;
          padding: 40px;
          box-shadow: var(--shadow);
          border: 1px solid var(--border-color);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .btn-full {
          width: 100%;
          padding: 16px;
          font-size: 16px;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}