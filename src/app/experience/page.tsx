import FormattedLink from "@/components/content/common/formatted-link";
import Attention from "../../components/content/common/attention";
import Education from "@/components/content/experience/education";
import Development from "@/components/content/experience/development";
import NonTech from "@/components/content/experience/non-tech";
import { ExternalLinks } from "@/components/constants";
import { ExternalLinkNames } from "@/components/enum";

const ExperienceContent: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full text-right pr-2 flex flex-row justify-end">
        <div className="relative">
          <Attention />
        </div>
        <FormattedLink
          href={ExternalLinks[ExternalLinkNames.RESUME]}
          title="My Resume"
          newTab
        >
          View my Resume (PDF)
        </FormattedLink>
      </div>
      <Education />
      <Development />
      <NonTech />
    </div>
  );
};

export default ExperienceContent;
