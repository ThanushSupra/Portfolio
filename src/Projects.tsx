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
    <div>
      <h3>Projects</h3>

      {projects.map((p, key) => ( 
        <div key={key}>

          <h4> {p.name} | <span> {p.techstack} </span></h4>
          <h5> <a href={p.link}> GitHub </a></h5>
          <p> {p.time} </p>

          <ul>
          {p.description.map((item, k) => ( 
            <li> - {item}</li>
          ))}
          </ul>

        </div>
      ))}

    </div>
  )
}

export default Projects