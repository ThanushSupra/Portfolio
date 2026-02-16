import FadeSection from '../ui/FadeSection';
import ScrollFloat from '../ui/ScrollFloat';
import { SECTION_HEADING_FLOAT } from '../../config/animation';

const About = () => (
  <FadeSection id="about" aria-label="About">
    <ScrollFloat {...SECTION_HEADING_FLOAT}>About</ScrollFloat>

    <div className="mt-4 text-lg text-gray-400 leading-relaxed space-y-3">
      <p>
        Previously at Weve as a Software Engineering Intern. Currently
        exploring machine learning and AI, and sharpening full‑stack and
        Python skills.
      </p>
      <p>
        Outside of tech, I&apos;m heavily in the gym, playing soccer, and discovering
        new music.
      </p>
    </div>
  </FadeSection>
);

export default About;
