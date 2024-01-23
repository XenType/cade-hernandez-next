import AboutMeSanFranciscoStory from "@/components/content/about/san-francisco-story";
import AboutMeOriginStory from "@/components/content/about/origins-story";
import AboutMeWacoAustinStory from "@/components/content/about/waco-austin-story";
import Headline from "@/components/content/common/headline";
import AboutMeLosAngelesStory from "@/components/content/about/los-angeles-story";

const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full h-full overflow-y-auto smooth snap-y snap-mandatory">
      <div className="sticky top-0 flex flex-col items-center justify-center space-y-10 min-h-screen w-full snap-start">
        <Headline className="text-4xl text-cade-blue-dark -mt-28">
          <span className="underline decoration-cade-blue-med">More</span> About
          Me
        </Headline>
        <div className=" py-2 px-4 text-justify font-semibold text-lg text-gray-700">
          For more about my personal journey through life, just scroll down!
        </div>
      </div>
      <AboutMeOriginStory />
      <AboutMeWacoAustinStory />
      <AboutMeSanFranciscoStory />
      <AboutMeLosAngelesStory />
    </div>
  );
};

export default AboutPage;
