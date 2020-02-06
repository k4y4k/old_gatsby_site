import React from 'react'
import styled from 'styled-components'
import BlogTitle from './Type/BlogTitle'
import Button from '../general/Button'

const placeholderImg = 'https://picsum.photos/700/700'

const FeaturedPostImage = styled.span`
  background-image: url(${placeholderImg});
  height: auto;
  flex-grow: 1;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  max-width: 100vw;

  @media (max-width: 767px) {
    flex-direction: column;
    height: 33vh;
  }

  @media (min-width: 768px) {
    max-width: 20vw;
  }
`

const FeaturedPostWords = styled.div`
  max-width: 100vw;

  @media (min-width: 768px) {
    max-width: 33vw;
  }
`

const FeaturedPostWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  flex-direction: row;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`

const FeaturedPost = ({ className, children }) => {
  return (
    <FeaturedPostWrapper id="featured-blog-post">
      <FeaturedPostImage className="rounded-lg m-2" />

      <FeaturedPostWords
        className={'flex flex-col justify-flex-start text-left m-2 p-2'}
      >
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
    </FeaturedPostWrapper>
  )
}

const StyledFeaturedPost = styled(FeaturedPost)`
  max-width: 1200px;
`

export default StyledFeaturedPost
