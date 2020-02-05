import React from 'react'
import styled from 'styled-components'
import BlogTitle from './Type/BlogTitle'

const placeholderImg = 'https://picsum.photos/225/400'

const FeaturedPostImage = styled.aside`
  background-image: url(${placeholderImg});
  max-width: 20vw;
  height: auto;
  flex-grow: 1;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

const FeaturedPostWords = styled.div`
  max-width: 33vw;
`

const FeaturedPost = ({ className, children }) => {
  return (
    <div
      id="featured-blog-post"
      className={`${className} flex justify-center mx-auto`}
    >
      <FeaturedPostImage className="rounded-lg m-2" />

      <FeaturedPostWords className="flex flex-col justify-flex-start text-left m-2 p-2">
        <BlogTitle></BlogTitle>

        <p className="mb-4">
          this is an excerpt. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Incidunt, veniam inventore voluptatum impedit facilis, sapiente
          asperiores laborum quos eius ea delectus quo numquam quia totam quasi,
          eos dolor. Velit, labore!
        </p>
        <a
          className="uppercase font-mono text-purple-600 p-2 m-1 border-purple-600 border-solid border block flex-shrink"
          href=""
        >
          read more >>
        </a>
      </FeaturedPostWords>
    </div>
  )
}

const StyledFeaturedPost = styled(FeaturedPost)`
  max-width: 1200px;
`

export default StyledFeaturedPost
