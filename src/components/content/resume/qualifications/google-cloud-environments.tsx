import LinkButton from "../../common/link-button";
import CertificationTemplate from "./template";

const GoogleCloudEnvironments: React.FC = () => {
  return (
    <CertificationTemplate
      title="Configuring Cloud Environments"
      skills={["Cloud Console", "Kubernetes"]}
    >
      <div className="h-full mb-12 flex flex-col">
        <div>
          To acquire this badge, I had to demonstrate knowledge of managing IAM
          roles and project access, creating VPC networks, deploying and
          monitoring Compute Engine VMs, writing SQL queries, and deploying
          applications using Kubernetes with multiple deployment approaches.
        </div>
        <LinkButton
          target="_blank"
          href="https://www.cloudskillsboost.google/public_profiles/b66bad97-b3c2-4ceb-92cf-ec9fef27a278/badges/7931498"
        >
          View Badge
        </LinkButton>
      </div>
    </CertificationTemplate>
  );
};

export default GoogleCloudEnvironments;
