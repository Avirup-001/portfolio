import React, { useState } from 'react'
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import About from "./components/about/About"
import Experience from "./components/experience/Experience"
import Portfolio from "./components/portfolio/Portfolio"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"



const App = () => {

  const [color, setcolor] = useState("#4db5ff");
  return (
    <>
      <div>

        <input title='Change background color' type="color" id="colorpicker" value={color} style={{ height: "23px", width: "23px", border: "none", borderRadius: "5px", padding: "0.9px " }} onChange={(e) => {
          let a = document.documentElement;
          setcolor(e.target.value);
          a.style.setProperty('--color-primary', e.target.value);

        }} ></input>
      </div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App