import PersonalTemplate from "../personal-template";
import ThumbZeepBop from "./thumbnails/thumb-zeepbop";

const GameZeepBop: React.FC = () => {
  return (
    <PersonalTemplate
      projectTitle="Run Zeep Bop!"
      subtitle="A Simple Game to Learn About Godot 4"
      year="2023"
      buttonText1="Source Code"
      href1="https://github.com/XenType/RunZeepBop"
      buttonText2="Download Desktop Version"
      href2="https://drive.google.com/file/d/1i3CufjSuVxftgySxQn-mUGhACAgeWmi0/view?usp=drive_link"
      skillList={["Godot 4", "GDScript"]}
      thumbnail={<ThumbZeepBop />}
    >
      <div className="flex flex-col space-y-2 w-full">
        <div>
          After completing a few online tutorials, I realized I would learn MUCH
          more if I created a simple 2D game myself. I wanted to see how
          GDScript handles concepts like class inheritance, get a feeling for
          the most commonly used components and experiment with creating my own
          reusable scenes and classes.
        </div>
        <div>
          While I did not publish this mobile game (calling it "unpolished"
          would be a kindness!), I did create a desktop build to post in this
          portfolio. I feel it shows my ability to learn new skills quickly, as
          I made this 3-level game and all of its assets in under a week.
        </div>
      </div>
    </PersonalTemplate>
  );
};

export default GameZeepBop;
