import React from 'react'
import {logo} from '../assets';
const Hero = () => {
  return (
    <header className = "w-full flex justify-center items-center flex-col">
        <nav className = "flex justify-between items-center w-full mb-10 pt-3">
              <img src={logo} alt="sumz_logo"
              className = "w-28 object-contain"/>

              <button 
                type = "button" 
                onClick={() => window.open('https://github.com/nachiket-cmd')} 
                className ='black_btn'
              >
                 GitHub
              </button>
        </nav>
        <h1 className = "head_text">
            Summarize your long texts with <br className = "max-md:hidden"/><span className = "blu_gradient">AI</span>
        </h1>
        <h2 className="desc">
        Fed up with endless reading? Simplify your life with SumzAI, the open-source tool that transforms lengthy articles, into easy-to-digest summaries, saving you time and energy!
        </h2>
    </header>
  )
}

export default Hero