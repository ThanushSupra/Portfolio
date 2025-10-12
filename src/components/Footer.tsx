import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <div>
      <hr className="my-5 dark:border-gray-700"/>
      
      <div className="pb-8 text-white text-xl text-center flex justify-center">
        <a href="https://github.com/ThanushSupra" target='_blank' className='mr-5'> <GitHubIcon sx={{fontSize: 40}}/> </a> 
        <a href="https://www.linkedin.com/in/tsupra" target='_blank' className='mr-5'> <LinkedInIcon sx={{fontSize: 40}}/> </a>
        <a href="mailto:s.thanushkanth11@gmail.com" target='_blank'> <EmailIcon sx={{fontSize: 40}} /> </a>
      </div>

    </div>
  )
}

export default Footer