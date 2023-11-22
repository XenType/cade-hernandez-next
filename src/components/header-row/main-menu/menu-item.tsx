"use client";

import { usePathname } from "next/navigation";
import { PagePath } from "../../enum";
import Link from "next/link";

interface MenuItemProps {
  itemPath: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ itemPath }) => {
  const pathName = usePathname();
  const getMenuTitle = (): string => {
    switch (itemPath) {
      case PagePath.EXPERIENCE:
        return "Experience";
      case PagePath.SKILLS:
        return "Skills";
      case PagePath.PROJECTS:
        return "Projects";
      case PagePath.CONNECT:
        return "Connect";
    }
    return "Home";
  };
  return (
    <div
      className={`hover:cursor-pointer hover:text-blue-700 ${
        pathName === itemPath || pathName === "" ? "text-amber-600" : ""
      }`}
    >
      <Link href={itemPath} title={getMenuTitle()}>
        {getMenuTitle()}
      </Link>
    </div>
  );
};

export default MenuItem;
