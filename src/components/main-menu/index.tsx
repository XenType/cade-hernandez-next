import { PagePath } from "../enum";
import MenuItem from "./menu-item";
import MenuIcon from "@mui/icons-material/Menu";

const MainMenu: React.FC = () => {
  return (
    <div className="flex flex-row w-full justify-center border-b-[1px] h-[35px] md:h-[53px] border-gray-400 px-2 md:px-6 text-xl">
      <div className="md:hidden flex flex-col justify-center">
        <MenuIcon className="text-cade-blue-med" />
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
