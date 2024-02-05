import PersonalTemplate from "../personal-template";
import ThumbGoogleCloud from "./thumbnails/thumb-google-cloud";

const SkillCloudDeveloper: React.FC = () => {
  return (
    <PersonalTemplate
      projectTitle="Professional Cloud Developer"
      subtitle="Google Certification"
      year="2024"
      buttonText1="View Curriculum"
      href1="https://www.cloudskillsboost.google/paths/19"
      skillList={["Google Cloud Platform", "Kubernetes"]}
      thumbnail={<ThumbGoogleCloud />}
      isActive
    >
      <div className="flex flex-col space-y-2 w-full">
        <div>
          Before I take the Google Professional Cloud Developer exam, I plan on
          working through the Cloud Developer (link below) learning path courses
          offered on the Cloud Skills Boost platform.
        </div>
        <div>
          I've also worked through the Cloud Engineer path as well to enhance my
          DevOps knowledge. I believe, now more than ever, a well rounded
          developer needs to understand concepts like Infrastructure as Code as
          well as various cloud storage options in order to effectively design
          software in today's marketplace.
        </div>
        <div>
          I'll post skill badges and other milestones as I go and, of course,
          the final certification when I get it! Depending on test proctor
          availability, I should have this all completed by March.
        </div>
      </div>
    </PersonalTemplate>
  );
};

export default SkillCloudDeveloper;
