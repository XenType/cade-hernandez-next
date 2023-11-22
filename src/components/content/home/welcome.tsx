import { PagePath } from "../../enum";
import FormattedLink from "../common/formatted-link";

const WelcomeContent: React.FC = () => {
  return (
    <div className="bg-white/40 rounded-md drop-shadow-lg text-sm md:text-base">
      <div className="flex flex-col md:flex-row p-2 md:p-6 justify-around space-y-4 md:space-y-0 md:space-x-8 items-center">
        <div className="bg-white/70 rounded-md py-2 px-3 md:w-[300px] drop-shadow-md border border-white">
          <span className="text-lg md:text-xl">
            Welcome to my website, friend!
          </span>
          <br />
          <br />I appreciate your interest in me and what I have to offer to
          you, your company and the world. Check out up-to-date lists of
          <span className="font-semibold px-1">
            Experiences, Skills and Projects
          </span>
          on this site!
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
          <div className="text-lg bg-gray-900 px-3 py-1 rounded-t-md">
            Full-Stack Engineer experienced in:
          </div>
          <ul className="list-disc stencil-font ml-8 mt-2 text-sm">
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
