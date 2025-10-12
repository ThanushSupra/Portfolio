import { projects } from '../../data/projects'

const Projects = () => {



  return (
    <section id="projects" aria-label="Projects">
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
