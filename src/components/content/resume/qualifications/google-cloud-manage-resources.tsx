import LinkButton from "../../common/link-button";
import CertificationTemplate from "./template";

const GoogleCloudManageResources: React.FC = () => {
  return (
    <CertificationTemplate
      title="Creating and Managing Cloud Resources"
      skills={["Compute Engine", "Kubernetes"]}
    >
      <div className="h-full mb-12 flex flex-col">
        <div>
          To earn this badge I showed proficiency in writing <code>gcloud</code>{" "}
          commands and use Cloud Shell, creating and deploying virtual machines
          in Compute Engine, running containerized applications on Google
          Kubernetes Engine, and configuring network and HTTP load balancers.
        </div>
        <LinkButton
          target="_blank"
          href="https://www.cloudskillsboost.google/public_profiles/b66bad97-b3c2-4ceb-92cf-ec9fef27a278/badges/7922383"
        >
          View Badge
        </LinkButton>
      </div>
    </CertificationTemplate>
  );
};

export default GoogleCloudManageResources;
