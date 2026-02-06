'use client';

import { useState } from 'react';

export default function Contact() {
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
        setMessage('Спасибо! Ваше сообщение отправлено.');
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
        setMessage(result.error || 'Ошибка при отправке сообщения');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Ошибка при отправке сообщения');
    } finally {
      setIsSubmitting(false);
    }
  };

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

        .contact-section {
          padding: 100px 0;
          background: #ffffff;
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
          color: #1e293b;
          margin-bottom: 16px;
        }

        .contact-info > p {
          font-size: 18px;
          color: #64748b;
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
          background: #dbeafe;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #2563eb;
          font-size: 20px;
          flex-shrink: 0;
        }

        .method-content h3 {
          font-size: 18px;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 8px;
        }

        .method-content p {
          color: #64748b;
          line-height: 1.5;
          margin: 0;
        }

        .social-contact {
          margin-top: 40px;
        }

        .social-contact h3 {
          font-size: 20px;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 16px;
        }

        .social-links {
          display: flex;
          gap: 12px;
        }

        .social-link-large {
          width: 48px;
          height: 48px;
          background: #f8fafc;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64748b;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 20px;
        }

        .social-link-large:hover {
          background: #2563eb;
          color: white;
          transform: translateY(-2px);
        }

        .contact-form-container {
          background: #ffffff;
          border-radius: 16px;
          padding: 40px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          border: 1px solid #e2e8f0;
        }

        .form-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .form-header h2 {
          font-size: 28px;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 8px;
        }

        .form-header p {
          color: #64748b;
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

        .form-group {
          margin-bottom: 20px;
        }

        .form-label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
          color: #374151;
        }

        .form-input,
        .form-textarea,
        .form-select {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          font-size: 16px;
          font-family: inherit;
          transition: border-color 0.3s ease;
          background: #ffffff;
          color: #1e293b;
        }

        .form-input:focus,
        .form-textarea:focus,
        .form-select:focus {
          outline: none;
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          padding: 16px 32px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 16px;
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
          border: none;
          background: #2563eb;
          color: white;
        }

        .btn:hover {
          background: #1d4ed8;
          transform: translateY(-2px);
        }

        .btn:disabled {
          background: #9ca3af;
          cursor: not-allowed;
          transform: none;
        }

        .btn-full {
          width: 100%;
        }

        .form-message {
          padding: 12px 16px;
          border-radius: 8px;
          font-weight: 500;
          text-align: center;
          margin-top: 16px;
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

          .page-hero h1 {
            font-size: 36px;
          }
        }
      `}</style>

      <section className="page-hero">
        <div className="container">
          <h1>Свяжитесь с нами</h1>
          <p>Обсудим ваш проект и найдем оптимальное решение</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Давайте поговорим о вашем проекте</h2>
              <p>Готовы обсудить идеи и найти лучшие решения для вашего бизнеса.</p>

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

            <div className="contact-form-container">
              <div className="form-header">
                <h2>Отправить сообщение</h2>
                <p>Заполните форму, и мы свяжемся с вами в течение 24 часов</p>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Имя *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-input"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-input"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Телефон</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="form-input"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="company">Компания</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="form-input"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="service">Интересующая услуга</label>
                  <select
                    id="service"
                    name="service"
                    className="form-select"
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
                  <label className="form-label" htmlFor="budget">Бюджет проекта</label>
                  <select
                    id="budget"
                    name="budget"
                    className="form-select"
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
                  <label className="form-label" htmlFor="message">Сообщение *</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                    placeholder="Опишите ваш проект или задачу..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
                </button>

                {message && (
                  <div className={`form-message ${message.includes('спасибо') ? 'success' : 'error'}`}>
                    {message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}