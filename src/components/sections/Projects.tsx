import { projects } from '../../data/projects';
import FadeSection from '../ui/FadeSection';
import ScrollFloat from '../ui/ScrollFloat';
import { SECTION_HEADING_FLOAT } from '../../config/animation';

const Projects = () => (
  <FadeSection id="projects" aria-label="Projects">
    <ScrollFloat {...SECTION_HEADING_FLOAT}>Projects</ScrollFloat>

    <div className="mt-6 space-y-10">
      {projects.map((p, i) => (
        <article key={i}>
          <details className="group">
            <summary className="list-none [&::-webkit-details-marker]:hidden cursor-pointer select-none flex items-baseline gap-3">
              <span className="text-sm text-gray-500 transition-transform duration-200 group-open:rotate-90 shrink-0 translate-y-px">
                &#9656;
              </span>
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
            </summary>

            <div className="mt-2 ml-6 space-y-1">
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
            </div>
          </details>
        </article>
      ))}
    </div>
  </FadeSection>
);

export default Projects;
