import { experiences } from '../../data/experience';
import FadeSection from '../ui/FadeSection';
import ScrollFloat from '../ui/ScrollFloat';
import { SECTION_HEADING_FLOAT } from '../../config/animation';

const Experience = () => (
  <FadeSection id="experience" aria-label="Experience">
    <ScrollFloat {...SECTION_HEADING_FLOAT}>Experience</ScrollFloat>

    <div className="mt-5 divide-y divide-gray-800/60">
      {experiences.map((e, i) => (
        <article key={i} className="py-6 first:pt-0">
          <div className="flex items-baseline justify-between gap-5">
            <h4 className="text-2xl text-white">
              {e.position}{' '}
              <span className="text-gray-500">@ {e.company}</span>
            </h4>
            <span className="text-base text-gray-600 shrink-0">{e.duration}</span>
          </div>

          <p className="text-base text-gray-500 mt-1.5">
            {e.location} · {e.techstack}
          </p>

          <ul className="text-lg text-gray-400 mt-3 space-y-1.5 list-disc pl-5">
            {e.description.map((item, k) => (
              <li key={k}>{item}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </FadeSection>
);

export default Experience;
