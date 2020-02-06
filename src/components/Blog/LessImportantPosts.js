import React from 'react';
import styled from 'styled-components';
import BlogTitle from './Type/BlogTitle';
import Button from '../general/Button';

const LessImportantPosts = ({ className }) => (
  <div className={`${className} p-4 m-4`}>
    <BlogTitle>
      less important post; still an excellent example of fine English literature, though
    </BlogTitle>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem explicabo quam quod commodi non
      quaerat...
    </p>
    <Button>Read it</Button>
  </div>
);

const StyledLessImportantPosts = styled(LessImportantPosts)`
  border-left: 3px solid purple;
  max-width: 960px;
  width: 25vw;

  @media (max-width: 768px) {
    width: 100vw;
  }
`;

export default StyledLessImportantPosts;
