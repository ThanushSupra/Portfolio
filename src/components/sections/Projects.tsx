import { projects } from '../../data/projects';
import FadeSection from '../ui/FadeSection';
import ScrollFloat from '../ui/ScrollFloat';
import DisclosureCard from '../ui/DisclosureCard';
import { SECTION_HEADING_FLOAT } from '../../config/animation';

const Projects = () => (
  <FadeSection id="projects" aria-label="Projects">
    <ScrollFloat {...SECTION_HEADING_FLOAT}>Projects</ScrollFloat>

    <div className="mt-6 space-y-10">
      {projects.map((p, i) => (
        <article key={i}>
          <DisclosureCard
            title={
              <h4 className="text-2xl text-white tracking-wide">
                {p.link ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300 transition-colors duration-200"
                  >
                    {p.name}
                    <span className="ml-1.5 text-gray-600 text-lg">
                      &#8599;
                    </span>
                  </a>
                ) : (
                  p.name
                )}
              </h4>
            }
          >
            <p className="text-lg text-gray-500">{p.time}</p>
            <p className="text-lg text-gray-500">
              Tech Stack: {p.techstack}
            </p>

            <ul className="mt-4 space-y-2.5 list-disc pl-5">
              {p.description.map((item, k) => (
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

export default Projects;
