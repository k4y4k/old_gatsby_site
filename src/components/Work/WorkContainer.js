import React from 'react';
import styled from 'styled-components';

const classes = ['mx-auto', 'bg-purple-600'];

const UnstyledWorkContainer = ({ className }) => (
  <div className={`${className} ${classes.join(' ')}`} id="work-container">
    <h1 className="text-white p-4 text-center">WorkContainer component</h1>
  </div>
);

const WorkContainer = styled(UnstyledWorkContainer)`
  max-width: 1200px;
  width: 75vw;
`;

export default WorkContainer;
