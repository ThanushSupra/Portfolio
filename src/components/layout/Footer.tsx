import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
const resume = '/ThanushSupramaniamFinalResume.pdf'
import { useInView } from "react-intersection-observer";


const Footer = () => {

  const {ref: footerRef, inView} = useInView({ threshold: 0.25, triggerOnce: false});

  // Base transition utility classes: short, subtle, and snappy
  const base = "transition-all duration-300 ease-out";
  // Hidden state: fully transparent and shifted down a bit
  const hidden = "opacity-0 translate-y-4";
  // Visible state: fully opaque and in place
  const shown = "opacity-100 translate-y-0";
  return (
    <footer ref = {footerRef} id="footer" aria-label="Footer"
    
    className={`${base} ${inView ? shown : hidden}`}>

        <div className = "flex items-center justify-center">

          <a href={resume} rel="noopener noreferrer"
            target='_blank' className="rounded-full px-5 py-2.5 bg-gray-900 text-gray-400 text-2xl
                                          shadow-2xl ring-1 ring-gray-700 transition duration-300 cursor-pointer
                                          hover:bg-gray-800 hover:text-white hover:ring-gray-600 hover:scale-[1.05] ">
              View Resume
          </a>

        </div>

      <hr className="my-5 dark:border-gray-700"/>
      
      <div className="pb-8 text-white text-xl text-center flex justify-center">

        <a aria-label="GitHub" href="https://github.com/ThanushSupra" target='_blank' rel="noopener noreferrer" 
        className='mr-5 transition duration-300 hover:scale-[1.1]'>
          <GitHubIcon sx={{fontSize: 40}}/>
        </a> 

        <a aria-label="LinkedIn" href="https://www.linkedin.com/in/tsupra" target='_blank' rel="noopener noreferrer" 
        className='mr-5 transition duration-300 hover:scale-[1.1]'>
          <LinkedInIcon sx={{fontSize: 40}}/>
        </a>

        <a aria-label="Email" href="mailto:s.thanushkanth11@gmail.com" 
        className = "transition duration-300 hover:scale-[1.1]">
          <EmailIcon sx={{fontSize: 40}} />
        </a>
        
      </div>
      <p className="text-gray-500 text-center">Still a work in progress — bear with me :)</p>
    </footer>
  )
}

export default Footer
