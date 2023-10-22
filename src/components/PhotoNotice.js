import React from 'react';

const PhotoNotice = ({ message, onClose }) => {
  const handlePhotoNoticeClose = (event) => {
    event.preventDefault();
    onClose();
  };

  return (
    <div className='avisoFoto-div'>
      <div className='avisoFoto-content'>
        <h3>{message}</h3>
        <button onClick={handlePhotoNoticeClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default PhotoNotice;
