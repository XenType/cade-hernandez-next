import Link from "next/link";

interface FormattedLinkProps {
  href: string;
  title: string;
  children: string;
  newTab?: boolean;
}

const FormattedLink: React.FC<FormattedLinkProps> = ({
  href,
  title,
  children,
  newTab = false,
}) => {
  const target = newTab ? "_blank" : "_self";
  return (
    <Link
      href={href}
      target={target}
      title={title}
      className="underline text-blue-700 hover:text-amber-700"
    >
      {children}
    </Link>
  );
};

export default FormattedLink;
