interface PillTagProps {
  children: React.ReactNode;
}

const PillTag: React.FC<PillTagProps> = ({ children }) => {
  return (
    <div
      className={`
      border-2 border-cade-blue-lite 
      bg-white text-cade-blue-dark font-bold
      hover:bg-cade-blue-dark hover:text-white
      flex flex-row justify-center
      min-w-[100px] py-1 px-4 m-2 
      cursor-pointer rounded-3xl
      `}
    >
      {children}
    </div>
  );
};

export default PillTag;
