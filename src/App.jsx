import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import LandingPage from './components/LandingPage/LandingPage'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'

function App() {


  return (
    <>
  <Header/>
  <Hero/>
     <LandingPage/>
      
    </>
  )
}

export default App
