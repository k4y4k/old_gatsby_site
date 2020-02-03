import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const SkipHero = ({ className, children }) => {
  return (
    <div id="skip" className={className}>
      <Link to="/projects">Skip to Projects</Link>
    </div>
  )
}

const StyledSkipHero = styled(SkipHero)`
  a {
    display: block;
    position: absolute;
    left: -999px;
    top: -999px;
  }

  a:focus {
    left: 0;
    top: 0;
    padding: 3px;
    background-color: #fff;
  }
`

export default StyledSkipHero
