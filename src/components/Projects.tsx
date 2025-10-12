import React from 'react'

const Projects = () => {

  const projects = [ 
    { 
      name: "HeyCare (TechTO Hackathon 2025) ",
      techstack: "React, Typescript, Vite, Tailwind, Supabase, OpenRouter API, WebSpeech API",
      description: [ 
        "Developed an AI-powered medical documentation platform that automates transcription and organizes patient–clinician conversations into structured records.",
        "Streamlined workflows for reviewing, editing, and exporting patient notes, enabling faster, more efficient documentation and record sharing."
      ],
      link: "https://github.com/ThanushSupra/Hey-Care", 
      time: "Sep 2025", 
    }
  ]



  return (
    <section id="projects" aria-label="Projects">
      <h3 className='text-4xl text-white'>Projects</h3>

      <div className="mt-4 space-y-6">
        {projects.map((p, key) => (
          <article key={key}>
            <h4 className='text-gray-200 text-2xl'>{p.name}</h4>
            <p className='text-gray-300 text-xl'>
              {p.time} | <a className='underline hover:text-white' href={p.link} target="_blank" rel="noopener noreferrer">Link</a>
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
