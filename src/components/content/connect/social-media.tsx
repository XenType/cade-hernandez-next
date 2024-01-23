import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
import Headline from "../common/headline";

const ConnectSocialMedia: React.FC = () => {
  return (
    <div
      id="social"
      className="flex flex-col items-center justify-center min-h-[250px] md:w-[500px]"
    >
      <Link
        href="https://www.linkedin.com/in/c-cade-hernandez/"
        target="_blank"
        className="w-[400px]"
      >
        <div className="flex flex-col md:flex-row md:space-x-8 justify-center items-center w-full">
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
        <div className="flex flex-col md:flex-row md:space-x-8 justify-center items-center w-full">
          <InstagramIcon className="text-8xl text-white/60" />
          <div className="flex grow">
            <Headline className="text-2xl text-white/60 font-semibold">
              /c_cade_hernandez/
            </Headline>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ConnectSocialMedia;
