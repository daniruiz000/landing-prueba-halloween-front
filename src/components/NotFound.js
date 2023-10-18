import React from 'react';
import Calabaza from '../assets/img/calabaza-smile.svg';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className='correct'>
      <div className='correct_header'>
        <h2 className='correct_title'> 404 Pagina no encontrada</h2>
        <img className='container-down_calabaza' src={Calabaza} onClick={handleClick} />
      </div>
    </div>
  );
};

export default NotFound;
