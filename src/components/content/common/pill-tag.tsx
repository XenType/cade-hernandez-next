interface PillTagProps {
  children: React.ReactNode;
}

const PillTag: React.FC<PillTagProps> = ({ children }) => {
  return (
    <div
      className={`
      border-2 border-cade-blue-lite 
      bg-white text-cade-blue-dark font-bold
      hover:bg-cade-blue-dark hover:text-white hover:font-normal
      flex flex-row justify-center
      min-w-[100px] p-[4px] m-2 
      cursor-pointer rounded-3xl
      `}
    >
      {children}
    </div>
  );
};

export default PillTag;
