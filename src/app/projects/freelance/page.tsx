import Headline from "@/components/content/common/headline";
import VerticalSlideshow from "@/components/content/common/vertical-slideshow";
import CourtWebsite from "@/components/content/projects/freelance/court-website";
import DagarsInventory from "@/components/content/projects/freelance/dagars-inventory";
import GlactWebsite from "@/components/content/projects/freelance/glact-website";
import FreelanceIntro from "@/components/content/projects/freelance/intro";
import JenethWebinars from "@/components/content/projects/freelance/jeneth-webinars";
import JenethWebsite from "@/components/content/projects/freelance/jeneth-website";
import KmcbWebsite from "@/components/content/projects/freelance/kmcb-website";
import ThisWebsite from "@/components/content/projects/freelance/this-website";
import ZocaWebsite from "@/components/content/projects/freelance/zoca-website";

const FreelanceProjectsPage: React.FC = () => {
  return (
    <div className="w-full h-full bg-cade-blue-dark flex flex-col px-4 md:px-16">
      <div className="flex flex-col w-full h-full mt-4 xl:mt-20 space-y-2 xl:space-y-14">
        <Headline className="text-center text-2xl xl:text-6xl text-white">
          Freelance Projects
        </Headline>
        <div className="flex h-full grow overflow-hidden">
          <VerticalSlideshow
            slides={[
              <FreelanceIntro key="intro" />,
              <ThisWebsite key="this" />,
              <GlactWebsite key="glact" />,
              <CourtWebsite key="court" />,
              <KmcbWebsite key="kmcb" />,
              <JenethWebsite key="website" />,
              <JenethWebinars key="webinar" />,
              <DagarsInventory key="dagars" />,
              <ZocaWebsite key="zoca" />,
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default FreelanceProjectsPage;
