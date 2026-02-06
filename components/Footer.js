export default function Footer() {
  return (
    <footer style={{
      background: '#1e293b',
      color: 'white',
      padding: '60px 0 20px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '40px',
        marginBottom: '40px'
      }}>
        <div>
          <h3 style={{
            fontSize: '24px',
            fontWeight: '700',
            marginBottom: '20px',
            color: 'white'
          }}>
            <span style={{ color: '#2563eb' }}>T.</span>Digital
          </h3>
          <p style={{
            color: 'rgba(255, 255, 255, 0.8)',
            lineHeight: '1.6'
          }}>
            Профессиональные IT-решения для вашего бизнеса
          </p>
          <div style={{
            display: 'flex',
            gap: '16px',
            marginTop: '20px'
          }}>
            <a href="#" style={{
              width: '40px',
              height: '40px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}>
              <i className="fab fa-telegram"></i>
            </a>
            <a href="#" style={{
              width: '40px',
              height: '40px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}>
              <i className="fab fa-vk"></i>
            </a>
            <a href="#" style={{
              width: '40px',
              height: '40px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}>
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        <div>
          <h4 style={{
            fontSize: '18px',
            fontWeight: '600',
            marginBottom: '20px',
            color: 'white'
          }}>
            Услуги
          </h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '12px' }}>
              <a href="/services" style={{
                color: 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}>
                Веб-разработка
              </a>
            </li>
            <li style={{ marginBottom: '12px' }}>
              <a href="/services" style={{
                color: 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}>
                Мобильная разработка
              </a>
            </li>
            <li style={{ marginBottom: '12px' }}>
              <a href="/services" style={{
                color: 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}>
                Облачные решения
              </a>
            </li>
            <li style={{ marginBottom: '12px' }}>
              <a href="/services" style={{
                color: 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}>
                Кибербезопасность
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 style={{
            fontSize: '18px',
            fontWeight: '600',
            marginBottom: '20px',
            color: 'white'
          }}>
            Компания
          </h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '12px' }}>
              <a href="/about" style={{
                color: 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}>
                О нас
              </a>
            </li>
            <li style={{ marginBottom: '12px' }}>
              <a href="/portfolio" style={{
                color: 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}>
                Портфолио
              </a>
            </li>
            <li style={{ marginBottom: '12px' }}>
              <a href="/contact" style={{
                color: 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}>
                Контакты
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 style={{
            fontSize: '18px',
            fontWeight: '600',
            marginBottom: '20px',
            color: 'white'
          }}>
            Контакты
          </h4>
          <p style={{
            color: 'rgba(255, 255, 255, 0.8)',
            lineHeight: '1.6',
            marginBottom: '16px'
          }}>
            <i className="fas fa-envelope" style={{ marginRight: '8px' }}></i>
            info@t.digital
          </p>
          <p style={{
            color: 'rgba(255, 255, 255, 0.8)',
            lineHeight: '1.6',
            marginBottom: '16px'
          }}>
            <i className="fas fa-phone" style={{ marginRight: '8px' }}></i>
            +7 (495) 123-45-67
          </p>
          <p style={{
            color: 'rgba(255, 255, 255, 0.8)',
            lineHeight: '1.6'
          }}>
            <i className="fas fa-map-marker-alt" style={{ marginRight: '8px' }}></i>
            Москва, Россия
          </p>
        </div>
      </div>
      <div style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        paddingTop: '20px',
        textAlign: 'center',
        color: 'rgba(255, 255, 255, 0.6)'
      }}>
        <p>&copy; 2024 T.Digital. Все права защищены.</p>
      </div>
    </footer>
  );
}