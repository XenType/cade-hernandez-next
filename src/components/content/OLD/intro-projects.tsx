import { PagePath } from "@/components/enum";
import CardLayoutHome from "./card-layout-home";
import Indentation from "../common/indentation";

const IntroProjects: React.FC = () => {
  return (
    <CardLayoutHome
      imageClass="projects-background"
      title="Projects"
      path={PagePath.PROJECTS}
    >
      <div className="flex flex-col space-y-4">
        <div>
          <Indentation />
          From in-house e-commerce solutions to mobile games, I've worked on a
          variety of projects for small businesses, entrepreneurs, non-profit
          organizations and sometimes just to learn something new!
        </div>
        <div>
          <Indentation />
          <span className="font-bold text-gray-700">
            Be sure to EXPLORE these projects and more:
          </span>
          <ul className="list-disc pl-12 pt-2">
            <li>ZoCa AI Studio</li>
            <li>Test-Logic NPM Package</li>
            <li>2D Mobile Game: Run Zeep Bop (learning experience)</li>
            <li>Source for this website (NextJS / React / Typescript)</li>
            <li>
              As well as descriptions of projects that are not publicly
              available to view.
            </li>
          </ul>
        </div>
      </div>
    </CardLayoutHome>
  );
};

export default IntroProjects;
