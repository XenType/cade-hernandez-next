"use client";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import MenuItem from "./menu-item";
import { RefObject, useEffect, useRef, useState } from "react";

interface MobileMenuProps {
  pageRef: RefObject<HTMLDivElement>;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ pageRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const divRef = useRef<HTMLDivElement>(null);

  const handleOnClick = (newPath: string): void => {
    router.push(newPath);
    setIsOpen(false);
  };

  useEffect(() => {
    const listenForPageClick = (event: any) => {
      if (divRef.current?.contains(event.target as Node)) {
        return;
      }
      setIsOpen(false);
    };
    const pageDiv = pageRef.current;
    pageDiv?.addEventListener("click", listenForPageClick);

    return () => {
      pageDiv?.removeEventListener("click", listenForPageClick);
    };
  }, [pageRef]);

  return (
    <div>
      <div className="absolute md:hidden top-1 left-1 flex flex-col w-12 h-12 cursor-pointer z-40">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-row grow justify-center items-center text-3xl text-accent-blue-dark"
        >
          <MenuIcon fontSize="inherit" />
        </div>
      </div>
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            ref={divRef}
            initial={{ x: -800 }}
            animate={{ x: 0 }}
            exit={{ x: -800 }}
            transition={{ duration: 0.5 }}
            key="mobile-menu"
            layoutId="mobile-menu"
            className="absolute z-50 top-4 left-4 right-4"
          >
            <div className="flex flex-col space-y-8 bg-fill-gray-dark text-white rounded-lg p-6">
              <div className="w-full text-center uppercase font-semibold text-xl">
                Menu
              </div>
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
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
