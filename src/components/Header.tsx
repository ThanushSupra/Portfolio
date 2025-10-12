import React from 'react'
import Profile from './Profile'

const Header = () => {
  return (
    <div className = 'flex pt-8'>
      
    <div>
      <h1 className="text-5xl text-white">
        Hey, I'm Thanush Supramaniam!
      </h1>
      <h2 className="text-4xl text-gray-400">
          Software Engineer Specializing in AI & ML
      </h2>
    </div>

    <Profile/>

  </div>
)
}

export default Header