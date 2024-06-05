import CopyrightIcon from "@mui/icons-material/Copyright";

interface MainFooterProps {
  //
}

const MainFooter: React.FC<MainFooterProps> = ({}) => {
  //
  return (
    <div className="flex flex-row justify-end items-center space-x-1 w-full text-xs font-medium pr-1 text-gray-400">
      <div className="text-sm">
        <CopyrightIcon fontSize="inherit" />
      </div>
      <div className="pt-1">2024 Cade Hernandez</div>
    </div>
  );
};

export default MainFooter;
