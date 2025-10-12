import React, { useState } from 'react'

const Experience = () => {

  const experiences = [ 
    {
      company: "Weve",
      position: "Software Engineering Intern",
      logo: new URL('../assets/weve.png', import.meta.url).href,
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

            <div className='flex'>
              
              <img src={e.logo} alt="Weve" className='w-20 h-30 rounded-full object-cover object-center' />
              
              <div className="text-gray-200 text-3xl mt-8">

                {e.position} @ {e.company}  <span className="text-base text-gray-400 font-bold"> {} </span> 
                <h5 className="text-gray-200 text-xl"> {e.location} </h5>
                <p className="text-gray-300 text-lg"> {e.techstack} </p>

              </div>

            </div>

            <div className='ml-20'>

              <div className='text-gray-200'/>

              <ul className="text-gray-400 text-lg">

                {e.description.map((item, k) => (
                  <li key={k}>- {item}</li>
              ))}

              </ul>
            </div>


        </div>
      ))}

    </div>
  )
}

export default Experience