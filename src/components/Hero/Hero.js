import React from 'react';
import styled from 'styled-components';
import HeroTitle from './HeroTitle';
import HeroNav from './HeroNav';
import SkipHero from './SkipHero';

const Hero = ({ className }) => (
  <div className={`${className} p-8 flex flex-col justify-center`}>
    <SkipHero />
    <HeroTitle />
    <HeroNav />
  </div>
);

const StyledHero = styled(Hero)`
  height: 100vh;
`;

export default StyledHero;
