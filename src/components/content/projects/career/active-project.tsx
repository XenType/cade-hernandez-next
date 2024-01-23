import Attention from "../../common/attention";

const ActiveProject: React.FC = () => {
  return (
    <div className="flex flex-row text-sm font-bold text-red-800 grow space-x-2">
      <Attention />
      <div>Active Project</div>
    </div>
  );
};

export default ActiveProject;
