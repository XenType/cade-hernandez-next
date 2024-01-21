"use client";

import { usePathname } from "next/navigation";
import { PagePath } from "../enum";
import Link from "next/link";

interface MenuItemProps {
  itemPath: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ itemPath }) => {
  const pathName = usePathname();
  const getMenuTitle = (): string => {
    switch (itemPath) {
      case PagePath.RESUME:
        return "Resume";
      case PagePath.ABOUT:
        return "About";
      case PagePath.PROJECTS:
        return "Projects";
      case PagePath.PROJ_CAREER:
        return "Career";
      case PagePath.PROJ_FREELANCE:
        return "Freelance";
      case PagePath.PROJ_PERSONAL:
        return "Personal";
      case PagePath.CONNECT:
        return "Connect";
    }
    return "Home";
  };
  return (
    <div
      className={`hover:cursor-pointer hover:text-cade-blue-med ${
        pathName === itemPath ||
        (itemPath !== "/" && pathName.startsWith(itemPath))
          ? "text-cade-blue-med underline font-bold"
          : "text-cade-blue-dark"
      }`}
    >
      <Link href={itemPath} title={getMenuTitle()}>
        {getMenuTitle()}
      </Link>
    </div>
  );
};

export default MenuItem;
