interface StackingTileProps {
  title: string;
  content: React.ReactNode;
}

interface StackingTilesProps {
  tileList: StackingTileProps[];
}

const StackingTiles: React.FC<StackingTilesProps> = ({ tileList }) => {
  return (
    <div className="bg-gray-700 grow flex flex-row items-center overflow-x-auto border-2 border-cade-blue-dark">
      {tileList.map(({ title, content }, index) => (
        <div
          className="sticky relative bg-cade-blue-dark h-[250px] min-w-[250px] flex flex-col justify-center"
          key={title}
          style={{ left: index * 30 }}
        >
          <div className="flex flex-row h-full">
            <div
              className="transform rotate-180 text-center p-[3px] font-semibold text-cade-blue-lite"
              style={{ writingMode: "vertical-lr" }}
            >
              {title}
            </div>

            <div className="w-full h-full grow">{content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StackingTiles;

export type { StackingTileProps, StackingTilesProps };
