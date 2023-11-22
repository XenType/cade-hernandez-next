import MainMenu from "./main-menu";

const HeaderRow: React.FC = () => {
  return (
    <div className="fixed flex flex-row md:px-10 bg-white w-full h-10 md:h-[36px] mt-[22px] md:mt-[20px] z-10">
      <div className="header-logo fixed w-[125px] h-[45px] right-[8px] top-[5px] md:w-[250px] md:h-[90px] md:left-4 md:top-[-13px]" />
      <MainMenu />
    </div>
  );
};

export default HeaderRow;
