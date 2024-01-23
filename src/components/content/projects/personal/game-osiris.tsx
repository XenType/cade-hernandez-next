import PersonalTemplate from "../personal-template";
import ThumbOsiris from "./thumbnails/thumb-osiris";

const GameOsiris: React.FC = () => {
  return (
    <PersonalTemplate
      projectTitle="Project Osiris"
      subtitle="3D Game in Early Planning"
      year="2024"
      skillList={["Godot 4", "GDScript"]}
      thumbnail={<ThumbOsiris />}
      isActive
    >
      <div className="flex flex-col space-y-2 w-full">
        <div>
          This game is still in the planning stages, but it will incorporate
          elements from survival, factory and RPG games into an exciting game
          that provides logistical challenges, exploratory puzzle solving and
          the freedom to make choices in how the player wants to win, rather
          than being forced down a single path to victory.
        </div>
        <div>
          I'll begin creating game assets and components sometime in mid-2024.
        </div>
      </div>
    </PersonalTemplate>
  );
};

export default GameOsiris;
