import PersonalTemplate from "../personal-template";
import ThumbStellaformer from "./thumbnails/thumb-stellaformer";

const GameStellaformer: React.FC = () => {
  return (
    <PersonalTemplate
      projectTitle="Stellaformer"
      subtitle="2D Sci-fi Puzzle Game"
      year="2023-2024"
      skillList={["Godot 4", "GDScript"]}
      thumbnail={<ThumbStellaformer />}
      isActive
    >
      <div className="flex flex-col space-y-2 w-full">
        <div>
          After learning the basics of Godot 4 and GDScript, I've designed a 2D
          puzzle game and started creating the assets and scenes I'll need to
          generate individual puzzle levels.
        </div>
        <div>
          This project is not my highest priority, but I do expect to finish it
          sometime in the first quarter of 2024 and publish it after going
          through feedback cycles with friends.
        </div>
      </div>
    </PersonalTemplate>
  );
};

export default GameStellaformer;
