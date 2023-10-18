import React from 'react';

const Alert = ({ message, type, onClose }) => {
  return (
    <div className='alert-div'>
      <div className='alert-content'>
        <h2>Alerta</h2>
        <h3>{message}</h3>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default Alert;
