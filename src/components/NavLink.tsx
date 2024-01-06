import React from 'react';
import { NavLink as Link } from 'react-router-dom';

interface NavLinkProps {
  path: string;
  name: string;
  icon: React.ReactNode;
}

const NavLink = ({ path, name, icon }: NavLinkProps): React.ReactElement => {
  return (
    <li>
      <Link to={path} end>
        {icon}
        {name}
      </Link>
    </li>
  );
};

export default NavLink;
