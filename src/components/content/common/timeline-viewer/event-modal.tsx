import CloseIcon from "@mui/icons-material/Close";

interface EventModalProps {
  currentComponent: React.ReactNode;
  onCloseClick: () => void;
}

const EventModal: React.FC<EventModalProps> = ({
  currentComponent,
  onCloseClick,
}) => {
  const handleCloseClick = (): void => {
    onCloseClick();
  };
  return (
    <div
      className={`absolute z-10 w-full h-full flex flex-col justify-center items-center ${
        !currentComponent ? "hidden" : ""
      } bg-white/50 left-0 top-0`}
    >
      <div className="flex flex-col w-[500px] bg-white rounded-md border border-cade-blue-dark shadow-lg shadow-cade-blue-dark/50">
        <div
          className="flex flex-row justify-end p-2 cursor-pointer bg-cade-blue-dark/70"
          onClick={() => handleCloseClick()}
        >
          <CloseIcon className="text-sm hover:text-red-800" />
        </div>
        <div className="p-2 w-full flex flex-row items-center justify-center">
          {currentComponent}
        </div>
      </div>
    </div>
  );
};

export default EventModal;
