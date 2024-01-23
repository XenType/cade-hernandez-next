"use client";

import { useState } from "react";
import SideMenu, { ComponentMenuGroup } from "./side-menu";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useMediaQuery } from "react-responsive";
import { SCREEN_MOBILE } from "@/utilities/media-query-parameters";

interface ComponentViewerProps {
  title?: string;
  componentMenu: ComponentMenuGroup[];
  defaultComponent?: React.ReactNode;
  defaultPath?: string;
}

const ComponentViewer: React.FC<ComponentViewerProps> = ({
  title = "Component Viewer",
  componentMenu,
  defaultComponent = null,
  defaultPath = "",
}) => {
  const [currentComponent, setCurrentComponent] =
    useState<React.ReactNode>(defaultComponent);
  const [currentPath, setCurrentPath] = useState(defaultPath);
  const isMobile = useMediaQuery(SCREEN_MOBILE);
  const [showMenu, setShowMenu] = useState(!isMobile);
  const handleOnSelect = (component: React.ReactNode, path: string): void => {
    setCurrentComponent(component);
    setCurrentPath(path);
    setShowMenu(false);
  };

  return (
    <div className="md:m-2 border border-cade-blue-dark rounded-sm flex flex-col h-full w-full grow">
      <div className="bg-cade-blue-dark text-white flex flex-row p-1">
        <div>{title}</div>
      </div>
      <div className="grow h-full flex flex-row">
        <div className="flex flex-row z-10">
          <div
            className="flex flex-col items-center justify-center grow w-6 md:hidden"
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? (
              <KeyboardArrowLeftIcon className="text-cade-blue-dark" />
            ) : (
              <KeyboardArrowRightIcon className="text-cade-blue-dark" />
            )}
          </div>
          <div className="relative max-h-[285px] md:max-h-none">
            {!isMobile || showMenu ? (
              <SideMenu menu={componentMenu} onSelection={handleOnSelect} />
            ) : null}
          </div>
        </div>
        <div className="grow flex flex-col justify-center items-center min-h-[400px] z-5">
          {currentComponent ? (
            <div className="flex flex-col border p-4 rounded-lg shadow md:w-[450px] min-h-[325px]">
              {currentComponent}
            </div>
          ) : null}
        </div>
      </div>
      <div className="flex border-t bg-gray-200 border-gray-300 text-xs px-2 flex-row justify-end items-center text-gray-800 h-6">
        {currentPath ? `Viewing ${currentPath}` : null}
      </div>
    </div>
  );
};

export default ComponentViewer;
