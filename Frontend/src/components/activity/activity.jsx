import React from 'react'
import Navbar from '../Navbar'
import Activity from './activities'
import Footer from '../Footer'
function Course() {
  return (
    <div>
      <Navbar/>
      <div className='min-h-screen'>
        <Activity/>
      </div>
      <Footer/>
    </div>
  )
}

export default Course
