import MainMenu from "../main-menu";

const HeaderRow: React.FC = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full text-center bg-cade-blue-med text-white h-4 md:h-8 text-sm z-10 flex flex-col justify-center" />
      <MainMenu />
    </div>
  );
};

export default HeaderRow;
