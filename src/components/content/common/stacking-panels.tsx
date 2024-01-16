interface StackingPanel {
  title: string;
  content: React.ReactNode;
}

interface StackingPanelsProps {
  panels: StackingPanel[];
}

const StackingPanels: React.FC<StackingPanelsProps> = ({ panels }) => {
  return (
    <ul className="list-none w-full flex flex-col space-y-40">
      {panels.map(({ title, content }, index) => (
        <li
          className="w-full min-h-[450px] shadow-lg shadow-cade-blue-dark bg-cade-blue-med box-shadow sticky"
          key={title}
          style={{ top: index * 56 }}
        >
          <div className="w-full h-full py-4 shadow-[0_-5px_10px_-5px_rgba(0,0,0,0.5)] flex flex-row justify-center">
            <div className="flex h-full flex-col space-y-4 w-full">
              <div className="text-white text-2xl font-bold text-center">
                {title}
              </div>
              <div className="h-full grow">{content}</div>
            </div>
          </div>
        </li>
      ))}
      <li className="h-screen"></li>
    </ul>
  );
};

export default StackingPanels;
