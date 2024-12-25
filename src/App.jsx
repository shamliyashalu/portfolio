import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Project'
import Contact from './Components/Contact'
import Hero from './Components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="fixed h-full w-full bg-slate-950 -z-10">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      </div>
      <div className='bg-transparent'>
      <Navbar/>
      <Hero />
      {/* <Home/> */}
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      </div>
      
    </>
  )
}

export default App
