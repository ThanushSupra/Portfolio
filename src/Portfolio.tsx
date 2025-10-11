import './styles/index.css'
import Header from "./Header"
import About from "./About"
import Experience from './Experience'
import Projects from "./Projects"
import Skills from "./Skills"
import Footer from "./Footer"
const Portfolio  = () =>  {

  return (
    
    <div className = "mx-auto max-w-screen-md">
        <Header/>
        <About/>
        <Experience/>
        <Projects/>
        <Skills/>
        <Footer/>
    </div>
  )
}

export default Portfolio
