import { ExternalLinks } from "@/components/constants";
import Attention from "@/components/content/common/attention";
import LinkButton from "@/components/content/common/link-button";
import StackingPanels from "@/components/content/common/stacking-panels";
import ResumeCertifications from "@/components/content/resume/certifications";
import ResumeEducation from "@/components/content/resume/education";
import ResumeExperience from "@/components/content/resume/experience";
import ResumeSkills from "@/components/content/resume/skills";
import ResumeSummary from "@/components/content/resume/summary";
import { ExternalLinkNames } from "@/components/enum";

const ResumePage: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col bg-cade-blue-dark/80">
      <div className="w-full flex flex-row justify-end px-8 py-4">
        <div className="flex">
          <LinkButton
            href={ExternalLinks[ExternalLinkNames.RESUME]}
            target="_blank"
          >
            <div className="flex flex-row">
              <div className="p-1">
                <Attention />
              </div>
              <div className="text-right">Printable Resume</div>
            </div>
          </LinkButton>
        </div>
      </div>
      <div className="grow h-full overflow-y-auto flex flex-col">
        <StackingPanels
          panels={[
            {
              title: "Summary",
              content: <ResumeSummary />,
            },
            {
              title: "Skills",
              content: <ResumeSkills />,
            },
            {
              title: "Experience",
              content: <ResumeExperience />,
            },
            {
              title: "Certifications & Badges",
              content: <ResumeCertifications />,
            },
            {
              title: "Education",
              content: <ResumeEducation />,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default ResumePage;
