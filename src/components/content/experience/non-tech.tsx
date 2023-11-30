import Panel from "../common/panel";

const NonTech: React.FC = () => {
  return (
    <div className="flex flex-col pb-10 my-10 bg-gradient-to-r from-indigo-800 to-indigo-400 text-white w-full items-left p-2 skew-y-2 drop-shadow-lg">
      <div className="-skew-y-2">
        <div className="text-3xl">Outside of Engineering</div>
        <div className="flex flex-col space-y-4 md:space-y-0 md:items-start md:h-[225px] md:flex-wrap md:flex-row w-full justify-around mt-10 items-center">
          <Panel
            title="Game Master"
            information="Blizzard Entertainment - Austin TX"
          />
          <Panel
            title="Painting & Print Framing"
            information="Frames, Etc - Waco TX"
          />
          <Panel
            title="Event Coordinator"
            information="Dagar's Catering - Austin TX"
          />
          <Panel
            title="Trainer"
            information={
              <div>
                Volusion - Austin TX
                <br />
                Dagar's Catering - Austin TX
                <br />
                Blizzard Entertainment - Austin TX
              </div>
            }
          />
          <Panel
            title="Assistant Manager"
            information="1431 Cafe - Cedar Park TX"
          />
          <Panel
            title="Customer Support"
            information={
              <div>
                Volusion - Austin TX
                <br />
                Blizzard Entertainment - Austin TX
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default NonTech;
