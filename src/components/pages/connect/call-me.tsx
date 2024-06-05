import Link from "next/link";
import MobileScreenShareIcon from "@mui/icons-material/MobileScreenShare";

const ConnectCellPhone: React.FC = () => {
  return (
    <div
      id="phone"
      className="flex flex-col items-center justify-center min-h-[175px] w-full
      rounded-lg border border-accent-gray-light bg-accent-blue-light/10 shadow-sm shadow-black/30
      hover:shadow-none hover:bg-accent-blue-light/20 cursor-pointer"
    >
      <Link href="tel:415-481-8765" target="_blank" className="w-full">
        <div className="flex flex-col justify-center items-center w-full text-accent-blue-dark">
          <div className="text-6xl">
            <MobileScreenShareIcon fontSize="inherit" />
          </div>
          <div className="text-2xl font-semibold">415.481.8765</div>
          <div className="text-base font-medium">(click to call)</div>
        </div>
      </Link>
    </div>
  );
};

export default ConnectCellPhone;
