import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Manufacturers from "./Manufacturers"

function Home() {
  return (
    <>
      <h1>Home</h1>
      <p>HOMEPAGE</p>
      <Link to="/manufacturers"> Go To Manufacturers </Link>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manufacturers" element={<Manufacturers />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
