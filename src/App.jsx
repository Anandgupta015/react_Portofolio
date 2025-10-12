import React from 'react'
import NavBar from './component/navbar/NavBar'
import Home from './component/home/Home'
import About from './component/about/About'
import Project from './component/project/Project'
import Contact from './component/contact/Contact'
function App() {
  return (
    <>
      <NavBar/>
      <Home/>
      <About/>
      <Project/>
      <Contact/>
    </>
  )
}

export default App