import { PagePath } from "../../enum";
import MenuItem from "./menu-item";

const MainMenu: React.FC = () => {
  return (
    <div className="uppercase flex flex-row grow justify-between items-end md:items-center font-bold text-gray-500 text-sm md:h-9 mx-2 md:ml-[260px] md:text-lg">
      <MenuItem itemPath={PagePath.HOME} />
      <MenuItem itemPath={PagePath.EXPERIENCE} />
      <MenuItem itemPath={PagePath.SKILLS} />
      <MenuItem itemPath={PagePath.PROJECTS} />
      <MenuItem itemPath={PagePath.CONNECT} />
    </div>
  );
};

export default MainMenu;
