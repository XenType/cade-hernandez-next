import Panel from "../common/panel";

const NonTech: React.FC = () => {
  return (
    <div className="flex flex-col pb-10 my-10 bg-gradient-to-r from-indigo-800 to-indigo-400 text-white w-full items-left p-2 skew-y-2 drop-shadow-lg">
      <div className="-skew-y-2">
        <div className="text-3xl">Outside of Engineering</div>
        <div className="flex flex-col space-y-4 md:space-y-0 md:items-start md:h-[225px] md:flex-wrap md:flex-row w-full justify-around mt-10 items-center">
          <Panel>
            <div className="text-lg">Game Master</div>
            <div className="text-sm">Blizzard Entertainment - Austin TX</div>
          </Panel>
          <Panel>
            <div className="text-lg">Painting & Print Framing</div>
            <div className="text-sm">Frames, Etc - Waco TX</div>
          </Panel>
          <Panel>
            <div className="text-lg">Event Coordinator</div>
            <div className="text-sm">Dagar's Catering - Austin TX</div>
          </Panel>
          <Panel>
            <div className="text-lg">Trainer</div>
            <div className="text-sm">Dagar's Catering - Austin TX</div>
            <div className="text-sm">Blizzard Entertainment - Austin TX</div>
            <div className="text-sm">Volusion - Austin TX</div>
          </Panel>
          <Panel>
            <div className="text-lg">Assistant Manager</div>
            <div className="text-sm">1431 Cafe - Cedar Park TX</div>
          </Panel>
          <Panel>
            <div className="text-lg">Customer Support</div>
            <div className="text-sm">Volusion - Austin TX</div>
            <div className="text-sm">Blizzard Entertainment - Austin TX</div>
          </Panel>
        </div>
      </div>
    </div>
  );
};

export default NonTech;
