import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />

        <div id="contact" style={{ minHeight: "500px" }}>
  <h2>Contact</h2>
</div>
      </main>
    </>
  );
}

export default App;