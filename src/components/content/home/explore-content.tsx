import { PagePath } from "@/components/enum";
import LinkButton from "../common/link-button";

const ExploreContent: React.FC = () => {
  return (
    <div className="flex flex-col m-auto space-y-6">
      <LinkButton href={PagePath.RESUME}>
        Browse skills, certifications and experiences.
      </LinkButton>
      <LinkButton href={PagePath.PROJECTS}>
        Web content, enterprise software ... and now games!
      </LinkButton>
    </div>
  );
};

export default ExploreContent;
