import AppShortcutIcon from "@mui/icons-material/AppShortcut";
import WebIcon from "@mui/icons-material/Web";
import BadgeIcon from "@mui/icons-material/Badge";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";

interface ProjectItemProps {
  type:
    | "mobile-game"
    | "website"
    | "employment"
    | "npm"
    | "desktop-game"
    | "travel"
    | "change";
  title: string;
  children: string | React.ReactNode;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ type, title, children }) => {
  const getIcon = (): React.ReactNode => {
    switch (type) {
      case "mobile-game":
        return <AppShortcutIcon />;
      case "website":
        return <WebIcon />;
      case "employment":
        return <BadgeIcon />;
      case "npm":
        return <Inventory2Icon />;
      case "desktop-game":
        return <SportsEsportsIcon />;
      case "travel":
        return <ConnectingAirportsIcon />;
      case "change":
        return <PublishedWithChangesIcon />;
    }
  };
  const getText = (): string => {
    switch (type) {
      case "mobile-game":
        return "mobile game";
      case "website":
        return "website";
      case "employment":
        return "career";
      case "npm":
        return "code package";
      case "desktop-game":
        return "desktop game";
      case "travel":
        return "travel";
      case "change":
        return "new paradigm";
    }
  };
  return (
    <li className="mb-2">
      <div className="flex flex-row items-end space-x-2">
        {getIcon()}
        <div className="flex flex-row items-baseline space-x-4">
          <div className="font-bold stencil-font text-sm uppercase w-28">
            {getText()}
          </div>
          <div className="text-2xl italic">{title}</div>
        </div>
      </div>
      <div className="mx-4 mt-1">{children}</div>
    </li>
  );
};

export default ProjectItem;
