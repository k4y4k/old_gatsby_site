import React from 'react'
import styled from 'styled-components'
import FeaturedPost from './FeaturedPost'
import Blogroll from './Blogroll'

const Blog = ({ className, children }) => {
  return (
    <div id="blog" className="">
      <FeaturedPost></FeaturedPost>

    <Blogroll></Blogroll>
    </div>
  )
}

const StyledBlog = styled(Blog)``

export default StyledBlog
