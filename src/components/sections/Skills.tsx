
import { skills } from '../../data/skills'
import { useInView } from "react-intersection-observer";

const Skills = () => {

  const {ref: skillsRef, inView} = useInView({ threshold: 0.25, triggerOnce: false});

  // Base transition utility classes: short, subtle, and snappy
  const base = "transition-all duration-300 ease-out";
  // Hidden state: fully transparent and shifted down a bit
  const hidden = "opacity-0 translate-y-4";
  // Visible state: fully opaque and in place
  const shown = "opacity-100 translate-y-0";
  return (
    <section ref = {skillsRef} id="skills" aria-label="Skills"
    
    className={`${base} ${inView ? shown : hidden}`}>
      <h3 className='text-white text-4xl'>Skills</h3>

      <div className='text-lg mt-2 space-y-1'>
        <p className='text-gray-400'><span className='font-bold text-gray-300'>Languages:</span> {skills.languages}</p>
        <p className='text-gray-400'><span className='font-bold text-gray-300'>Frameworks:</span> {skills.frameworks}</p>
        <p className='text-gray-400'><span className='font-bold text-gray-300'>Developer Tools:</span> {skills.developerTools}</p>
      </div>
    </section>
  )
}

export default Skills
