import Link from "next/link";
import Headline from "../common/headline";
import MobileScreenShareIcon from "@mui/icons-material/MobileScreenShare";

const ConnectCellPhone: React.FC = () => {
  return (
    <div
      id="phone"
      className="flex flex-col items-center justify-center min-h-[250px] md:w-[500px]"
    >
      <Link href="tel:415-481-8765" target="_blank" className="w-full">
        <div className="flex flex-col md:flex-row md:space-x-8 justify-center items-center w-full">
          <MobileScreenShareIcon className="text-9xl text-white/60" />
          <div>
            <Headline className="text-4xl text-white/60 font-semibold">
              415.481.8765
            </Headline>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ConnectCellPhone;
