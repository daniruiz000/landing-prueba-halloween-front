import React from 'react';

const AvisoFoto = ({ message, onClose }) => {
  const handleAvisoFotoClose = (event) => {
    event.preventDefault();
    onClose();
  };

  return (
    <div className='avisoFoto-div'>
      <div className='avisoFoto-content'>
        <h3>{message}</h3>
        <button onClick={handleAvisoFotoClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default AvisoFoto;
