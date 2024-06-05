"use client";
import DesktopMenu from "./desktop-menu";
import MobileMenu from "./mobile-menu";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import { usePathname } from "next/navigation";
import HeaderIconWrapper from "./icon-wrapper";
import { RefObject } from "react";
import { useMediaQuery } from "react-responsive";

interface MainHeaderProps {
  pageRef: RefObject<HTMLDivElement>;
}

const MainHeader: React.FC<MainHeaderProps> = ({ pageRef }) => {
  const path = usePathname();
  const isMobile = !useMediaQuery({ minWidth: "768px" });

  const getTitleLine1 = (currentPath: string): React.ReactNode => {
    switch (currentPath) {
      case "/projects":
        return "Interesting";
      case "/resume":
        return "Interactive";
      case "/connect":
        return "Connect";
    }
    return (
      <div className="flex flex-row items-center">
        Full
        <span className="text-accent-blue-dark">-</span>
        Stack
      </div>
    );
  };
  const getTitleLine2 = (currentPath: string): React.ReactNode => {
    switch (currentPath) {
      case "/projects":
        return "Projects";
      case "/resume":
        return "Resume";
      case "/connect":
        return "With Me";
    }
    return "Engineer";
  };

  const getHeaderGraphic = (currentPath: string): React.ReactNode => {
    switch (currentPath) {
      case "/projects":
        return (
          <HeaderIconWrapper>
            <DesignServicesIcon fontSize="inherit" />
          </HeaderIconWrapper>
        );
      case "/resume":
        return (
          <HeaderIconWrapper size="medium">
            <DocumentScannerIcon fontSize="inherit" />
          </HeaderIconWrapper>
        );
      case "/connect":
        return (
          <HeaderIconWrapper size="medium">
            <ConnectWithoutContactIcon fontSize="inherit" />
          </HeaderIconWrapper>
        );
    }
    return (
      <div className="absolute top-10 left-8 md:left-auto md:right-52 lg:right-96 h-36 w-36 bg-cade-photo bg-cover rounded-full bg-no-repeat bg-center" />
    );
  };

  return (
    <div className="flex flex-col w-full bg-fill-gray-light relative h-[200px]">
      {isMobile ? <MobileMenu pageRef={pageRef} /> : null}
      <div className="flex flex-row w-full justify-end relative grow">
        {getHeaderGraphic(path)}
        <div className="flex flex-col lg:flex-row justify-center lg:justify-start space-y-2 lg:space-y-0 lg:space-x-2 items-end text-4xl font-black text-fill-gray-dark pr-4">
          <div>{getTitleLine1(path)}</div>
          <div>{getTitleLine2(path)}</div>
        </div>
      </div>
      <div className="flex flex-col w-full items-center justify-center bg-accent-blue-dark h-14">
        {!isMobile ? <DesktopMenu /> : null}
      </div>
    </div>
  );
};

export default MainHeader;
