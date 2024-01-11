import React from "react";

interface HamburgerMenuProps {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const HamburgerMenu = ({ showMenu, setShowMenu }: HamburgerMenuProps) => {
  return (
    <div
      className="sidebar__hamburger absolute left-[calc(100%+1px)] top-[110px] z-[100] cursor-pointer rounded-br-[15px] rounded-tr-[15px] bg-[#e6eefb] p-[10px_8px] md:hidden"
      onClick={() => setShowMenu(!showMenu)}
    >
      <div className="my-[5px] h-[2px] w-5 bg-main"></div>
      <div className="my-[5px] h-[2px] w-5 bg-main"></div>
      <div className="my-[5px] h-[2px] w-5 bg-main"></div>
    </div>
  );
};
export default HamburgerMenu;
