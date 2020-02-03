import React from 'react'
import styled from 'styled-components'
import kayakLogo from '../../img/kayak.svg'

const HeroTitle = ({ className, children }) => {
  return (
    <h1 className={`${className} mb-8 mx-auto`}>
      <img src={kayakLogo} alt="kayak logotype" className="mx-auto" />
    </h1>
  )
}

const StyledHeroTitle = styled(HeroTitle)`
  max-width: 1200px;
  width: 66vw;
  height: auto;
`

export default StyledHeroTitle
