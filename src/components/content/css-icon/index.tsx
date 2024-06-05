interface CssIconProps {
  children: React.ReactNode;
  className?: string;
}

const CssIcon: React.FC<CssIconProps> = ({ children, className }) => {
  //
  return (
    <div
      className={`${className} flex flex-col justify-center items-center p-2`}
    >
      {children}
    </div>
  );
};

export default CssIcon;
