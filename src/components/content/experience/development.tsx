import Panel from "../common/panel";

const Development: React.FC = () => {
  return (
    <div className="flex flex-col pb-10 my-10 bg-gradient-to-r from-lime-900 to-lime-700 text-white w-full items-left p-2 -skew-y-2 pt-4 md:pt-2 drop-shadow-lg">
      <div className="skew-y-2">
        <div className="text-3xl text-right mr-6">Software Development</div>
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row w-full justify-around mt-10 items-center">
          <Panel
            title="Software Engineer"
            subTitle="Electronic Financial Group"
            information="1999-2003"
          />
          <Panel
            title="Independent Contractor"
            subTitle="Waco & Austin, TX"
            information={
              <div>
                2003-2016
                <br />
                2003-Present
              </div>
            }
          />
          <Panel
            title="Senior Software Engineer"
            subTitle="Volusion"
            information="2016-2023"
          />
        </div>
      </div>
    </div>
  );
};

export default Development;
