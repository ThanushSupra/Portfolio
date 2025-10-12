const profilePhoto = new URL('../../assets/ProfilePhoto.JPG', import.meta.url).href;

const Header = () => {
  return (
    <header>
      <div className='flex items-center gap-6'>
        <div>
          <h1 className="text-5xl text-white">
            Hey, I'm Thanush Supramaniam!
          </h1>
          <h2 className="text-4xl text-gray-400">
              Software Engineer Specializing in AI & ML
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
