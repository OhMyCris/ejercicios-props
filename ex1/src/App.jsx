// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Heading from './components/Heading'
import Promotion from './components/Promotion'
import { data } from './components/data'

const {promotion, heading} = data;

function App() {

  return (
    <div className='App'>
      <Header></Header>
      <Promotion promotion={promotion}></Promotion>
      <Heading heading={heading}></Heading>
      <Gallery></Gallery>
    </div>
  )
}

export default App
