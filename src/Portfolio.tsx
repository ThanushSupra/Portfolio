import { lazy, Suspense } from 'react';
import './styles/index.css';
import Navbar from './components/layout/Navbar';
import Header from './components/layout/Header';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Footer from './components/layout/Footer';

const DotGrid = lazy(() => import('./components/ui/DotGrid'));

const Portfolio = () => (
  <div className="relative min-h-screen">
    <Suspense fallback={null}>
      <DotGrid
        dotSize={2}
        gap={15}
        baseColor="#151821"
        activeColor="#38BDF8"
        proximity={100}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
        className="fixed inset-0 z-0"
      />
    </Suspense>

    <Navbar />

    <div className="relative z-10 mx-auto max-w-4xl px-8 py-10 space-y-16">
      <Header />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Footer />
    </div>
  </div>
);

export default Portfolio;
