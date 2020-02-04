import React from 'react'
import styled from 'styled-components'

const BlogTitle = ({ className, children }) => {
  return (
    <h2 className="text-lg font-bold font-mono uppercase my-2">
      blog post title; it's really, really long and wraps a bit 2: now with wings
    </h2>
  )
}

const StyledBlogTitle = styled(BlogTitle)``

export default StyledBlogTitle
