// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Reviews from './components/Reviews'
import { data } from './components/data'
const {reviews} = data;

function App() {

  return <div className='App'>
    <Reviews reviews={reviews}></Reviews>
  </div>
   
}

export default App
