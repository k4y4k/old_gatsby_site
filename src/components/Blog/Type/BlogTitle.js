import React from 'react';
import styled from 'styled-components';

const BlogTitle = ({ children }) => (
  <h2 className="text-lg font-bold font-mono uppercase my-2">{children}</h2>
);

const StyledBlogTitle = styled(BlogTitle)``;

export default StyledBlogTitle;
