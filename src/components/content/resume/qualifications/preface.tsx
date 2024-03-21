import Indentation from "../../common/indentation";
import CertificationTemplate from "./template";

const CertificationPreface: React.FC = () => {
  return (
    <CertificationTemplate title="Preface">
      <div className="flex flex-col space-y-2">
        <div>
          <Indentation spaces={2} />
          I'm venturing out into a job market that has changed in very big ways
          since I took my last role over 8 years ago. Experience with cloud
          platforms is now a must and the emerging field of Generative AI is
          opening doors no one knew existed before!
        </div>
        <div>
          <Indentation spaces={2} />
          To make sure I am ahead of the curve, I've gone through Google Skills
          Boost courses in Cloud Engineering and Development to fill in any gaps
          from on-the-job experience. I've also completed the IBM SkillsBuild AI
          Fundamentals course to get a wider range of AI experience before I
          move on to Google's Artificial Intelligence Engineer course.
        </div>
        <div>
          <Indentation spaces={2} />
          While I won't be taking certification tests for every course I
          complete, I've posted any associated skill and completion badges for
          viewing and will update the list with more as they are earned.
        </div>
      </div>
    </CertificationTemplate>
  );
};

export default CertificationPreface;
