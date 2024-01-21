const ScrollingTimeline: React.FC = () => {
  return (
    <div className="flex flex-row justify-center grow h-full w-full">
      <div className="w-full" />
      <div className="relative h-full flex">
        <div className="absolute bg-cade-blue-med h-full w-2" />
      </div>
      <div className="flex flex-col overflow-y-auto w-full">
        <div className="min-h-[800px]" />
        <div className="flex flex-row space-x-6 bg-cade-blue-dark px-6 py-2 rounded-md text-white font-semibold sticky top-0">
          <div>1977</div>
          <div>born</div>
        </div>
        <div className="min-h-[800px]" />
      </div>
    </div>
  );
};

export default ScrollingTimeline;
