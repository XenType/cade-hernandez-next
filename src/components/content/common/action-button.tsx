import { MouseEventHandler } from "react";

interface ActionButtonProps {
  children: React.ReactNode;
  outlineOnly?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  children,
  outlineOnly = false,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`py-4 w-40 border-4 rounded-md border-cade-blue-dark text-center font-bold cursor-pointer ${
        outlineOnly
          ? "bg-white text-cade-blue-dark hover:bg-cade-blue-dark hover:text-white focus:bg-white focus:text-cade-blue-dark"
          : "bg-cade-blue-dark text-white hover:bg-white hover:text-cade-blue-dark focus:bg-cade-blue-dark focus:text-white"
      }`}
    >
      {children}
    </div>
  );
};

export default ActionButton;
