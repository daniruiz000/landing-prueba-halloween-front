import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import Murcielagos from '../assets/img/murcielagos.svg';
import Calabaza from '../assets/img/calabaza-smile.svg';
import Loading from './components/Loading';

const Home = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const handleGoToForm = () => {
    navigate('/formulario');
  };
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className='home'>
      <header className='header'>
        <h1 className='header_title'>
          <strong>una foto de muerte!!!</strong>
        </h1>
      </header>

      <div className='container'>
        <h2 className='container_texto-no-dejes'>No dejes que te asusten...</h2>
        <img src={Murcielagos} className='container_murcielagos' />
      </div>
      <h2 className='container_texto-manda-selfi'>Manda un selfie realmente aterrador y participa en el sorteo de un regalo espeluznante!!! </h2>
      <div className='container-down'>
        <button onClick={handleGoToForm} className='container-down_button'>
          PARTICIPA
        </button>
        <img src={Calabaza} className='container-down_calabaza' />
      </div>
    </div>
  );
};

export default Home;
