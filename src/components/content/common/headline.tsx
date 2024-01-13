import { Anybody } from "next/font/google";

interface HeadlineProps {
  className: string;
  children: React.ReactNode;
}

const anybody = Anybody({ subsets: ["latin"] });

const Headline: React.FC<HeadlineProps> = ({ className, children }) => {
  return <div className={`${className} ${anybody.className}`}>{children}</div>;
};

export default Headline;
