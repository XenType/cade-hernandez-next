const Attention: React.FC = () => {
  return (
    <div>
      <div className="absolute bg-red-700 h-2 w-2 z-index-10 right-2 top-2 rounded-full animate-ping" />
      <div className="absolute bg-gradient-to-br from-red-800 to-red-400 h-2 w-2 z-index-10 right-2 top-2 rounded-full drop-shadow-lg" />
    </div>
  );
};

export default Attention;
