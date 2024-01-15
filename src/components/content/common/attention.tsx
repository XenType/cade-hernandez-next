const Attention: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute bg-red-700 h-2 w-2 z-index-10 top-[4px] right-[2px] rounded-full animate-ping" />
      <div className="absolute bg-gradient-to-br from-red-800 to-red-400 h-2 w-2 top-[4px] right-[2px] z-index-10 rounded-full drop-shadow-lg" />
    </div>
  );
};

export default Attention;
