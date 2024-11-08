import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    < div className='relative '>
      <Navbar />

      <Outlet />

      <Footer />

    </div>
  )
}

export default App
