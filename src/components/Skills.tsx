import React from 'react'

const Skills = () => {
  return (
    <section id="skills" aria-label="Skills">
      <h3 className='text-white text-4xl'>Skills</h3>

      <div className='text-lg mt-2 space-y-1'>
        <p className='text-gray-400'><span className='font-bold text-gray-300'>Languages:</span> Java, Python, C/C++, HTML/CSS, JavaScript, TypeScript, R</p>
        <p className='text-gray-400'><span className='font-bold text-gray-300'>Frameworks:</span> React, React Native, Tailwind</p>
        <p className='text-gray-400'><span className='font-bold text-gray-300'>Developer Tools:</span> Git, Supabase, MySQL, Firebase, OpenRouter API, WebSpeech API, VS Code, PyCharm, Eclipse, Vercel, Linux</p>
      </div>
    </section>
  )
}

export default Skills
