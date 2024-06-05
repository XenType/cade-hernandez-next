interface SubMenuItemProps {
  title: string;
  isSelected: boolean;
  onClick: () => void;
}

const SubMenuItem: React.FC<SubMenuItemProps> = ({
  title,
  isSelected,
  onClick,
}) => {
  //
  return (
    <div
      className={`uppercase cursor-pointer ${
        isSelected ? "text-accent-blue-dark" : "text-fill-gray-dark"
      }`}
      onClick={onClick}
    >
      {title}
    </div>
  );
};

export default SubMenuItem;
