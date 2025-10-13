import React from 'react'
import NavBar from './component/navbar/NavBar'
import Home from './component/home/Home'
import About from './component/about/About'
import Project from './component/project/Project'
import Contact from './component/contact/Contact'
import Certifications from './component/certificatons/Cetrification'
function App() {
  return (
    <>
      <NavBar/>
      <Home/>
      <About/>
      <Project/>
      <Certifications/>
      <Contact/>
    </>
  )
}

export default App