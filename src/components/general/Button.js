import React from 'react';
import styled from 'styled-components';

const Button = ({ children }) => (
  <a
    href="https://example.com"
    className="uppercase font-mono text-purple-600 p-2 m-1 border-purple-600 border-solid border inline-block self-start"
  >
    {children}
  </a>
);

const StyledButton = styled(Button)``;

export default StyledButton;
