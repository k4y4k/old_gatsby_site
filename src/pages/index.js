import React from "react"
import "../global.css"
import Particles from "react-particles-js"

export default () => (
  <>
    <Particles className="particles" />
    <div id="container">
      <div id="content">
        <p>Coming soon: your new favourite web developer and designer</p>
        <h1>
          <span className="fade">{"<"}</span>kayak
          <span className="fade">{"/>"}</span>
        </h1>
        {/* <Particles /> */}
      </div>
    </div>
  </>
)
