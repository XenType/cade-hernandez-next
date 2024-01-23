"use client";

import { useState } from "react";
import { PagePath } from "../enum";
import MenuItem from "./menu-item";
import MenuIcon from "@mui/icons-material/Menu";

const MainMenu: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="flex flex-row w-full justify-center border-b-[1px] h-[35px] md:h-[53px] border-gray-400 px-2 md:px-6 text-xl">
      <div className="md:hidden flex flex-col justify-center">
        <div
          className="flex flex-col justify-center"
          onClick={() => setShowMenu(!showMenu)}
        >
          <MenuIcon className="text-cade-blue-med" />
        </div>
        <div className="relative">
          {showMenu ? (
            <div className="absolute py-4 px-8 bg-white top-2 z-10 flex flex-col space-y-6 shadow-lg shadow-cade-blue-dark/70 p-2 text-2xl">
              <MenuItem
                itemPath={PagePath.HOME}
                onItemClick={() => setShowMenu(false)}
              />
              <MenuItem
                itemPath={PagePath.PROJECTS}
                onItemClick={() => setShowMenu(false)}
              />
              <MenuItem
                itemPath={PagePath.RESUME}
                onItemClick={() => setShowMenu(false)}
              />
              <MenuItem
                itemPath={PagePath.CONNECT}
                onItemClick={() => setShowMenu(false)}
              />
              <MenuItem
                itemPath={PagePath.ABOUT}
                onItemClick={() => setShowMenu(false)}
              />
            </div>
          ) : null}
        </div>
      </div>
      <div className="flex flex-col justify-center w-full">
        <div className="hidden md:flex flex-row space-x-8 xl:space-x-20">
          <MenuItem itemPath={PagePath.HOME} />
          <MenuItem itemPath={PagePath.PROJECTS} />
          <MenuItem itemPath={PagePath.RESUME} />
        </div>
      </div>
      <div className="relative w-full flex flex-row justify-center w-[375px]">
        <div className="header-logo absolute -top-8 w-60 h-20 md:-top-[50px] md:w-[375px] md:h-[135px] z-10" />
      </div>
      <div className="flex flex-col justify-center w-full">
        <div className="hidden md:flex flex-row space-x-8 xl:space-x-20 w-full justify-end">
          <MenuItem itemPath={PagePath.CONNECT} />
          <MenuItem itemPath={PagePath.ABOUT} />
        </div>
      </div>
      <div className="md:hidden" />
    </div>
  );
};

export default MainMenu;
