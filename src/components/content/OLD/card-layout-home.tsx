import Link from "next/link";

interface CardLayoutHomeProps {
  title: string;
  path: string;
  imageClass: string;
  children: React.ReactNode;
}

const CardLayoutHome: React.FC<CardLayoutHomeProps> = ({
  title,
  path,
  imageClass,
  children,
}: CardLayoutHomeProps) => {
  return (
    <div className="flex flex-row w-full overflow-hidden justify-between">
      <div className="flex flex-col justify-center p-10 space-y-8 w-full">
        <div className="text-3xl font-bold text-blue-800">{title}</div>
        <div>
          <Link
            href={path}
            className="bg-blue-800 text-white py-4 px-8 rounded-2xl"
          >
            Explore
          </Link>
        </div>
        {children}
      </div>
      <div className={`${imageClass} w-[400px] h-[500px] xl:h-[600px]`}></div>
    </div>
  );
};

export default CardLayoutHome;
