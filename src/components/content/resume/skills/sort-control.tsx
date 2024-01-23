enum TileSortMode {
  MASTERY,
  CATEGORY,
}

interface ResumeTileSortControlProps {
  sortMode: TileSortMode;
  onChange: (sortMode: TileSortMode) => void;
}

const ResumeTileSortControl: React.FC<ResumeTileSortControlProps> = ({
  sortMode,
  onChange,
}) => {
  return (
    <div className="flex flex-row ml-4 text-xs md:text-base">
      <div className="p-2">Sort by</div>
      <div className="p-2 flex flex-row space-x-2">
        <input
          className="outline-none"
          type="radio"
          name="sortOrder"
          value="mastery"
          checked={sortMode === TileSortMode.MASTERY}
          onChange={() => onChange(TileSortMode.MASTERY)}
        />
        <div>Mastery</div>
      </div>
      <div className="p-2 flex flex-row space-x-2">
        <input
          className="outline-none"
          type="radio"
          name="sortOrder"
          value="category"
          checked={sortMode === TileSortMode.CATEGORY}
          onChange={() => onChange(TileSortMode.CATEGORY)}
        />
        <div>Category</div>
      </div>
    </div>
  );
};

export default ResumeTileSortControl;

export { TileSortMode };

export type { ResumeTileSortControlProps };
