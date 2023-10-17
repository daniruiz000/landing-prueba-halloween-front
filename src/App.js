import React, { useState, useEffect, lazy, Suspense } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css'; // Importa el archivo CSS actualizado

const Home = lazy(() => import('./pages/Home'));
const Formulario = lazy(() => import('./pages/Formulario'));
const Correct = lazy(() => import('./pages/Correct'));
const Loading = () => <div className='loading'>Cargando...</div>;

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula un tiempo de carga (puedes reemplazar esto con tu lógica de carga real)
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Cambia el tiempo según tus necesidades
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <HashRouter>
      <div className='App'>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/formulario' element={<Formulario />} />
            <Route path='/correct' element={<Correct />} />
            <Route path='/*' element={<div>Página no existe</div>} />
          </Routes>
        </Suspense>
      </div>
    </HashRouter>
  );
};

export default App;
