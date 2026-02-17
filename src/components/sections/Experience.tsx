import { experiences } from '../../data/experience';
import FadeSection from '../ui/FadeSection';
import ScrollFloat from '../ui/ScrollFloat';
import DisclosureCard from '../ui/DisclosureCard';
import { SECTION_HEADING_FLOAT } from '../../config/animation';

const Experience = () => (
  <FadeSection id="experience" aria-label="Experience">
    <ScrollFloat {...SECTION_HEADING_FLOAT}>Experience</ScrollFloat>

    <div className="mt-6 space-y-10">
      {experiences.map((e, i) => (
        <article key={i}>
          <DisclosureCard
            defaultOpen
            title={
              <h4 className="text-2xl text-white tracking-wide">
                {e.position}
                <span className="text-gray-500"> @ {e.company}</span>
              </h4>
            }
          >
            <p className="text-lg text-gray-500">
              {e.duration} &middot; {e.location}
            </p>
            <p className="text-lg text-gray-500">
              Tech Stack: {e.techstack}
            </p>

            <ul className="mt-4 space-y-2.5 list-disc pl-5">
              {e.description.map((item, k) => (
                <li
                  key={k}
                  className="text-lg text-gray-400 leading-relaxed tracking-wide"
                >
                  {item}
                </li>
              ))}
            </ul>
          </DisclosureCard>
        </article>
      ))}
    </div>
  </FadeSection>
);

export default Experience;
