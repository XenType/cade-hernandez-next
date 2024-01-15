import Indentation from "../../common/indentation";

const PersonalIntro: React.FC = () => {
  return (
    <div className="flex flex-col space-y-4 px-8 h-full">
      <div className="text-center text-2xl font-semibold">
        For My Own Personal Enlightenment
      </div>
      <div className="flex flex-col space-y-8 grow pt-8">
        <div className="text-justify text-sm font-semibold">
          <Indentation />
          Something I've often neglected in the past has been developing skills
          and undertaking projects that are interesting to me personally - not
          just something I need to learn for an upcoming work project.
        </div>
        <div className="text-justify text-sm font-semibold">
          <Indentation />
          Now, as I give myself time to follow those interests, I'll continue
          adding more to this list. From gaining expertise in emerging
          technologies to satisfying a childhood dream of making video games -
          expect a variety of new projects to appear as existing ones become
          complete.
        </div>
        <div className="text-justify text-sm font-semibold">
          In 2024 I plan to:
          <ul className="list-disc pl-10 pt-2">
            <li>Finish and release my first marketable mobile game.</li>
            <li>Aquire a Google Machine Learning Engineer certification.</li>
            <li>Expand ZoCa to include additional product domains.</li>
            <li>Find a new position at an AI-forward company.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PersonalIntro;
