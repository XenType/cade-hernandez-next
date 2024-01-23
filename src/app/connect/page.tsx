import Headline from "@/components/content/common/headline";
import ConnectCellPhone from "@/components/content/connect/call-me";
import ConnectSendEmail from "@/components/content/connect/send-email";
import ConnectSocialMedia from "@/components/content/connect/social-media";
import StripedSeparator from "@/components/content/connect/striped-separator";
import Link from "next/link";

const ConnectContent: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center bg-cade-blue-dark/40 h-full w-full pt-20 space-y-12">
      <div>
        <Headline className="text-2xl md:text-4xl text-cade-blue-dark">
          I would love to hear from{" "}
          <span className="underline decoration-cade-blue-med">you!</span>
        </Headline>
      </div>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 justify-center max-w-[1000px] m-auto text-center text-sm md:text-xl text-white font-semibold">
        <Link className="md:min-w-[300px]" href="#email">
          Send Me an Email
        </Link>
        <Link className="md:min-w-[300px]" href="#phone">
          Give Me a Call
        </Link>
        <Link className="md:min-w-[300px]" href="#social">
          Find Me on Social Media
        </Link>
      </div>
      <div className="flex flex-col h-[250px] w-[400px] md:w-[500px] overflow-hidden scroll-smooth">
        <ConnectSendEmail />
        <StripedSeparator />
        <ConnectCellPhone />
        <StripedSeparator />
        <ConnectSocialMedia />
      </div>
    </div>
  );
};

export default ConnectContent;
