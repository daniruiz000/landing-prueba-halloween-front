import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Formulario from './pages/Formulario';
import Correct from './pages/Correct';

import Calabaza from './assets/img/calabaza-smile.svg'; // Importa la imagen SVG

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula un tiempo de carga (puedes reemplazar esto con tu lógica de carga real)
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Cambia el tiempo según tus necesidades
  }, []);

  if (isLoading) {
    return (
      <div className='loading'>
        <img className='spinner' src={Calabaza} alt='Cargando...' />
      </div>
    );
  }

  return (
    <HashRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/formulario' element={<Formulario />} />
          <Route path='/correct' element={<Correct />} />
          <Route path='/*' element={<div>"Página no existe</div>} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;
