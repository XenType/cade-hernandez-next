import ByEmail from "@/components/content/connect/by-email";
import ByPhone from "@/components/content/connect/by-phone";
import BySocial from "@/components/content/connect/by-social";
import Zoca from "@/components/content/connect/zoca";

const ConnectContent: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-col items-center md:mt-20 md:mb-28">
        <div className="text-3xl md:text-5xl">I'd Love to Hear From You</div>
        <div className="text-xs text-center md:text-lg">
          Want to collaborate, see my work, hire me or even just ask a question?
        </div>
      </div>
      <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 w-full md:space-x-4 md:px-4 justify-center bg-neutral-400/40 py-6 px-2 rounded-sm drop-shadow-lg">
        <ByEmail />
        <ByPhone />
        <BySocial />
        <Zoca />
      </div>
    </div>
  );
};

export default ConnectContent;
