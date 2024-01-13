import { PagePath } from "@/components/enum";
import CardLayoutHome from "./card-layout-home";
import Indentation from "../common/indentation";

const IntroSkills: React.FC = () => {
  return (
    <CardLayoutHome
      imageClass="skills-background"
      title="Skills"
      path={PagePath.SKILLS}
    >
      <div className="flex flex-col space-y-4">
        <div>
          <Indentation />A broad knowledge of modern programming languages and
          frameworks is only part of a developer's skillset. An understanding of
          common processes used by major companies and familiarity with a wide
          variety of tools can make the difference between a good developer and
          a <span className="italic">great </span> developer.
        </div>
        <div>
          <Indentation />
          <span className="font-bold text-gray-700">
            EXPLORE the skills & certifications I've picked up, including:
          </span>
          <ul className="list-disc pl-12 pt-2">
            <li>IBM Artifical Intellegence Foundations Certification</li>
            <li>Artificial Intellegence Modeling</li>
            <li>Cloud Engineering & Infrastructure from Code</li>
            <li>Project Planning</li>
            <li>And of course, a large list of programming languages!</li>
          </ul>
        </div>
        <div>
          <Indentation />
        </div>
      </div>
    </CardLayoutHome>
  );
};

export default IntroSkills;
