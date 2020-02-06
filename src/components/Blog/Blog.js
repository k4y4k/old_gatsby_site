import React from 'react';
import styled from 'styled-components';
import FeaturedPost from './FeaturedPost';
import Blogroll from './Blogroll';

const Blog = () => (
  <div id="blog">
    <FeaturedPost />

    <Blogroll />
  </div>
);

const StyledBlog = styled(Blog)``;

export default StyledBlog;
