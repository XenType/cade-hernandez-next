import { PagePath } from "../../enum";
import FormattedLink from "../common/formatted-link";

const WelcomeContent: React.FC = () => {
  return (
    <div className="text-sm md:text-base h-full">
      <div className="flex flex-col md:flex-row p-2 md:p-6 justify-center space-y-4 md:space-y-0 md:space-x-24 items-center">
        <div className="bg-white/70 rounded-md py-2 px-3 md:w-[300px] drop-shadow-md border border-white">
          <span className="text-base md:text-xl">Welcome to my portfolio!</span>
          <br />
          <br />I appreciate your interest in me and what I have to offer to
          you, your company and the world. Scroll down to explore my
          <span className="font-semibold px-1">
            Experiences, Skills and Projects
          </span>{" "}
          or use the menu above.
          <br />
          <br />
          If you are seeking custom software, website development or a
          dependable Engineer for your team, please{" "}
          <FormattedLink href={PagePath.CONNECT} title="Connect With Me">
            reach out
          </FormattedLink>
          .
        </div>
        <div className="hidden md:block cade-image-md h-[300px] w-48" />
        <div className="text-white bg-gray-700 pb-2 rounded-md w-[300px] drop-shadow-md border border-gray-500">
          <div className="md:text-lg bg-gray-900 px-3 py-1 rounded-t-md">
            Full-Stack Engineer experienced in:
          </div>
          <ul className="list-disc stencil-font ml-8 mt-2 text-sm md:text-base">
            <li className="pb-2">Software Design</li>
            <li className="pb-2">Microservice Architecture</li>
            <li className="pb-2">Creating Data-driven Websites</li>
            <li className="pb-2">3rd Party Integrations</li>
            <li className="pb-2">E-Commerce Solutions</li>
            <li className="pb-2">Teaching & Mentoring</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WelcomeContent;
