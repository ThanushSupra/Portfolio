import { experiences } from '../../data/experience'
import { useInView } from "react-intersection-observer";

const Experience = () => {

  const {ref: experienceRef, inView} = useInView({ threshold: 0.25, triggerOnce: false});

    // Base transition utility classes: short, subtle, and snappy
    const base = "transition-all duration-300 ease-out";
    // Hidden state: fully transparent and shifted down a bit
    const hidden = "opacity-0 translate-y-4";
    // Visible state: fully opaque and in place
    const shown = "opacity-100 translate-y-0";

  return (
    <section ref = {experienceRef} id="experience" aria-label="Experience"
    
    className={`${base} ${inView ? shown : hidden}`}>

      
      <h3 className='text-4xl text-white'>Experience</h3>

      {experiences.map((e, key) => (
        <article key={key} className="mt-4">
          <div className='flex items-center gap-4'>
            <img src={e.logo} alt={`${e.company} logo`} className='w-20 h-20 rounded-full object-cover object-center' loading="lazy" />
            <div className="text-gray-200">
              <h4 className="text-3xl">{e.position} @ {e.company}</h4>
              <p className="text-gray-400 text-base">{e.location} • <time>{e.duration}</time></p>
              <p className="text-gray-300 text-lg">{e.techstack}</p>
            </div>
          </div>

          <ul className="ml-24 list-disc text-gray-400 text-lg mt-3 space-y-1 pl-1">
            {e.description.map((item, k) => (
              <li key={k}>{item}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  )
}

export default Experience
