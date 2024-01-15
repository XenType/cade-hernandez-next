import Headline from "@/components/content/common/headline";
import VerticalSlideshow from "@/components/content/common/vertical-slideshow";
import GameOsiris from "@/components/content/projects/personal/game-osiris";
import GameStellaformer from "@/components/content/projects/personal/game-stellaformer";
import GameZeepBop from "@/components/content/projects/personal/game-zeep-bop";
import PersonalIntro from "@/components/content/projects/personal/intro";
import NpmTestLogic from "@/components/content/projects/personal/npm-test-logic";
import SkillMachineLearning from "@/components/content/projects/personal/skill-machine-learning";

const PersonalProjectsPage: React.FC = () => {
  return (
    <div className="w-full h-full bg-cade-blue-dark flex flex-col px-16">
      <div className="flex flex-col h-full m-auto mt-20 space-y-14">
        <Headline className="text-center text-6xl text-white">
          Personal Projects
        </Headline>
        <div className="flex h-full grow">
          <VerticalSlideshow
            slides={[
              <PersonalIntro />,
              <SkillMachineLearning />,
              <GameZeepBop />,
              <GameStellaformer />,
              <NpmTestLogic />,
              <GameOsiris />,
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalProjectsPage;
