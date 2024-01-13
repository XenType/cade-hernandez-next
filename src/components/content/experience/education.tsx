import Panel from "../common/panel";

const Education: React.FC = () => {
  return (
    <div className="flex flex-col pb-10 my-10 bg-gradient-to-r from-cyan-800 to-cyan-600 text-white w-full items-left p-2 skew-y-2 drop-shadow-lg">
      <div className="-skew-y-2">
        <div className="text-3xl ml-6">Education</div>
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row w-full justify-around mt-10 items-center">
          <Panel
            title="McLennan Community College"
            subTitle="Associate's Degree - Computer Science"
            information="1997-1999"
            notes="Received a great foundation for adding future knowledge"
          />
          <Panel
            title="University of Texas - Austin"
            subTitle="Select Courses / No Degree - Computer Science"
            information="2007-2009"
            notes={
              <div>
                Rather than go into debt for 15 more years, I modernized
                <br />
                my skillset by taking only the classes I really needed.
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
