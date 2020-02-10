import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/tailwind.css';
import '../styles/fonts.scss';
import Hero from '../components/Hero/Hero';

export default () => (
  <>
    <Helmet>
      <html lang="en" amp />
      <meta charSet="utf-8" />
      <title>{'<kayak />'}</title>
      <link rel="canonical" href="https://kayak.rocks" />
    </Helmet>
    <header>
      <Hero />
    </header>
    <main>
      <h1 className="uppercase font-mono font-4xl text-center">
        main content here
      </h1>
    </main>
  </>
);
