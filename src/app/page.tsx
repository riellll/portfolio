import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Project from "../components/Project";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6">
      <section id="hero">
        <Hero />
      </section>

      <section id="project">
        <Project />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
