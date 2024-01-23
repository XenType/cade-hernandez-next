import { ChangeEvent, ChangeEventHandler } from "react";
import CloseIcon from "@mui/icons-material/Close";

interface ResumeFilterControlProps {
  filterValue: string;
  onChange: (filterValue: string) => void;
}

const ResumeFilterControl: React.FC<ResumeFilterControlProps> = ({
  filterValue,
  onChange,
}) => {
  const handleFilterInput: ChangeEventHandler<HTMLInputElement> = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    onChange(event.target.value);
  };
  return (
    <div className="flex flex-col items-end space-y-2">
      <div className="bg-cade-blue-dark rounded-2xl text-sm w-40 pl-4 h-6 flex flex-col justify-center italic text-gray-700 mr-4">
        <div className="flex flex-row">
          <input
            type="text"
            placeholder="Filter Skills"
            value={filterValue}
            className="w-[125px] outline-none bg-transparent text-white"
            onChange={handleFilterInput}
          />
          <div
            className="cursor-pointer text-white hover:text-red-400"
            onClick={() => {
              onChange("");
            }}
          >
            <CloseIcon className="text-sm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeFilterControl;
export type { ResumeFilterControlProps };
