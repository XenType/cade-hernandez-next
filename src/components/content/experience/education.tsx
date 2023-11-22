import Panel from "../common/panel";

const Education: React.FC = () => {
  return (
    <div className="flex flex-col pb-10 my-10 bg-gradient-to-r from-cyan-800 to-cyan-600 text-white w-full items-left p-2 skew-y-2 drop-shadow-lg">
      <div className="-skew-y-2">
        <div className="text-3xl ml-6">Education</div>
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row w-full justify-around mt-10 items-center">
          <Panel>
            <div className="text-xl">McLennan Community College</div>
            <div>Associate's Degree - Computer Science</div>
            <div className="text-sm">1997-1999</div>
          </Panel>
          <Panel>
            <div className="text-xl">University of Texas - Austin</div>
            <div>Bachelor's Degree - Computer Science</div>
            <div className="text-sm">2007-2009</div>
          </Panel>
        </div>
      </div>
    </div>
  );
};

export default Education;
