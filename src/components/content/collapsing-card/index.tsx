"use client";
import AddIcon from "@mui/icons-material/Add";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

interface CollapsingCardProps {
  isOpen: boolean;
  onOpenToggle: () => void;
  title: string;
  children: React.ReactNode;
}

const CollapsingCard: React.FC<CollapsingCardProps> = ({
  title,
  children,
  isOpen,
  onOpenToggle,
}) => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      divRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [isOpen]);

  return (
    <div
      ref={divRef}
      className="flex flex-col w-full rounded-md border border-accent-gray-light 
    shadow-md shadow-black/20 p-2 md:p-4 transition-all duration-500"
    >
      <div
        className="flex flex-row items-center justify-between cursor-pointer"
        onClick={onOpenToggle}
      >
        <div className="text-base md:text-xl font-semibold text-fill-gray-dark">
          {title}
        </div>
        <div
          className={`text-xl md:text-2xl text-accent-blue-dark transition-all duration-500 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          <AddIcon fontSize="inherit" />
        </div>
      </div>
      {isOpen ? (
        <motion.div
          layout="position"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center w-full"
        >
          {children}
        </motion.div>
      ) : null}
    </div>
  );
};

export default CollapsingCard;
