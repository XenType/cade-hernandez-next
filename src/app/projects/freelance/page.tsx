import Headline from "@/components/content/common/headline";
import VerticalSlideshow from "@/components/content/common/vertical-slideshow";
import CourtWebsite from "@/components/content/projects/freelance/court-website";
import GlactWebsite from "@/components/content/projects/freelance/glact-website";
import JenethWebinars from "@/components/content/projects/freelance/jeneth-webinars";
import JenethWebsite from "@/components/content/projects/freelance/jeneth-website";
import KmcbWebsite from "@/components/content/projects/freelance/kmcb-website";
import ZocaWebsite from "@/components/content/projects/freelance/zoca-website";

const FreelanceProjectsPage: React.FC = () => {
  return (
    <div className="w-full h-full bg-cade-blue-dark flex flex-col px-16">
      <div className="flex flex-col m-auto mt-20 space-y-14">
        <Headline className="text-center text-6xl text-white">
          Freelance Projects
        </Headline>
        <VerticalSlideshow
          slides={[
            <GlactWebsite />,
            <CourtWebsite />,
            <KmcbWebsite />,
            <JenethWebsite />,
            <JenethWebinars />,
            <ZocaWebsite />,
          ]}
        />
      </div>
    </div>
  );
};

export default FreelanceProjectsPage;
