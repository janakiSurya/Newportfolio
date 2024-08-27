import logo from "./logo.svg";
import "./App.css";
import { Hero } from "./Hero";
import { Navbar } from "./Navbar/Navbar";
import { About } from "./About";
import { Experience } from "./Experience";
import { ProjectCard } from "./ProjectCard";
import { Projects } from "./Projects";
import { Contact } from "./Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />

      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
