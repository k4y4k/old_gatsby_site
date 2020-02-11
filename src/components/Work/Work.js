import React from 'react';
import styled from 'styled-components';
import WorkTitle from './WorkTitle';
import WorkContainer from './WorkContainer';

const UnstyledWork = () => (
  <div id="work" className="p-4">
    <WorkTitle />
    <WorkContainer />
  </div>
);

const Work = styled(UnstyledWork)``;

export default Work;
