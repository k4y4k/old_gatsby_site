import React from 'react'
import '../global.css'
import Particles from 'react-particles-js'
import { Helmet } from 'react-helmet'

export default () => (
  <>
    <Helmet>
      <html lang="en" amp />
      <meta charSet="utf-8" />
      <title>{'Coming Soon | <kayak />'}</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <Particles className="particles" />
    <div id="container">
      <div id="content">
        <p>Coming soon: your new favourite web developer and designer</p>
        <h1>
          <span className="fade">{'<'}</span>kayak
          <span className="fade">{'/>'}</span>
        </h1>
      </div>
    </div>
  </>
)
