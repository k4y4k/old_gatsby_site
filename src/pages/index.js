import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/tailwind.css';
import '../styles/fonts.scss';
import Hero from '../components/Hero/Hero';
import SkipLink from '../components/SkipLink/SkipLink';
import Work from '../components/Work/Work';

export default () => (
  <>
    <Helmet>
      <html lang="en" amp />
      <meta charSet="utf-8" />
      <title>{'<kayak />'}</title>
      <link rel="canonical" href="https://kayak.rocks" />
    </Helmet>
    <header>
      <SkipLink />
      <Hero />
    </header>
    <main id="main">
      <Work />
      <div id="hire" />
    </main>
  </>
);
