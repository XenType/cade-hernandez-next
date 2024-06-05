import Pill from "./pill";

interface PillListProps {
  list: string[];
}

const PillList: React.FC<PillListProps> = ({ list }) => {
  //
  return (
    <div className="flex flex-row flex-wrap w-full justify-around">
      {list.map((entry) => {
        return <Pill key={entry}>{entry}</Pill>;
      })}
    </div>
  );
};

export default PillList;
