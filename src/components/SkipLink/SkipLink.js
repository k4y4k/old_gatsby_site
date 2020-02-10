import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const skipLinkAClassNames = [
  'p-2',
  'bg-purple-600',
  'text-white',
  'border',
  'border-white',
  'font-mono',
  'block',
  'absolute',
];

const UnstyledSkipLink = ({ className }) => (
  <div className={className} id="skip">
    <Link to="#main" className={skipLinkAClassNames.join(' ')}>
      Skip to main content
    </Link>
  </div>
);

const SkipLink = styled(UnstyledSkipLink)`
  a {
    left: -999px;
    top: -999px;
  }

  a:focus {
    left: 0;
    top: 0;
  }
`;

export default SkipLink;
