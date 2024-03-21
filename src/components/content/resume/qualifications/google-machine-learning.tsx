import LinkButton from "../../common/link-button";
import CertificationTemplate from "./template";

const GoogleMachineLearning: React.FC = () => {
  return (
    <CertificationTemplate
      title="Machine Learning Engineer"
      skills={["Machine Learning", "Google Tensor Flow"]}
    >
      <div className="h-full flex flex-col mb-12">
        <div>
          Even as I prepare for the Professional Cloud Developer exam, I've
          started looking ahead at this Machine Learning Engineer path as my
          next goal.
        </div>

        <LinkButton
          target="_blank"
          href="https://cloud.google.com/learn/training/machinelearning-ai"
        >
          View Course Plan
        </LinkButton>
      </div>
    </CertificationTemplate>
  );
};

export default GoogleMachineLearning;
