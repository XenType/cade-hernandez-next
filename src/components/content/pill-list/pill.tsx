interface PillProps {
  children: string;
}

const Pill: React.FC<PillProps> = ({ children }) => {
  //
  return (
    <div className="rounded-full py-1 px-2 lg:py-2 lg:px-3 m-1 text-xs md:text-sm lg:text-base bg-white border-2 border-accent-blue-light text-accent-blue-dark font-semibold capitalize">
      {children}
    </div>
  );
};

export default Pill;
