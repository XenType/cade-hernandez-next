import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';

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
            href="https://www.linkedin.com/in/cade-hernandez-9a9572264"
          >
            <LinkedInIcon
              className="text-amber-600 hover:text-blue-700 hover:cursor-pointer"
              fontSize="inherit"
            />
          </a>
        </div>
        <div className="text-xl pb-1">
          <a title="GitHub" target="_blank" href="https://github.com/XenType">
            <GitHubIcon
              className="text-amber-600 hover:text-blue-700 hover:cursor-pointer"
              fontSize="inherit"
            />
          </a>
        </div>
        <div className="text-xl pb-1">
          <a title="Resume" target="_blank" href="docs/resume2.pdf">
            <ArticleIcon
              className="text-amber-600 hover:text-blue-700 hover:cursor-pointer"
              fontSize="inherit"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterRow;
