import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata = {
  title: 'T.Digital - Professionelle IT-Lösungen für Ihr Unternehmen',
  description: 'T.Digital - professionelle IT-Lösungen, Softwareentwicklung, Webanwendungen und digitale Strategien',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </head>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}