"use client";

import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

interface ComponentMenuItem {
  title: string;
  component?: React.ReactNode;
}

interface ComponentMenuGroup extends ComponentMenuItem {
  menuItems?: ComponentMenuItem[];
}

interface SideMenuProps {
  menu: ComponentMenuGroup[];
  onSelection: (component: React.ReactNode, path: string) => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ menu, onSelection }) => {
  const [openGroup, setOpenGroup] = useState<string>("");

  const handleOnClick = (
    menuItem?: ComponentMenuGroup | ComponentMenuItem,
    isTopLevel = false
  ) => {
    if (menuItem?.component) {
      const path = isTopLevel
        ? menuItem.title
        : `${openGroup} > ${menuItem.title}`;
      onSelection(menuItem.component, path);
    }
    if (isTopLevel) {
      if (openGroup === menuItem?.title) {
        setOpenGroup("");
      } else {
        setOpenGroup(menuItem?.title ?? "");
      }
    }
  };

  return (
    <div className="absolute md:flex h-full flex-col border-r border-gray-400 shadow shadow-cade-blue-lite w-[190px] bg-white">
      <ul className="text-sm flex flex-col z-10 bg-cade-blue-lite/20">
        {menu.map((menuGroupEntry) => {
          return (
            <li
              key={menuGroupEntry.title}
              className="border-b border-gray-400 text-cade-blue-dark font-semibold"
            >
              <div className="flex flex-col cursor-pointer">
                <div
                  onClick={() => handleOnClick(menuGroupEntry, true)}
                  className="flex flex-row justify-between items-center cursor-pointer hover:bg-white/50 px-2 py-1"
                >
                  <div>{menuGroupEntry.title}</div>
                  {menuGroupEntry.menuItems ? (
                    openGroup === menuGroupEntry.title ? (
                      <CloseIcon className="text-sm" />
                    ) : (
                      <AddIcon className="text-sm" />
                    )
                  ) : null}
                </div>
                {menuGroupEntry.menuItems &&
                openGroup === menuGroupEntry.title ? (
                  <div className="flex flex-col">
                    <ul className="text-xs flex flex-col">
                      {menuGroupEntry.menuItems.map((menuItem) => (
                        <li
                          key={`${menuGroupEntry.title}:${menuItem.title}`}
                          className="cursor-pointer hover:bg-white/50 pl-4 py-1"
                          onClick={() => handleOnClick(menuItem)}
                        >
                          {menuItem.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </li>
          );
        })}
      </ul>
      <div className="h-full bg-gray-300" />
    </div>
  );
};

export default SideMenu;

export type { ComponentMenuGroup, ComponentMenuItem };
