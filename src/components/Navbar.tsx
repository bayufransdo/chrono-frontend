import { useState } from "react";
import { Link } from "react-router-dom";

interface HamburgerLineProps {
  showMenu: boolean;
  origin: string;
  action: string;
}

interface NavItemProps {
  href: string;
  name: string;
}

const HamburgerLine = ({ showMenu, origin, action }: HamburgerLineProps) => {
  return (
    <span
      className={`hamburger-item top my-2 block h-0.5 w-[30px] ${origin} bg-black duration-300 ${
        showMenu ? action : ""
      }`}
    ></span>
  );
};

const NavItem = ({ href, name }: NavItemProps) => {
  return (
    <li className="mx-5 my-4 block md:mx-5 md:my-0 md:inline-block">
      <a href={href} className="hover:text-main">
        {name}
      </a>
    </li>
  );
};
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="sticky inset-0 z-[9999] bg-white shadow-[0_0_15px_15px_white]">
      <div className="mx-auto flex items-center justify-between px-5">
        <div className="py-[10px]">
          <Link to="/signin">
            <img
              className="w-[50px] md:w-auto"
              src="/images/icon/chrono.png"
              alt="Chrono"
              title="Home"
            />
          </Link>
        </div>
        <nav>
          <div
            className="cursor-pointer md:hidden"
            onClick={() => setShowMenu(!showMenu)}
          >
            <HamburgerLine
              showMenu={showMenu}
              origin="origin-top-left"
              action="rotate-45"
            />
            <HamburgerLine
              showMenu={showMenu}
              origin="origin-center"
              action="scale-0"
            />
            <HamburgerLine
              showMenu={showMenu}
              origin="origin-bottom-left"
              action="-rotate-45"
            />
          </div>
          <ul
            className={`absolute right-0 top-20 origin-top-right scale-0 rounded-xl border-2 border-solid border-base bg-white shadow-md duration-300 md:scale-100 ${
              showMenu ? "scale-100" : ""
            } border-none md:static md:shadow-none `}
          >
            <NavItem href="#home" name="Home" />
            <NavItem href="#features" name="Features" />
            <NavItem href="#team" name="Team" />
            <NavItem href="#contact" name="Contact" />
            <li className="mx-5 my-4 block md:mx-5 md:my-0 md:inline-block">
              <Link
                to="/signin"
                className="login rounded-[20px] bg-main px-[35px] py-[6px] font-bold text-white duration-300 hover:opacity-70"
              >
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
