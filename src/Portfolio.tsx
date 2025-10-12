import './styles/index.css'
import Header from "./components/Header"
import About from "./components/About"
import Experience from './components/Experience'
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Footer from "./components/Footer"

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
