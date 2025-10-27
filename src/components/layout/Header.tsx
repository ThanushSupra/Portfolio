const profilePhoto = new URL('../../assets/ProfilePhoto.JPG', import.meta.url).href;
import Typist from 'react-typist-component';


import { useInView } from "react-intersection-observer";
const Header = () => {

  const {ref: headerRef, inView} = useInView({ threshold: 0.25, triggerOnce: false});

  // Base transition utility classes: short, subtle, and snappy
  const base = "transition-all duration-300 ease-out";
  // Hidden state: fully transparent and shifted down a bit
  const hidden = "opacity-0 translate-y-4";
  // Visible state: fully opaque and in place
  const shown = "opacity-100 translate-y-0";
  return (
    <header ref = {headerRef} id="header" aria-label="Header"
    
    className={`${base} ${inView ? shown : hidden}`}>
      
      <div className='flex items-center gap-6'>
        <div>
          <h1 className="text-5xl text-white">
            <Typist startDelay={1000} typingDelay={60}>Hey, I'm Thanush Supramaniam!</Typist>
          </h1>
          <h2 className="text-4xl text-gray-400">
              <Typist startDelay={3000} typingDelay={60}  >Software Engineer Specializing in AI & ML</Typist>
          </h2>
        </div>

        <img
          className="ml-auto w-24 h-24 md:w-28 md:h-28 rounded-[50%] object-cover object-center"
          src={profilePhoto}
          alt="Photo of Thanush Supramaniam"
          loading="lazy"
        />
      </div>

      <nav className="mt-4 flex flex-wrap gap-4 text-2xl text-gray-400">
        <a href="#about" className="hover:text-white transition duration-300 hover:scale-[1.1]">About</a>
        <a href="#experience" className="hover:text-white transition duration-300 hover:scale-[1.1]">Experience</a>
        <a href="#projects" className="hover:text-white transition duration-300 hover:scale-[1.1]">Projects</a>
        <a href="#skills" className="hover:text-white transition duration-300 hover:scale-[1.1]">Skills</a>
      </nav>
    </header>
)
}

export default Header
