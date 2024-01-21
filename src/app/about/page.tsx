import Headline from "@/components/content/common/headline";
import ScrollingTimeline from "@/components/content/common/scrolling-timeline";

const AboutPage: React.FC = () => {
  return (
    <div className="w-full h-full bg-cade-blue-dark/20 flex">
      <div className="mt-8 xl:mt-20 w-full h-full">
        <div className="w-full h-full flex flex-col space-y-10">
          <Headline className="text-cade-blue-dark font-semibold text-3xl xl:text-5xl text-center">
            More About Me
          </Headline>
          <ScrollingTimeline />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
