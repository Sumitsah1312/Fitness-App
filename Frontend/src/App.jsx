import React from 'react'
import Home from '././components/home/Home'
import Signup from '././components/Signup'
import Course from './components/courses/Course'
import Contact from './components/Contact'
import { Routes,Route } from 'react-router-dom' 
function App() {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
      {/* <Home/>
      <Course/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/course' element={<Course/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      
    </div>
    </>

  )
}

export default App