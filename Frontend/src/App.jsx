import React from 'react'
import './styles/App.css'
import Navbar from './components/common/Navbar'
import Hero from './components/pages/hero/Hero'
import About from './components/pages/about/About'
import Skills from './components/pages/skills/Skills'
import Projects from './components/pages/projects/Projects'
import Contact from './components/pages/contact/Contact'
import Footer from './components/pages/footer/Footer'
import Educations from './components/pages/educations/Educations'

function App() {
  return <div id='App'>
    <Navbar />
    <main className='main'>
      <Hero />
      <About />
      <Educations />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  </div>
}

export default App