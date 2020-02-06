import React from 'react'
import styled from 'styled-components'
const Button = ({ className, children }) => {
  return (
    <a
      className="uppercase font-mono text-purple-600 p-2 m-1 border-purple-600 border-solid border inline-block self-start"
      href=""
    >
      {children}
    </a>
  )
}

const StyledButton = styled(Button)``

export default StyledButton
