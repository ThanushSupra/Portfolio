import { projects } from '../../data/projects';
import FadeSection from '../ui/FadeSection';
import ScrollFloat from '../ui/ScrollFloat';
import { SECTION_HEADING_FLOAT } from '../../config/animation';

const Projects = () => (
  <FadeSection id="projects" aria-label="Projects">
    <ScrollFloat {...SECTION_HEADING_FLOAT}>Projects</ScrollFloat>

    <div className="mt-5 divide-y divide-gray-800/60">
      {projects.map((p, i) => (
        <article key={i} className="py-6 first:pt-0">
          <div className="flex items-baseline justify-between gap-5">
            <h4 className="text-2xl text-white">
              {p.link ? (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors duration-200"
                >
                  {p.name}
                  <span className="ml-1.5 text-gray-600 text-lg">↗</span>
                </a>
              ) : (
                p.name
              )}
            </h4>
            <span className="text-base text-gray-600 shrink-0">{p.time}</span>
          </div>

          <p className="text-base text-gray-500 mt-1.5">{p.techstack}</p>

          <details className="mt-3 group">
            <summary className="text-base text-gray-500 cursor-pointer select-none hover:text-gray-400 transition-colors duration-200 list-none flex items-center gap-2">
              Details
              <span className="text-sm transition-transform duration-200 group-open:rotate-90">
                ▸
              </span>
            </summary>
            <ul className="text-lg text-gray-400 mt-2.5 space-y-1.5 list-disc pl-5">
              {p.description.map((item, k) => (
                <li key={k}>{item}</li>
              ))}
            </ul>
          </details>
        </article>
      ))}
    </div>
  </FadeSection>
);

export default Projects;
