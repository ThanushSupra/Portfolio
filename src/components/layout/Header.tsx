import TextType from '../ui/TextType';
import FadeSection from '../ui/FadeSection';

const profilePhoto = new URL('../../assets/ProfilePhoto.JPG', import.meta.url).href;

const Header = () => (
  <FadeSection as="header" id="header" aria-label="Header">
    <div className="flex items-center gap-8">
      <div>
        <TextType
          as="h1"
          className="text-7xl text-white"
          text="Hey, I'm Thanush!"
          typingSpeed={60}
          initialDelay={1000}
          showCursor
          cursorCharacter=""
          loop={false}
        />
        <br />
        <TextType
          as="h2"
          className="text-6xl text-gray-400"
          text="Software Engineer"
          typingSpeed={60}
          initialDelay={2200}
          showCursor
          cursorCharacter=""
          loop={false}
        />
        <br />
        <TextType
          as="h2"
          className="text-6xl text-gray-400"
          text="Specializing in AI & ML"
          typingSpeed={60}
          initialDelay={3500}
          showCursor
          cursorCharacter="|"
          loop={false}
        />
      </div>

      <img
        className="ml-auto w-32 h-32 md:w-36 md:h-36 rounded-[50%] object-cover object-center"
        src={profilePhoto}
        alt="Photo of Thanush Supramaniam"
        loading="lazy"
      />
    </div>
  </FadeSection>
);

export default Header;
