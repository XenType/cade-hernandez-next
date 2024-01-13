interface StackCardProps {
  title: string;
  children: React.ReactNode;
  position?: number;
}

const StackCard: React.FC<StackCardProps> = ({
  title,
  children,
  position = 0,
}: StackCardProps) => {
  const tabPadding = 48;
  const cardPaddingTop = tabPadding * position;
  const titleTop = cardPaddingTop + 1;
  const childrenPaddingTop = tabPadding + 10;
  return (
    <li
      className="card sticky top-0 w-full"
      style={{ paddingTop: cardPaddingTop }}
    >
      <div className="md:shadow-xl shadow-md bg-blue-800 min-h-[540px] xl:min-h-[640px] overflow-hidden flex flex-col justify-center">
        <div
          className="absolute w-full text-center font-bold text-5xl uppercase text-gray-700 px-2"
          style={{ top: titleTop }}
        >
          <div className="border-b-2 border-gray-300 text-gray-200">
            {title}
          </div>
        </div>
        <div style={{ paddingTop: childrenPaddingTop }} className="-mt-2">
          {children}
        </div>
      </div>
    </li>
  );
};

export default StackCard;
export type { StackCardProps };
