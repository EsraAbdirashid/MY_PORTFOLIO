import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Contact />
        <section id="projects" style={{ minHeight: "500px" }}>
  <h2>Projects</h2>
</section>
      </main>
    </>
  );
}

export default App;