import { PagePath } from "@/components/enum";
import LinkButton from "../common/link-button";

const CollaborateContent: React.FC = () => {
  return (
    <div className="flex flex-col m-auto space-y-6">
      <LinkButton href={PagePath.CONNECT}>
        Send me a message, let's work together!
      </LinkButton>
      <LinkButton href={PagePath.PROJECTS}>
        Look through past, present and future projects.
      </LinkButton>
    </div>
  );
};

export default CollaborateContent;
