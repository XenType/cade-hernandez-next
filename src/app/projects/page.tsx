import Headline from "@/components/content/common/headline";
import Indentation from "@/components/content/common/indentation";
import LinkButton from "@/components/content/common/link-button";
import { PagePath } from "@/components/enum";
import { Anybody } from "next/font/google";

const anybody = Anybody({ subsets: ["latin"] });

const ProjectsPage: React.FC = () => {
  return (
    <div className="w-full h-full bg-cade-blue-dark flex px-16">
      <div className="m-auto mt-20 w-full max-w-[1000px] p-4">
        <div className="w-full h-full flex flex-col space-y-10">
          <Headline className="text-white font-semibold text-5xl text-center">
            Discover Projects by Category
          </Headline>
          <div className="w-full flex flex-row justify-between border-2 border-cade-blue-lite p-4 rounded-xl shadow-md shadow-cade-blue-lite">
            <div className="text-white max-w-[600px]">
              <Indentation spaces={2} /> As a full-time developer, I've worked
              on a wide variety of e-commerce related projects. From early
              online check processing to platform-level payment integrations,
              check out some of the interesting software I've helped create.
            </div>
            <div className="flex">
              <LinkButton href={PagePath.PROJ_CAREER}>
                Career Projects
              </LinkButton>
            </div>
          </div>
          <div className="w-full flex flex-row justify-between border-2 border-cade-blue-lite p-4 rounded-xl shadow-md shadow-cade-blue-lite">
            <div className="text-white max-w-[600px]">
              <Indentation spaces={2} />
              While a good deal less complex, I've enjoyed many of my freelance
              projects because they allow for a bit more creativity and freedom.
            </div>
            <div className="flex">
              <LinkButton href={PagePath.PROJ_FREELANCE}>
                Freelance Projects
              </LinkButton>
            </div>
          </div>
          <div className="w-full flex flex-row justify-between border-2 border-cade-blue-lite p-4 rounded-xl shadow-md shadow-cade-blue-lite">
            <div className="text-white max-w-[600px]">
              <Indentation spaces={2} />
              Some longer text on this side. It might wrap or might not. Some
              longer text on this side. It might wrap or might not.
            </div>
            <div className="flex">
              <LinkButton href={PagePath.PROJ_PERSONAL}>
                Personal Projects
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
