import Panel from "../common/panel";

const Development: React.FC = () => {
  return (
    <div className="flex flex-col pb-10 my-10 bg-gradient-to-r from-lime-900 to-lime-700 text-white w-full items-left p-2 -skew-y-2 pt-4 md:pt-2 drop-shadow-lg">
      <div className="skew-y-2">
        <div className="text-3xl text-right mr-6">Software Development</div>
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row w-full justify-around mt-10 items-center">
          <Panel>
            <div className="text-xl">Software Engineer</div>
            <div>Electronic Financial Group</div>
            <div className="text-sm">1999-2003</div>
          </Panel>
          <Panel>
            <div className="text-xl">Independent Contractor</div>
            <div>Waco & Austin, TX</div>
            <div className="text-sm">2003-2012</div>
          </Panel>
          <Panel>
            <div className="text-xl">Senior Software Engineer</div>
            <div>Volusion</div>
            <div className="text-sm">2016-2023</div>
          </Panel>
        </div>
      </div>
    </div>
  );
};

export default Development;
