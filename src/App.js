import React, { useState, useEffect, lazy, Suspense } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Loading from './components/Loading';
import NotFound from './components/NotFound';

import Home from './pages/Home';
const Formulario = lazy(() => import('./pages/Formulario'));
const Correct = lazy(() => import('./pages/Correct'));

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
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
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </HashRouter>
  );
};

export default App;
