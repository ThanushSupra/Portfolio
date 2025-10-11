import React from 'react'




const Experience = () => {

  const experiences = [ 
    {
      company: "Weve",
      position: "Software Engineering Intern",
      logo: "",
      techstack: "React, Typescript, Tailwind, Supabase, Mapbox GL, Apple Maps",
      location: "Toronto, Canada",
      duration: "May 2025 - August 2025",
      description: [
        "Helped design, build, and launch a community events app with secure authentication, personalized onboarding, and interactive map-based event discovery",
        "Developed a similarity-based matching system, improved search performance, and now lead the development of the companion web platform while planning its deployment for scalability.",
      ]
    }
  ]

  return (
    <div className = 'pt-8'>
      <h3 className = 'text-4xl text-white'>Experience</h3>
      
      {experiences.map((e, key) => ( 
        <div key={key}>

            <h4 className="text-gray-200 text-2xl">{e.position} @ {e.company}  <span className="text-base text-gray-400 font-bold"> {e.duration} </span> </h4>
            <h5 className="text-gray-200 text-xl"> {e.location} </h5>
            <p className="text-gray-300 text-lg"> {e.techstack} </p>

            <ul className="text-gray-400 text-lg">
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