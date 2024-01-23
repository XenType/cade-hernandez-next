import Headline from "../common/headline";

interface AboutMeStoryCardProps {
  title: string;
  className: string;
  children: React.ReactNode;
}

const AboutMeStoryCard: React.FC<AboutMeStoryCardProps> = ({
  title,
  className,
  children,
}) => {
  return (
    <div
      className={`${className} sticky top-0 flex flex-col items-center justify-center min-h-screen w-full snap-start`}
    >
      <div className="flex flex-col items-center justify-center h-full w-full bg-white/50">
        <div className="flex flex-col -space-y-2 -mt-32 mx-4 md:mx-32 max-w-[1000px]">
          <Headline className="text-3xl xl:text-4xl ml-6 z-10 text-white drop-shadow font-semibold">
            {title}
          </Headline>
          <div className="flex flex-col bg-white/60 py-4 xl:py-8 px-2 md:px-6 xl:px-12 rounded-lg shadow-lg shadow-black/50 xl:text-xl text-justify font-semibold text-gray-700">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeStoryCard;
