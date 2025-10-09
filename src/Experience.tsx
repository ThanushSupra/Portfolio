import React from 'react'




const Experience = () => {

  const experiences = [ 
    {
      company: "Weve",
      position: "Software Engineering Intern",
      logo: "",
      techstack: "React, Tailwind, Supabase, Mapbox GL, Apple Maps",
      location: "Toronto, Ontario, Canada",
      duration: "May 2025 - August 2025",
      description: [
        "Helped design, build, and launch a community events app with secure authentication, personalized onboarding, and interactive map-based event discovery",
        "Developed a similarity-based matching system, improved search performance, and now lead the development of the companion web platform while planning its deployment for scalability.",
      ]
    }
  ]

  return (
    <div>
      <h3>Experience</h3>
      
      {experiences.map((e, key) => ( 
        <div key={key}>

            <h4>{e.position} @ {e.company}  |  <span> {e.techstack} </span> </h4>
            <h5> {e.duration} </h5>
            <p> {e.location} </p>

            <ul>
              {e.description.map((item, k) => (
                <li key={k}>- {item}</li>
            ))}
            </ul>

        </div>

      ))}


    </div>
  )
}

export default Experience