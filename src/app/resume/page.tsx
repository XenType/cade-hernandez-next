import Attention from "@/components/content/common/attention";
import LinkButton from "@/components/content/common/link-button";
import StackingPanels from "@/components/content/common/stacking-panels";
import ResumeCertifications from "@/components/content/resume/certifications";
import ResumeExperience from "@/components/content/resume/experience";
import ResumeSkills from "@/components/content/resume/skills";
import ResumeSummary from "@/components/content/resume/summary";

const ResumePage: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col bg-cade-blue-dark/80">
      <div className="w-full flex flex-row justify-end px-8 py-4">
        <div className="flex">
          <LinkButton
            href="https://drive.google.com/file/d/1O3Nb3N1uXRh7-1sdFAEgHsCcf-W_gWi5/view?usp=sharing"
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
              title: "Certifications",
              content: <ResumeCertifications />,
            },
            {
              title: "Education",
              content: <div className="min-h-[525px]">content</div>,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default ResumePage;
