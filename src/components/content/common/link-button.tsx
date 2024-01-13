import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { HTMLAttributeAnchorTarget } from "react";

interface LinkButtonProps {
  children: React.ReactNode;
  href: string;
  target?: HTMLAttributeAnchorTarget;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  children,
  href,
  target = "_self",
}) => {
  return (
    <Link
      href={href}
      target={target}
      className="px-4 py-2 border-[1px] border-cade-blue-light rounded-md m-auto shadow-md hover:shadow-lg bg-white/60"
    >
      <div className="flex flex-row space-x-2 text-cade-blue-dark">
        <div>{children}</div>
        {target === "_self" ? <ArrowForwardIcon /> : <ArrowOutwardIcon />}
      </div>
    </Link>
  );
};

export default LinkButton;
