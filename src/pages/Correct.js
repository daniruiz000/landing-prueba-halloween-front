import React from 'react';
import { useNavigate } from 'react-router-dom';

import Calabaza from '../assets/img/calabaza-smile.svg';

const Correct = () => {
  const navigate = useNavigate();

  const handleGoToHome = () => {
    navigate('/');
  };

  return (
    <div className='correct'>
      <div className='correct_header'>
        <h2 className='correct_title'> Usuario registrado!</h2>
        <h2 className='correct_title'> Muchas gracias!!!</h2>
        <img className='container-down_calabaza' src={Calabaza} onClick={handleGoToHome} />
      </div>
    </div>
  );
};

export default Correct;
