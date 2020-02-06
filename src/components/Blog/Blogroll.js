import React from 'react'
import styled from 'styled-components'
import LessImportantPosts from './LessImportantPosts'

const Blogroll = ({ className, children }) => {
  return (
    <div
      id="blogroll"
      className={`${className} flex flex-row flex-wrap justify-center`}
    >
      <LessImportantPosts></LessImportantPosts>
      <LessImportantPosts></LessImportantPosts>
      <LessImportantPosts></LessImportantPosts>
    </div>
  )
}

const StyledBlogroll = styled(Blogroll)`
 `

export default StyledBlogroll
