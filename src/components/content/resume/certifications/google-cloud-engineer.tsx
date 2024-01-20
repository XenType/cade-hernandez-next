import LinkButton from "../../common/link-button";
import CertificationTemplate from "./template";

const GoogleCloudEngineer: React.FC = () => {
  return (
    <CertificationTemplate
      title="Associate Cloud Engineer"
      skills={["Google Cloud Platform", "Terraform"]}
    >
      <div className="h-full mb-12 flex flex-col">
        <div>
          Having completed the course materials for the Associate Cloud Engineer
          Learning plan, I'm currently preparing to take the certification exam.
        </div>
        <LinkButton
          target="_blank"
          href="https://www.cloudskillsboost.google/paths/11"
        >
          View Course Plan
        </LinkButton>
      </div>
    </CertificationTemplate>
  );
};

export default GoogleCloudEngineer;
