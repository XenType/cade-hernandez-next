import Link from "next/link";
import Headline from "../common/headline";
import EmailIcon from "@mui/icons-material/Email";

const ConnectSendEmail: React.FC = () => {
  return (
    <div
      id="email"
      className="flex flex-col items-center justify-center min-h-[250px] md:w-[500px]"
    >
      <Link
        href="mailto:info@cade.hernandez.com"
        target="_blank"
        className="w-full"
      >
        <div className="flex flex-col md:flex-row md:space-x-8 justify-center items-center w-full">
          <EmailIcon className="text-9xl text-white/60" fontSize="inherit" />
          <div>
            <Headline className="text-2xl text-white/60 font-semibold">
              info@cade.hernandez.com
            </Headline>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ConnectSendEmail;
