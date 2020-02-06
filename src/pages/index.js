import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/tailwind.css';
import '../styles/fonts.scss';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Blog from '../components/Blog/Blog';

export default () => (
  <>
    <header>
      <Helmet>
        <html lang="en" amp />
        <meta charSet="utf-8" />
        <title>{'Coming Soon | <kayak />'}</title>
        <link rel="canonical" href="https://kayak.rocks" />
      </Helmet>
      <Hero />
    </header>
    <main>
      <Projects />

      <Blog />
    </main>
  </>
);
