import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Formulario from './pages/Formulario';
import Correct from './pages/Correct';

import Calabaza from './assets/img/calabaza-smile.svg';

const Loading = () => (
  <div className='loading'>
    <img className='spinner' src={Calabaza} alt='Cargando...' />
  </div>
);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <HashRouter>
      <div className='App'>
        <Routes>
          <Route path='/loading' element={<Loading />} />
          <Route path='/' element={<Home />} />
          <Route path='/formulario' element={<Formulario />} />
          <Route path='/correct' element={<Correct />} />
          <Route path='/*' element={<div>Página no existe</div>} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;
