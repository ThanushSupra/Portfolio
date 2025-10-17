import { useInView } from "react-intersection-observer";


const About = () => {
  // useInView returns a ref to attach to the element and a boolean that
  // tells us if the element is currently in the viewport.
  // - threshold ~25%: consider it visible when a quarter of the part is on screen
  // - triggerOnce: false so it can animate both entering and leaving
  const { ref: aboutRef, inView } = useInView({ threshold: 0.25, triggerOnce: false });

  // Base transition utility classes: short, subtle, and snappy
  const base = "transition-all duration-300 ease-out";
  // Hidden state: fully transparent and shifted down a bit
  const hidden = "opacity-0 translate-y-4";
  // Visible state: fully opaque and in place
  const shown = "opacity-100 translate-y-0";

  return (
    <section ref={aboutRef} id="about" aria-label="About"
      
    // switch between hidden/visible classes depending on inView.
      className={`${base} ${inView ? shown : hidden}`}
    >
      <h3 className='text-4xl text-white'>About</h3>

      <div className="mt-2 text-xl text-gray-400 space-y-2 leading-relaxed">
        <p>Previously at Weve as a Software Engineering Intern.</p>
        <p>Currently exploring machine learning and AI, and sharpening full‑stack and Python skills. Planning a personal Discord bot soon.</p>
        <p>Outside of tech, I enjoy the gym, playing soccer, and discovering new music.</p>
      </div>
    </section>
  )
}

export default About
