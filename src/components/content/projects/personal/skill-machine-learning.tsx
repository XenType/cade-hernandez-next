import PersonalTemplate from "../personal-template";
import ThumbGoogleAi from "./thumbnails/thumb-google-ai";

const SkillMachineLearning: React.FC = () => {
  return (
    <PersonalTemplate
      projectTitle="Machine Learning Engineer"
      subtitle="Google Certification"
      year="2024"
      buttonText1="View Curriculum"
      href1="https://www.cloudskillsboost.google/paths/17?utm_source=cgc&utm_medium=website&utm_campaign=evergreen"
      skillList={["Artificial Intelligence", "Machine Learning"]}
      thumbnail={<ThumbGoogleAi />}
      isActive
    >
      <div className="flex flex-col space-y-2 w-full">
        <div>
          The field of Artificial intelligence is quickly growing and it is
          exciting to finally gain direct access to AI building tools provided
          by the world's leading tech companies.
        </div>
        <div>
          After completing some less in-depth certifications, I am undertaking
          the Google Machine Learning Engineer Learning Path. I'll gain deeper
          insight into the complexities of Convolutional Neural Networks and
          work hands-on with Google's AI Platform.
        </div>
      </div>
    </PersonalTemplate>
  );
};

export default SkillMachineLearning;
