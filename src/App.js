import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import axios from 'axios'
import Directory from './components/Directory'
import Navbar from './components/Navbar'
import Home from './pages/home'
import Subcategory from './pages/subcategory'
import ShowResource from './pages/showresource'
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
        <Route path="/about" element={<About/>}/>
        <Route path="/subcategory" element={<Subcategory/>}/>
        <Route path="/:id" element={<ShowResource/>}/>
        <Route path="/forum" element={<Forum/>}/>
        <Route path="/admin" />
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>

   </>
  )
}

export default App
