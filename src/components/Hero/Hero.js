import React from 'react';
import styled from 'styled-components';
import HeroTitle from './HeroTitle';
import HeroNav from './HeroNav';

const UnstyledHero = ({ className }) => (
  <div id="hero" className={`${className} p-20 flex justify-center flex-col`}>
    <HeroTitle />
    <HeroNav />
  </div>
);

const Hero = styled(UnstyledHero)`
  min-height: 100vh;
`;

export default Hero;
