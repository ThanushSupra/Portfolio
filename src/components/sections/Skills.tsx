import FadeSection from '../ui/FadeSection';
import { LogoLoop } from '../ui/LogoLoop';
import { skillsRow1, skillsRow2 } from '../../data/skills';
import ScrollFloat from '../ui/ScrollFloat';
import { SECTION_HEADING_FLOAT } from '../../config/animation';

const SHARED_LOOP_PROPS = {
  logoHeight: 70,
  gap: 64,
  pauseOnHover: true,
  scaleOnHover: true,
  fadeOut: true,
  fadeOutColor: '#0B0D12',
} as const;

const Skills = () => (
  <FadeSection id="skills" aria-label="Skills">
    <ScrollFloat {...SECTION_HEADING_FLOAT}>Skills</ScrollFloat>

    <div className="mt-5 space-y-5">
      <LogoLoop
        {...SHARED_LOOP_PROPS}
        logos={skillsRow1}
        speed={25}
        direction="left"
        ariaLabel="Technical skills row 1"
      />
      <LogoLoop
        {...SHARED_LOOP_PROPS}
        logos={skillsRow2}
        speed={25}
        direction="right"
        ariaLabel="Technical skills row 2"
      />
    </div>
  </FadeSection>
);

export default Skills;
