import { projects } from '../../data/projects'
import { useInView } from "react-intersection-observer";

const Projects = () => {

  const {ref: projectsRef, inView} = useInView({ threshold: 0.25, triggerOnce: false});

  // Base transition utility classes: short, subtle, and snappy
  const base = "transition-all duration-300 ease-out";
  // Hidden state: fully transparent and shifted down a bit
  const hidden = "opacity-0 translate-y-4";
  // Visible state: fully opaque and in place
  const shown = "opacity-100 translate-y-0";

  return (
    <section ref = {projectsRef} id="projects" aria-label="Projects"
    
    className={`${base} ${inView ? shown : hidden}`}>
      
      <h3 className='text-4xl text-white'>Projects</h3>

      <div className="mt-4 space-y-6">

        {projects.map((p, key) => (

          <article key={key}>
            <h4 className='text-gray-200 text-2xl'>{p.name}</h4>

            <p className='text-gray-300 text-xl'>
              {p.time} | <a className='inline-block underline hover:text-white transition duration-300 hover:scale-[1.05]' href={p.link} target="_blank" rel="noopener noreferrer">Link</a>
            </p>

            <ul className="text-gray-400 text-lg mt-2 space-y-1 list-disc pl-5">
              {p.description.map((item, k) => (
                <li key={k}>{item}</li>
              ))}
            </ul>

          </article>
        ))}

        
      </div>
    </section>
  )
}

export default Projects
