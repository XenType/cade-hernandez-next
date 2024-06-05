interface CollapsingCardSecondaryLineProps {
  leftText?: string;
  rightText?: string;
}

const CollapsingCardSecondaryLine: React.FC<
  CollapsingCardSecondaryLineProps
> = ({ leftText, rightText }) => {
  //
  return (
    <div className="flex flex-row w-full justify-between items-center text-xs md:text-base font-semibold text-fill-gray-dark py-1 px-2">
      <div>{leftText}</div>
      <div>{rightText}</div>
    </div>
  );
};

export default CollapsingCardSecondaryLine;
