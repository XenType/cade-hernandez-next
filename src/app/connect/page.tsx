import Headline from "@/components/content/common/headline";
import Link from "next/link";
import EmailIcon from "@mui/icons-material/Email";
import MobileScreenShareIcon from "@mui/icons-material/MobileScreenShare";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const ConnectContent: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center bg-cade-blue-dark/40 h-full w-full pt-20 space-y-12">
      <div>
        <Headline className="text-4xl text-cade-blue-dark">
          I would love to hear from{" "}
          <span className="underline decoration-cade-blue-med">you!</span>
        </Headline>
      </div>
      <div className="flex flex-row justify-center max-w-[1000px] m-auto text-center text-xl text-white font-semibold">
        <Link className="min-w-[300px]" href="#email">
          Send Me an Email
        </Link>
        <Link className="min-w-[300px]" href="#phone">
          Give Me a Call
        </Link>
        <Link className="min-w-[300px]" href="#social">
          Find Me on Social Media
        </Link>
      </div>
      <div className="flex flex-col h-[250px] w-[500px] overflow-hidden scroll-smooth">
        <div
          id="email"
          className="flex flex-col items-center justify-center min-h-[250px] w-[500px]"
        >
          <Link
            href="mailto:info@cade.hernandez.com"
            target="_blank"
            className="w-full"
          >
            <div className="flex flex-row justify-around items-center w-full">
              <EmailIcon className="text-9xl text-white/60" />
              <div>
                <Headline className="text-2xl text-white/60 font-semibold">
                  info@cade.hernandez.com
                </Headline>
              </div>
            </div>
          </Link>
        </div>
        <div
          id="phone"
          className="flex flex-col items-center justify-center min-h-[250px] w-[500px]"
        >
          <Link href="tel:415-481-8765" target="_blank" className="w-full">
            <div className="flex flex-row justify-around items-center w-full">
              <MobileScreenShareIcon className="text-9xl text-white/60" />
              <div>
                <Headline className="text-4xl text-white/60 font-semibold">
                  415.481.8765
                </Headline>
              </div>
            </div>
          </Link>
        </div>
        <div
          id="social"
          className="flex flex-col items-center justify-center min-h-[250px] w-[500px]"
        >
          <Link
            href="https://www.linkedin.com/in/c-cade-hernandez/"
            target="_blank"
            className="w-[400px]"
          >
            <div className="flex flex-row space-x-4 justify-center items-center w-full">
              <LinkedInIcon className="text-8xl text-white/60" />
              <div className="flex-grow">
                <Headline className="text-2xl text-white/60 font-semibold">
                  in/c-cade-hernandez/
                </Headline>
              </div>
            </div>
          </Link>
          <Link
            href="https://www.instagram.com/c_cade_hernandez/"
            target="_blank"
            className="w-[400px]"
          >
            <div className="flex flex-row space-x-4 justify-center items-center w-full">
              <InstagramIcon className="text-8xl text-white/60" />
              <div className="flex grow">
                <Headline className="text-2xl text-white/60 font-semibold">
                  /c_cade_hernandez/
                </Headline>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConnectContent;
