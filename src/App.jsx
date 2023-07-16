import React from "react"


import Info from "./components/Info"
import About from "./components/about"
import Interests from './components/interests'
import Footer from './components/footer'

// import './App.css'

function App() {
  return(
      <div className='businesscard-container'>
        <Info />
        <About />
        <Interests />
        <Footer />
      </div>
    )
}


export default App
