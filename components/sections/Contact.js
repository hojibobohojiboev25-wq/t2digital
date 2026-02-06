import { useState } from 'react';
import { useTranslation } from 'next-i18next';

export default function Contact() {
  const { t } = useTranslation('common');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setMessage(t('contact.success'));
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          budget: '',
          message: ''
        });
      } else {
        setMessage(result.error || t('contact.error'));
      }
    } catch (error) {
      setMessage(t('contact.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2>{t('contact.title')}</h2>
            <p>{t('contact.subtitle')}</p>

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
            </div>
          </div>

          <div className="contact-form-container">
            <div className="form-header">
              <h2>{t('contact.form_title')}</h2>
              <p>{t('contact.form_subtitle')}</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">{t('contact.name')} *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">{t('contact.email')} *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">{t('contact.phone')}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company">{t('contact.company')}</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="service">{t('contact.service')}</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
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
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                >
                  <option value="">Выберите диапазон</option>
                  <option value="small">До 300 000 ₽</option>
                  <option value="medium">300 000 - 1 000 000 ₽</option>
                  <option value="large">1 000 000 - 3 000 000 ₽</option>
                  <option value="enterprise">Более 3 000 000 ₽</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">{t('contact.message')} *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                  placeholder="Опишите ваш проект или задачу..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-full" disabled={isSubmitting}>
                {isSubmitting ? 'Отправка...' : t('contact.send')}
              </button>

              {message && (
                <div className={`form-message ${message.includes('успешно') ? 'success' : 'error'}`}>
                  {message}
                </div>
              )}
            </form>
          </div>
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

        .contact-form-container {
          background: var(--bg-primary);
          border-radius: 16px;
          padding: 40px;
          box-shadow: var(--shadow);
          border: 1px solid var(--border-color);
        }

        .form-header h2 {
          font-size: 28px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .form-header p {
          color: var(--text-secondary);
          margin-bottom: 32px;
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

        .form-message {
          padding: 12px 16px;
          border-radius: 8px;
          font-weight: 500;
          text-align: center;
        }

        .form-message.success {
          background: #d1fae5;
          color: #065f46;
        }

        .form-message.error {
          background: #fee2e2;
          color: #dc2626;
        }

        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}