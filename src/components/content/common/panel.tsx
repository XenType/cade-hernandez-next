interface PanelProps {
  children: React.ReactNode;
}

const Panel: React.FC<PanelProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center drop-shadow-md rounded-md bg-white/20 py-4 px-6 border border-white/30 min-w-[275px] justify-around">
      {children}
    </div>
  );
};

export default Panel;
