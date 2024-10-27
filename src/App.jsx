import React, { useState } from 'react'
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import About from "./components/about/About"
import Experience from "./components/experience/Experience"
import Portfolio from "./components/portfolio/Portfolio"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"

function ColorPickr() {
  const [color, setcolor] = useState("#4db5ff");
  const customColors = ['#ff1a1a', '#1aff40', '#f0ff1a', '#584DFF', '#00eeff', '#bb00ff', '#242bff', '#24ff99'];

  function handleChange(e) {
    let a = document.documentElement;
    setcolor(e.target.value);
    a.style.setProperty('--color-primary', e.target.value);
  }

  return (
    <div>
      <div className="color-picker">
        <input
          type="color"
          value={color}
          id="colorpicker"
          onChange={handleChange}
          list="custom-colors"
        />
        <datalist id="custom-colors">
          {customColors.map((customColor) => (
            <option value={customColor} key={customColor} />
          ))}
        </datalist>
      </div>
    </div>
  )
}

const App = () => {

  return (
    <>
      <ColorPickr />
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