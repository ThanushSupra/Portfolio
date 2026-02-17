import FadeSection from '../ui/FadeSection';
import ScrollFloat from '../ui/ScrollFloat';
import { SECTION_HEADING_FLOAT } from '../../config/animation';

const About = () => (
  <FadeSection id="about" aria-label="About">
    <ScrollFloat {...SECTION_HEADING_FLOAT}>About</ScrollFloat>

    <div className="mt-6 space-y-4 text-xl leading-relaxed text-gray-400 tracking-wide">
      <p>
        Previously at <span className="text-gray-100">Weve</span> as a
        Software Engineering Intern. Currently exploring{' '}
        <span className="text-gray-100">machine learning and AI</span>, and
        sharpening full&#8209;stack and Python skills.
      </p>
      <p>
        Outside of tech, I&apos;m heavily in the gym, playing soccer, and
        discovering new music.
      </p>
    </div>
  </FadeSection>
);

export default About;
