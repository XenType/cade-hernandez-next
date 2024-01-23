import { PagePath } from "@/components/enum";
import MenuItem from "@/components/main-menu/menu-item";

const ProjectMenu: React.FC = () => {
  return (
    <div className="flex flex-row w-full justify-center">
      <div className="w-full max-w-[1000px] flex flex-row justify-center md:justify-around space-x-12 md:space-x-0 md:px-20 py-4 xl:py-8 text-xl xl:text-3xl font-bold">
        <MenuItem itemPath={PagePath.PROJ_CAREER} />
        <MenuItem itemPath={PagePath.PROJ_FREELANCE} />
        <MenuItem itemPath={PagePath.PROJ_PERSONAL} />
      </div>
    </div>
  );
};

export default ProjectMenu;
