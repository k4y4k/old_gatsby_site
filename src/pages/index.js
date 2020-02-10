import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/tailwind.css';
import '../styles/fonts.scss';
import Hero from '../components/Hero/Hero';

export default () => (
  <>
    <header>
      <Helmet>
        <html lang="en" amp />
        <meta charSet="utf-8" />
        <title>{'<kayak />'}</title>
        <link rel="canonical" href="https://kayak.rocks" />
      </Helmet>
    </header>
    <main>
      <Hero />
    </main>
  </>
);
