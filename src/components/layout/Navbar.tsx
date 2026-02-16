const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
];

const Navbar = () => (
  <nav className="sticky top-0 z-20 backdrop-blur-md bg-[#0B0D12]/60 border-b border-white/[0.06]">
    <div className="mx-auto max-w-4xl px-8 flex items-center justify-between h-16">
      <a
        href="#header"
        className="text-white text-2xl tracking-wide hover:text-gray-300 transition-colors duration-200"
      >
        TS
      </a>

      <div className="flex items-center gap-8 text-lg text-gray-400 tracking-wide">
        {NAV_LINKS.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="hover:text-white transition-colors duration-200"
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  </nav>
);

export default Navbar;
