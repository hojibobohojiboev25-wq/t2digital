import { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  const { t } = useTranslation('common');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Header isScrolled={isScrolled} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}