import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Manufacturers from "./pages/Manufacturers"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"

function Home() {
  return (
    <div>
      <h1 style={{
        fontSize: 30,
        position: "fixed",
        top: 60,
        left: 275,
        }}>
          Homepage
      </h1>
    </div>
  )
}


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/manufacturers" element={<Manufacturers />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
