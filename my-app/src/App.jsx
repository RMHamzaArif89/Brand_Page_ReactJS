import Nav from './components/nav'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from './components/container'
import Categories from './components/categories'
import Login from './components/login'
import './App.css'

function App() {
  
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        
          <Route index path='/home' element={<Container />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/login" element={<Login />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
