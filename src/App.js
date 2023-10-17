import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Formulario from './pages/Formulario';
import Correct from './pages/Correct';

const App = () => {
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
