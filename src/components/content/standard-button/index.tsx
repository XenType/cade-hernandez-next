"use client";
interface StandardButtonProps {
  children: string | React.ReactNode;
  type?: "primary" | "secondary";
  onClick?: () => void;
}

const StandardButton: React.FC<StandardButtonProps> = ({
  children,
  type = "primary",
  onClick = () => {},
}) => {
  //
  return (
    <div
      onClick={onClick}
      className={`flex flex-col items-center px-4 py-2 min-w-[130px] 
      cursor-pointer text-lg transition-all duration-800 rounded-md border-2
      ${
        type === "primary"
          ? "border-accent-blue-dark bg-accent-blue-dark text-white hover:border-accent-blue-light"
          : "border-fill-gray-dark bg-white text-fill-gray-dark hover:border-accent-blue-light font-semibold"
      }
      
      `}
    >
      {children}
    </div>
  );
};

export default StandardButton;
