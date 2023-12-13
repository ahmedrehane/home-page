import './App.css'
import AboutLittleLemon from './AboutLittleLemon'
import HomePage from './HomePage'
import Contact from './Contact'
import In from './In'
import Out from './Out'
import { Routes, Route, Link } from "react-router-dom";

function App() {


  return (
    <>
      <nav>
        <Link to="/" className="nav-item">HomePage</Link>
        <Link to="/about" className="nav-item">About Little Lemon</Link>
        <Link to= "/contact" className='nav-item'>Contact</Link>
        <Link to= "/in" className='nav-item'>In</Link>
        <Link to= "/out" className='nav-item'>Out</Link>
      </nav>
      <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutLittleLemon />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path='/in' element={<In />}></Route>
          <Route path='/out' element={<Out />}></Route>


      </Routes>
    </>
  )
}

export default App
