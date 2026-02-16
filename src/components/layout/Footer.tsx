import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import FadeSection from '../ui/FadeSection';

const RESUME_URL = '/ThanushSupramaniamFinalResume.pdf';

const ICON_SIZE = 44;

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/ThanushSupra',
    icon: <GitHubIcon sx={{ fontSize: ICON_SIZE }} />,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/tsupra',
    icon: <LinkedInIcon sx={{ fontSize: ICON_SIZE }} />,
  },
  {
    label: 'Email',
    href: 'mailto:s.thanushkanth11@gmail.com',
    icon: <EmailIcon sx={{ fontSize: ICON_SIZE }} />,
  },
];

const Footer = () => (
  <FadeSection as="footer" id="footer" aria-label="Footer">
    <div className="flex items-center justify-center">
      <a
        href={RESUME_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full px-6 py-3 bg-gray-900 text-gray-400 text-3xl
                   shadow-2xl ring-1 ring-gray-700 transition duration-300 cursor-pointer
                   hover:bg-gray-800 hover:text-white hover:ring-gray-600 hover:scale-[1.05]"
      >
        View Resume
      </a>
    </div>

    <hr className="my-6 dark:border-gray-700" />

    <div className="pb-8 text-white text-2xl text-center flex justify-center gap-6">
      {SOCIAL_LINKS.map(({ label, href, icon }) => (
        <a
          key={label}
          aria-label={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="transition duration-300 hover:scale-[1.1]"
        >
          {icon}
        </a>
      ))}
    </div>

    <p className="text-gray-500 text-lg text-center">
      Still a work in progress — bear with me :)
    </p>
  </FadeSection>
);

export default Footer;
