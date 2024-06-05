"use client";
import HomeIcon from "@mui/icons-material/Home";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import { useRouter } from "next/navigation";
import MenuItem from "./menu-item";

interface DesktopMenuProps {
  //
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({}) => {
  const router = useRouter();

  const handleOnClick = (newPath: string): void => {
    router.push(newPath);
  };
  return (
    <div className="hidden md:flex flex-row items-center space-x-6 w-full px-2 text-white">
      <MenuItem
        title="Home"
        icon={<HomeIcon fontSize="inherit" />}
        targetPath="/"
        onClick={handleOnClick}
      />
      <MenuItem
        title="Projects"
        icon={<DesignServicesIcon fontSize="inherit" />}
        targetPath="/projects"
        onClick={handleOnClick}
      />
      <MenuItem
        title="Resume"
        icon={<DocumentScannerIcon fontSize="inherit" />}
        targetPath="/resume"
        onClick={handleOnClick}
      />
      <MenuItem
        title="Connect"
        icon={<ConnectWithoutContactIcon fontSize="inherit" />}
        targetPath="/connect"
        onClick={handleOnClick}
      />
    </div>
  );
};

export default DesktopMenu;
