interface ProgressBarProps {
  percentageValue: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentageValue }) => {
  const masteryCells = Array(Math.ceil(percentageValue / 5)).fill(true);
  return (
    <div className="flex flex-row items-center w-full rounded-full bg-fill-gray-light overflow-hidden">
      {masteryCells.map((_, index) => {
        return (
          <div
            key={index}
            className="h-2 md:h-6 w-[5%] bg-accent-blue-dark border-l border-r border-accent-blue-dark"
          />
        );
      })}
    </div>
  );
};

export default ProgressBar;
