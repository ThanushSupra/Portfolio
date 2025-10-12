import './styles/index.css'
import Header from "./components/layout/Header"
import About from "./components/sections/About"
import Experience from './components/sections/Experience'
import Projects from "./components/sections/Projects"
import Skills from "./components/sections/Skills"
import Footer from "./components/layout/Footer"

const Portfolio  = () =>  {

  return (
    
    <div className = "mx-auto max-w-screen-md px-4 md:px-0 py-8 space-y-12">
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
