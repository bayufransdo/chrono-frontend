import React from "react";
import { NavLink as Link } from "react-router-dom";

interface NavLinkProps {
  path: string;
  name: string;
  icon: React.ReactNode;
}

const NavLink = ({ path, name, icon }: NavLinkProps): React.ReactElement => {
  const styleName: string =
    "mb-1 flex items-center gap-3 rounded-xl p-3 no-underline transition-all duration-200";
  return (
    <li>
      <Link
        className={({ isActive }) =>
          isActive
            ? "bg-main text-white " + styleName
            : "text-dark " + styleName
        }
        to={path}
        end
      >
        {icon}
        {name}
      </Link>
    </li>
  );
};

export default NavLink;
