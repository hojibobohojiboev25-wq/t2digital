export const metadata = {
  title: 'T.Digital - IT Решения для Вашего Бизнеса',
  description: 'T.Digital - профессиональные IT решения, разработка ПО, веб-приложений и цифровых стратегий',
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
      </head>
      <body>{children}</body>
    </html>
  );
}