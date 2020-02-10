import React from 'react';
import styled from 'styled-components';
import kayakLogo from '../../img/kayak.svg';

const UnstyledHeroTitle = ({ className }) => (
  <img className={`${className} mx-auto`} src={kayakLogo} alt="" />
);

const HeroTitle = styled(UnstyledHeroTitle)`
  max-width: 1200px;
  width: 66vw;
`;

export default HeroTitle;
