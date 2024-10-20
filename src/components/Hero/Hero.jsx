import React from 'react'
import "./Hero.scss"

function Hero() {
  return (
    <div className="hero">
        <h1 className="hero__title">Hi!</h1>
        <h2 className="hero__subtitle">I am Yvonne</h2>
        <p className="hero__description" data-bold="true">
          Software Developer | Developer Engineer | UX / UI Designer
        </p>
    </div>
  )
}

export default Hero
