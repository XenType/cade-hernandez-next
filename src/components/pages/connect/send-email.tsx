import Link from "next/link";
import EmailIcon from "@mui/icons-material/Email";

const ConnectSendEmail: React.FC = () => {
  return (
    <div
      id="email"
      className="flex flex-col items-center justify-center min-h-[175px] w-full
      rounded-lg border border-accent-gray-light bg-accent-blue-light/10 shadow-sm shadow-black/30
      hover:shadow-none hover:bg-accent-blue-light/20 cursor-pointer"
    >
      <Link
        href="mailto:info@cadehernandez.com"
        target="_blank"
        className="w-full"
      >
        <div className="flex flex-col justify-center items-center w-full text-accent-blue-dark">
          <div className="text-6xl">
            <EmailIcon fontSize="inherit" />
          </div>
          <div className="text-2xl font-semibold">info@cadehernandez.com</div>
          <div className="text-base font-medium">(click to launch email)</div>
        </div>
      </Link>
    </div>
  );
};

export default ConnectSendEmail;
