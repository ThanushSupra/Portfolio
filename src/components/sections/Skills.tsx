
import { skills } from '../../data/skills'

const Skills = () => {
  return (
    <section id="skills" aria-label="Skills">
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
