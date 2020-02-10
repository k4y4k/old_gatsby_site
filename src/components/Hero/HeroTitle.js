import React from 'react';
import styled from 'styled-components';
import kayakLogo from '../../img/kayak.svg';

const UnstyledHeroTitle = ({ className }) => (
  <img className={`${className} mx-auto`} src={kayakLogo} alt="" />
);

const HeroTitle = styled(UnstyledHeroTitle)`
  max-width: 1200px;
  width: 66vw;
  transition: 0.5s ease-in-out all;
  &:hover {
    filter: invert(0.5) sepia(1) hue-rotate(200deg) saturate(4) brightness(1);
  }
`;

export default HeroTitle;
