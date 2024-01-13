import { PagePath } from "@/components/enum";
import CardLayoutHome from "./card-layout-home";
import Indentation from "../common/indentation";

const IntroExperience: React.FC = () => {
  return (
    <CardLayoutHome
      imageClass="experience-background"
      title="Experience"
      path={PagePath.RESUME}
    >
      <div className="flex flex-col space-y-4">
        <div>
          <Indentation />
          Software development projects, no matter what the size, need an
          experienced leader that can help uncover hidden requirements, give
          advice on new technologies to use, and make sure deadlines are met.
        </div>
        <div>
          <Indentation />
          <span className="font-bold text-gray-700">
            Click EXPLORE to find out more about how I've:
          </span>
          <ul className="list-disc pl-12 pt-2">
            <li>Contributed to major projects as a full-time developer</li>
            <li>
              Freed entrepreneurs from repetative tasks as a freelance developer
            </li>
            <li>Supplemented my own income using Shopify</li>
            <li>
              Helped non-profit organizations create an online presence to
              attract more donors
            </li>
          </ul>
        </div>
      </div>
    </CardLayoutHome>
  );
};

export default IntroExperience;
