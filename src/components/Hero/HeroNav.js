import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const ulClassNames = [
  'list-none',
  'flex',
  'flex-wrap',
  'justify-center',
  'uppercase',
  'no-underline',
];

const UnstyledHeroNav = () => (
  <nav className="m-8">
    <ul className={ulClassNames.join(' ')}>
      <li>
        <Link className="p-2 px-4 m-2" to="#work">
          Work
        </Link>
      </li>
      <li>
        <Link
          className="p-2 px-4 m-2 bg-purple-600 text-white rounded-lg"
          to="#hire"
        >
          Hire
        </Link>
      </li>
    </ul>
  </nav>
);

const HeroNav = styled(UnstyledHeroNav)``;

export default HeroNav;
