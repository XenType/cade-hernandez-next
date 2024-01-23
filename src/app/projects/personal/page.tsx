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
    <div className="w-full h-full bg-cade-blue-dark flex flex-col px-4 md:px-16">
      <div className="flex flex-col w-full h-full mt-4 xl:mt-20 space-y-2 xl:space-y-14">
        <Headline className="text-center text-2xl xl:text-6xl text-white">
          Personal Projects
        </Headline>
        <div className="flex h-full grow overflow-hidden">
          <VerticalSlideshow
            slides={[
              <PersonalIntro key="intro" />,
              <SkillMachineLearning key="skill" />,
              <GameZeepBop key="zeep" />,
              <GameStellaformer key="sella" />,
              <NpmTestLogic key="npm" />,
              <GameOsiris key="osiris" />,
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalProjectsPage;
