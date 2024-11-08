import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'


function App() {
  const [count, setCount] = useState(0)

  return (
    < div className='relative '>
      <Navbar />

      <Outlet />

      <Footer />
<ToastContainer/>
    </div>
  )
}

export default App
