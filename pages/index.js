import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import About from '../components/sections/About';
import Portfolio from '../components/sections/Portfolio';
import Contact from '../components/sections/Contact';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <Layout>
      <Head>
        <title>T.Digital - IT Решения для Вашего Бизнеса</title>
        <meta name="description" content="T.Digital - профессиональные IT решения, разработка ПО, веб-разработка, цифровая трансформация" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Contact />
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}