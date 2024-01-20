import { PagePath } from "@/components/enum";
import CardLayoutHome from "./card-layout-home";
import Indentation from "../common/indentation";

const IntroConnect: React.FC = () => {
  return (
    <CardLayoutHome
      imageClass="connect-background"
      title="Connect"
      path={PagePath.CONNECT}
    >
      <div className="flex flex-col space-y-4">
        <div>
          <Indentation />
          Looking for a freelance developer? Full-time software engineer or
          manager? Have a question about Artificial intelligence or want to
          collaborate on a project?
        </div>
        <div>
          <Indentation />
          <span className="font-bold text-gray-700">
            Click EXPLORE for a list of different ways we can connect.
          </span>
        </div>
      </div>
    </CardLayoutHome>
  );
};

export default IntroConnect;
