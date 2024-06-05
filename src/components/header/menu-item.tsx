"use client";
import WestIcon from "@mui/icons-material/West";
import { usePathname, useRouter } from "next/navigation";
interface MenuItemProps {
  title: string;
  icon: React.ReactNode;
  targetPath: string;
  onClick: (newPath: string) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({
  title,
  icon,
  targetPath,
  onClick,
}) => {
  const path = usePathname();

  const handleOnClick = (): void => {
    if (path !== targetPath) {
      onClick(targetPath);
    }
  };

  return (
    <div
      onClick={handleOnClick}
      className={`flex flex-row items-center w-full md:w-auto hover:text-accent-blue-light cursor-pointer ${
        path === targetPath
          ? "justify-between text-accent-blue-light"
          : "justify-start"
      }`}
    >
      <div className="flex flex-row items-center space-x-6 md:space-x-2">
        <div className="text-5xl md:hidden">{icon}</div>
        <div className="text-4xl md:text-xl font-bold md:pt-1">{title}</div>
      </div>
      {path === targetPath ? (
        <div className="text-5xl md:hidden">
          <WestIcon fontSize="inherit" />
        </div>
      ) : null}
    </div>
  );
};

export default MenuItem;
