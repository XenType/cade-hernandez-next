"use client";
import { motion } from "framer-motion";
import EastIcon from "@mui/icons-material/East";
import SouthIcon from "@mui/icons-material/South";
interface LinkCardProps {
  motionKey: string;
  title: string;
  description: string;
  onClick: () => void;
  arrowDirection?: "right" | "down";
}

const LinkCard: React.FC<LinkCardProps> = ({
  motionKey,
  title,
  description,
  onClick,
  arrowDirection = "right",
}) => {
  return (
    <motion.div
      initial={{ x: -500, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 500, opacity: 0 }}
      transition={{ duration: 0.3 }}
      layoutId={motionKey}
      key={motionKey}
      className="flex flex-row justify-between space-x-2 items-center p-4 rounded-md 
      cursor-pointer border border-accent-gray-light shadow-md shadow-black/10 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex flex-col w-full space-y-2">
        <div className="text-base md:text-lg font-semibold text-fill-gray-dark">
          {title}
        </div>
        <div className="text-sm md:text-base font-medium text-fill-gray-dark">
          {description}
        </div>
      </div>
      <div className="text-2xl md:text-3xl text-accent-blue-dark animate-pulse">
        {arrowDirection === "right" ? (
          <EastIcon fontSize="inherit" />
        ) : (
          <SouthIcon fontSize="inherit" />
        )}
      </div>
    </motion.div>
  );
};

export default LinkCard;
