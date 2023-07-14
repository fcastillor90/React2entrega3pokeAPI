import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './view/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './component/Navbar';
import Detalle from './view/Detalle';
import Pokemones from './view/Pokemones';

function App() {
  return (
    <div className='App'> 
     <BrowserRouter>
       <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Pokemones" element={<Pokemones />} />
        <Route path="/Pokemones/:name" element={<Detalle />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;