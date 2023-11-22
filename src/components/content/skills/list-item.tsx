/* eslint-disable react/jsx-key */

import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import DeviceHubIcon from "@mui/icons-material/DeviceHub";
import StorageIcon from "@mui/icons-material/Storage";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import TerminalIcon from "@mui/icons-material/Terminal";
import WysiwygIcon from "@mui/icons-material/Wysiwyg";

interface ListItemProps {
  children: string;
}

const ListItem: React.FC<ListItemProps> = ({ children }) => {
  const choose = (choices: Array<any>): number => {
    return Math.floor(Math.random() * choices.length);
  };
  const getColor = (): string => {
    const colors = ["indigo", "cyan", "amber", "lime", "rose"];
    const choice = choose(colors);
    return colors[choice] ?? colors[0];
  };
  const getIcon = (): React.ReactNode => {
    const icons = [
      <DeveloperBoardIcon fontSize="inherit" />,
      <DeviceHubIcon fontSize="inherit" />,
      <StorageIcon fontSize="inherit" />,
      <ImportantDevicesIcon fontSize="inherit" />,
      <KeyboardIcon fontSize="inherit" />,
      <TerminalIcon fontSize="inherit" />,
      <WysiwygIcon fontSize="inherit" />,
    ];
    const choice = choose(icons);
    return icons[choice] ?? icons[0];
  };
  const color = getColor();
  return (
    <div>
      <div className="flex flex-col md:items-center space-y-2 text-sm md:text-lg items-center m-2 md:m-10 w-[165px]">
        <div
          className={`border border-white bg-gradient-to-l to-${color}-900 from-${color}-600 text-white rounded-md py-4 px-2 md:px-6 w-[100px] drop-shadow-md`}
        >
          <div className="text-4xl -mt-2 text-center">{getIcon()}</div>
          <div className="hidden from-indigo-600 from-cyan-600 from-amber-600 from-lime-600 from-rose-600 to-indigo-900 to-cyan-900 to-amber-900 to-lime-900 to-rose-900" />
        </div>
        <code className="font-bold text-center">{`<${children}/>`}</code>
      </div>
    </div>
  );
};

export default ListItem;
