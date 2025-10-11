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
    <div className="pt-8">
      <h3 className='text-4xl text-white'>Projects</h3>

      <div>
        {projects.map((p, key) => ( 
          <div key={key}>

            <h4 className='text-gray-200 text-2xl'> {p.name} </h4>

            <p className='text-gray-300 text-xl'> 
              {p.time} | <a className='text-decoration-line: underline' href={p.link}>Link</a>
            </p>

            <ul className="text-gray-400 text-lg">
            {p.description.map((item, k) => ( 
              <li> - {item}</li>
            ))}
            </ul>

          </div>
        ))}
    </div>

    </div>
  )
}

export default Projects