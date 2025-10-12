import React from 'react'
import profilePhoto from "../assets/ProfilePhoto.JPG";

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

    <img className="ml-auto w-27 h-27 rounded-[50%] object-cover object-center" src={profilePhoto} alt="Profile Photo" />

  </div>
)
}

export default Header