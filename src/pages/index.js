import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/tailwind.css';
import '../styles/fonts.scss';

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
      <h1 className="font-mono text-4xl">forgo(tten).</h1>
    </main>
  </>
);
