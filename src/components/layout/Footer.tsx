import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import FadeSection from '../ui/FadeSection';

const RESUME_URL = '/ThanushSupramaniamFinalResume.pdf';

const ICON_SIZE = 22;

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/ThanushSupra',
    icon: <FaGithub size={ICON_SIZE} />,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/tsupra',
    icon: <FaLinkedinIn size={ICON_SIZE} />,
  },
  {
    label: 'Email',
    href: 'mailto:s.thanushkanth11@gmail.com',
    icon: <FaEnvelope size={ICON_SIZE} />,
  },
];

const Footer = () => (
  <FadeSection as="footer" id="footer" aria-label="Footer">
    <div className="flex items-center justify-center">
      <a
        href={RESUME_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full px-8 py-3 bg-white/[0.05] text-gray-300 text-2xl
                   ring-1 ring-white/[0.1] transition-all duration-300 cursor-pointer
                   hover:bg-white/[0.1] hover:text-white hover:ring-white/[0.15] hover:scale-[1.03]"
      >
        View Resume
      </a>
    </div>

    <hr className="my-8 border-white/[0.06]" />

    <div className="pb-8 text-gray-400 text-center flex justify-center gap-4">
      {SOCIAL_LINKS.map(({ label, href, icon }) => (
        <a
          key={label}
          aria-label={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-white/[0.04] ring-1 ring-white/[0.08]
                     transition-all duration-300 hover:bg-white/[0.08] hover:text-white hover:scale-110"
        >
          {icon}
        </a>
      ))}
    </div>

    <p className="text-gray-600 text-lg text-center">
      Still a work in progress — bear with me :)
    </p>
  </FadeSection>
);

export default Footer;
