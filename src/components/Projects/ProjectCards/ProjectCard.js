import React from 'react'
import styled from 'styled-components'
import Button from '../../general/Button'

const placeholderImg = 'https://i.picsum.photos/id/216/400/225.jpg'

const Seperator = styled.hr`
  height: 3px;
  background: purple;
  width: 40%;
`

const ProjectCard = ({ className, children }) => {
  return (
    <div className={`${className} project-card m-2 p-2 text-center`}>
      <img src={placeholderImg} alt="" className="mb-4 rounded-lg mx-auto" />
      <Seperator className="mx-auto" />
      <h2 className="text-lg font-bold font-mono lowercase my-2">
        project title
      </h2>
      <p className="mb-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
        consectetur. Doloribus voluptate itaque debitis eveniet facilis, qui,
        consequatur sed corrupti corporis laudantium in voluptatibus quos
        asperiores? Odio totam possimus repellat.
      </p>
      <Button>button; it goes somewhere else</Button>
      <Button>and another one</Button>
    </div>
  )
}

const StyledProjectCard = styled(ProjectCard)`
  @media (max-width: 425px) {
    max-width: 100vw;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    max-width: 75vw;
  }

  /* @media 
   */
  max-width: calc(960px / 2);
`

export default StyledProjectCard
