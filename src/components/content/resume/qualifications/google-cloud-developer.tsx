import LinkButton from "../../common/link-button";
import CertificationTemplate from "./template";

const GoogleCloudDeveloper: React.FC = () => {
  return (
    <CertificationTemplate
      title="Professional Cloud Developer"
      skills={["Google Cloud Platform", "Kubernetes"]}
    >
      <div className="h-full mb-12 flex flex-col">
        <div>
          Having completed the course materials for the Cloud Engineer learning
          plan, I'm currently working through the Cloud Developer plan in
          preparation for certifying as a Google Professional Cloud Developer.
        </div>
        <LinkButton
          target="_blank"
          href="https://www.cloudskillsboost.google/paths/19"
        >
          View Course Plan
        </LinkButton>
      </div>
    </CertificationTemplate>
  );
};

export default GoogleCloudDeveloper;
