import React from 'react';
import Calabaza from '../assets/img/calabaza-smile.svg';
import { useNavigate } from 'react-router-dom';

const Correct = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className='correct'>
      <div className='correct_header'>
        <h2 className='correct_title'> Usuario registrado!</h2>
        <h2 className='correct_title'> Muchas gracias!!!</h2>
        <img className='container-down_calabaza' src={Calabaza} onClick={handleClick} />
      </div>
    </div>
  );
};

export default Correct;
