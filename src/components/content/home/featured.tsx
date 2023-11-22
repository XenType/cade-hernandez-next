import Link from "next/link";
import { PagePath } from "../../enum";

const FeaturedContent: React.FC = () => {
  return (
    <div className="flex flex-row justify-around md:justify-between md:mx-10 my-6 text-lg font-semibold text-gray-600 drop-shadow-lg">
      <Link href={PagePath.EXPERIENCE} title="Experience">
        <div className="experience-background h-[120px] w-20 md:h-[240px] md:w-40 flex flex-col justify-center rounded-full">
          <div className="bg-white/70 text-center text-sm md:text-lg">
            Experience
          </div>
        </div>
      </Link>
      <Link href={PagePath.SKILLS} title="Skills">
        <div className="skills-background h-[120px] w-20 md:h-[240px] md:w-40 flex flex-col justify-center rounded-full">
          <div className="bg-white/70 text-center text-sm md:text-lg">
            Skills
          </div>
        </div>
      </Link>
      <Link href={PagePath.PROJECTS} title="Projects">
        <div className="projects-background h-[120px] w-20 md:h-[240px] md:w-40 flex flex-col justify-center rounded-full">
          <div className="bg-white/70 text-center text-sm md:text-lg">
            Projects
          </div>
        </div>
      </Link>
      <Link href={PagePath.CONNECT} title="Connect">
        <div className="contact-background h-[120px] w-20 md:h-[240px] md:w-40 flex flex-col justify-center rounded-full">
          <div className="bg-white/70 text-center text-sm md:text-lg">
            Connect
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FeaturedContent;
