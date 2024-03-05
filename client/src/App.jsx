
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Career from './pages/Career'
import Contact from './pages/Contact'
import Layout from './components/Layout'
import './App.css'

function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/career' element={<Career/>} />
        <Route path='/contact' element={<Contact/>} />
        </Route>

    </Routes>

  </BrowserRouter>
  )
}

export default App
