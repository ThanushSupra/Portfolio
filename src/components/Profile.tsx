import React from 'react';
import profilePhoto from "../assets/ProfilePhoto.JPG";

const Profile = () => {
  return <img className="ml-auto w-27 h-27 rounded-[50%] object-cover object-center" src={profilePhoto} alt="Profile Photo" />;
};

export default Profile;