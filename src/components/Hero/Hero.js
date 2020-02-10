import React from 'react';
import styled from 'styled-components';
import HeroTitle from './HeroTitle';

const UnstyledHero = () => (
  <div id="hero" className="p-20">
    <HeroTitle />
  </div>
);

const Hero = styled(UnstyledHero)``;

export default Hero;
