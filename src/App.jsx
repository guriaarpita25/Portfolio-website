
import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Hero/Home';
import About from './Components/About';
import { Skills } from './Components/Skills';
import Contact from './Components/Contact';
import Education from './Components/Education';
import Projects from "./Components/Projects";


function App() {
  return (

    <>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default App
