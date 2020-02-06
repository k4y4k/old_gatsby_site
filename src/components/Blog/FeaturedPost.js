import React from 'react'
import styled from 'styled-components'
import BlogTitle from './Type/BlogTitle'
import Button from '../general/Button'

const placeholderImg = 'https://picsum.photos/225/400'

const FeaturedPostImage = styled.span`
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
        <BlogTitle>
          Really, really long blog post title 2: revenge of the sith 4:
          awakening in 3d
        </BlogTitle>

        <p className="mb-4">
          this is an excerpt. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Incidunt, veniam inventore voluptatum impedit facilis, sapiente
          asperiores laborum quos eius ea delectus quo numquam quia totam quasi,
          eos dolor. Velit, labore!
        </p>
        <Button>read more >></Button>
      </FeaturedPostWords>
    </div>
  )
}

const StyledFeaturedPost = styled(FeaturedPost)`
  max-width: 1200px;
`

export default StyledFeaturedPost
