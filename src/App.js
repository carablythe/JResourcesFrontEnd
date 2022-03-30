import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import axios from 'axios'
import Directory from './components/Directory'
import Navbar from './components/Navbar'
import Home from './pages/home'
import About from './pages/about'
import Forum from './pages/forum'
import Login from './pages/login'


const App = () => {


  return (
    <>
    <Router>
      <Directory/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/pages/about" element={<About/>}/>
        <Route path="/pages/forum" element={<Forum/>}/>
        <Route path="/pages/admin" />
        <Route path="/pages/login" element={<Login/>}/>
      </Routes>
    </Router>

   </>
  )
}

export default App
