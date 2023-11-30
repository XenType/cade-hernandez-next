import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArticleIcon from "@mui/icons-material/Article";
import Link from "next/link";
import { ExternalLinks } from "../constants";
import { ExternalLinkNames } from "../enum";

const FooterRow: React.FC = () => {
  return (
    <div className="fixed flex flex-row justify-between items-center bottom-0 w-full text-center bg-white text-gray-500 p-2 z-10">
      <div className="text-xs text-amber-600">
        Copyright 2023 C. Cade Hernandez
      </div>
      <div className="flex flex-row items-center justify-end space-x-4 w-1/2">
        <div className="text-xl pb-1">
          <a
            title="LinkedIn"
            target="_blank"
            href={ExternalLinks[ExternalLinkNames.LINKEDIN]}
          >
            <LinkedInIcon
              className="text-amber-600 hover:text-blue-700 hover:cursor-pointer"
              fontSize="inherit"
            />
          </a>
        </div>
        <div className="text-xl pb-1">
          <a title="GitHub" target="_blank" href={ExternalLinks[ExternalLinkNames.GITHUB]}>
            <GitHubIcon
              className="text-amber-600 hover:text-blue-700 hover:cursor-pointer"
              fontSize="inherit"
            />
          </a>
        </div>
        <div className="text-xl pb-1">
          <Link
            title="Resume"
            target="_blank"
            href={ExternalLinks[ExternalLinkNames.RESUME]}
          >
            <ArticleIcon
              className="text-amber-600 hover:text-blue-700 hover:cursor-pointer"
              fontSize="inherit"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterRow;
