import LinkButton from "../../common/link-button";
import CertificationTemplate from "./template";

const GoogleCloudTerraform: React.FC = () => {
  return (
    <CertificationTemplate
      title="Automating Infrastructure with Terraform"
      skills={["Cloud Console", "Kubernetes"]}
    >
      <div className="h-full mb-12 flex flex-col">
        <div>
          For this skill badge, I had to show experience building, changing, and
          destroying infrastructure, managing local and remote state, importing
          infrastructure, and building custom modules.
        </div>
        <LinkButton
          target="_blank"
          href="https://www.cloudskillsboost.google/public_profiles/b66bad97-b3c2-4ceb-92cf-ec9fef27a278/badges/7961030"
        >
          View Badge
        </LinkButton>
      </div>
    </CertificationTemplate>
  );
};

export default GoogleCloudTerraform;
