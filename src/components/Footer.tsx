import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <footer>
      <hr className="my-5 dark:border-gray-700"/>
      
      <div className="pb-8 text-white text-xl text-center flex justify-center">
        <a aria-label="GitHub" href="https://github.com/ThanushSupra" target='_blank' rel="noopener noreferrer" className='mr-5'>
          <GitHubIcon sx={{fontSize: 40}}/>
        </a> 
        <a aria-label="LinkedIn" href="https://www.linkedin.com/in/tsupra" target='_blank' rel="noopener noreferrer" className='mr-5'>
          <LinkedInIcon sx={{fontSize: 40}}/>
        </a>
        <a aria-label="Email" href="mailto:s.thanushkanth11@gmail.com">
          <EmailIcon sx={{fontSize: 40}} />
        </a>
      </div>
      <p className="text-gray-500 text-center">Still a work in progress — bear with me :)</p>
    </footer>
  )
}

export default Footer
