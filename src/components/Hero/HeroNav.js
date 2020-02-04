import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const HeroNav = ({ className, children }) => {
  return (
    <nav id="hero-nav" className={`className`}>
      <ul className="m-0 p-0 flex flex-row flex-wrap justify-center md:flex-no-wrap">
        <li className="m-0 p-0 px-4 mb-4">
          <Link className="uppercase hover:underline" to="/#projects">
            projects
          </Link>
        </li>
        <li className="m-0 p-0 px-4 mb-4">
          <Link className="uppercase hover:underline" to="/#blog">
            blog
          </Link>
        </li>{' '}
        <li className="m-0 p-0 px-4 mb-4 ">
          <Link className="uppercase hover:underline" to="/#about">
            about
          </Link>
        </li>
        <li className="m-0 p-0 px-4 mb-4">
          <Link
            className="uppercase bg-purple-600 px-4 py-2 rounded-full text-white hover:underline"
            to="/#hire"
          >
            hire
          </Link>
        </li>
      </ul>
    </nav>
  )
}

const StyledHeroNav = styled(HeroNav)`
  ul {
    li {
      list-style: none;
    }
  }
`

export default StyledHeroNav
