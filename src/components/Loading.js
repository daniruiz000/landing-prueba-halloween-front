import React from 'react';
import Calabaza from '../assets/img/calabaza-smile.svg';

const Loading = () => {
  return (
    <div className='calabaza-container'>
      <img className='calabaza-spinner' src={Calabaza} alt='Calabaza' />
    </div>
  );
};

export default Loading;
