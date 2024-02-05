import LinkButton from "../../common/link-button";
import CertificationTemplate from "./template";

const GoogleCloudFoundationalTasks: React.FC = () => {
  return (
    <CertificationTemplate
      title="Infrastructure Tasks in Google Cloud"
      skills={["Cloud Storage", "Infrastructure"]}
    >
      <div className="h-full mb-12 flex flex-col">
        <div>
          For this badge I demonstrated knowledge in building and connecting
          storage-centric cloud infrastructure using the basic capabilities of
          the of the following technologies: Cloud Storage, Identity and Access
          Management, Cloud Functions, and Pub/Sub
        </div>
        <LinkButton
          target="_blank"
          href="https://www.cloudskillsboost.google/public_profiles/b66bad97-b3c2-4ceb-92cf-ec9fef27a278/badges/7930993"
        >
          View Badge
        </LinkButton>
      </div>
    </CertificationTemplate>
  );
};
export default GoogleCloudFoundationalTasks;
