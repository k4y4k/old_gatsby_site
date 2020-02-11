import React from 'react';
import styled from 'styled-components';
import workTitle from '../../img/work.svg';

const imageClassNames = ['mx-auto', '-mb-6'];

const UnstyledWorkTitle = ({ className }) => (
  <img
    src={workTitle}
    alt=""
    className={`${className} ${imageClassNames.join(' ')}`}
  />
);

const WorkTitle = styled(UnstyledWorkTitle)`
  /* main title is 1200px */
  max-width: 960px;
  /* main title is 66vw */
  width: 50vw;

  z-index: -1;
  position: relative;
  max-height: 150px;
`;

export default WorkTitle;
