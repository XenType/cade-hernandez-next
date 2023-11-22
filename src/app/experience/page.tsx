import FormattedLink from "@/components/content/common/formatted-link";
import Attention from "../../components/content/common/attention";
import Panel from "../../components/content/common/panel";
import Education from "@/components/content/experience/education";
import Development from "@/components/content/experience/development";
import NonTech from "@/components/content/experience/non-tech";

const ExperienceContent: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full text-right pr-2 flex flex-row justify-end">
        <div className="relative">
          <Attention />
        </div>
        <FormattedLink
          href="https://www.cadehernandez.com/docs/resume2.pdf"
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
