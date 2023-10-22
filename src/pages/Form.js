import React, { useState } from 'react';
import { useNavigate } from 'react-router';

import { fetchFunction } from '../utils/fetchFunction';
import { insertDataToForm, checkFormIsCompleteAndCorrect } from '../utils/dataUtils';

import Conditions from '../components/Conditions';
import Alert from '../components/Alert';
import PhotoNotice from '../components/PhotoNotice';

const Form = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    nombre: '',
    apellido: '',
    segundo_apellido: '',
    email: '',
    telefono: '',
    foto: null,
  });

  const [showConditionsNotice, setShowConditionsNotice] = useState(false);
  const [isConditionsAcepted, setIsConditionsAcepted] = useState(false);

  const [isAlert, setIsAlert] = useState(null);

  const [isPhotoUploaded, setPhotoUploaded] = useState(false);
  const [showPhotoUploadedNotice, setShowPhotoUploadedNotice] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleFotoChange = (event) => {
    const foto = event.target.files?.[0] ?? null;
    setData({ ...data, foto });

    if (foto) {
      setPhotoUploaded(true);
      setShowPhotoUploadedNotice('Foto subida !!!');
    } else {
      setPhotoUploaded(false);
      setShowPhotoUploadedNotice(null);
    }
  };

  const handleShowConditions = () => {
    setShowConditionsNotice(true);
  };

  const handleCloseConditions = () => {
    setShowConditionsNotice(false);
  };

  const handleAceptConditions = () => {
    setIsConditionsAcepted(!isConditionsAcepted);
  };

  const showAlert = (message) => {
    setIsAlert({ message });
  };

  const closeAlert = () => {
    setIsAlert(null);
  };

  const closePhotoNotice = () => {
    setShowPhotoUploadedNotice(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isConditionsAcepted) {
      handleShowConditions();
      return;
    }

    const isFormCompleted = checkFormIsCompleteAndCorrect(data, showAlert);

    if (isFormCompleted) {
      const formData = insertDataToForm(data, showAlert);
      const isUserSaveCorrectly = await fetchFunction(formData, showAlert);

      if (isUserSaveCorrectly) {
        navigate('/correct');
      }
    }
  };

  return (
    <div className='formulario-container'>
      <form className='formulario' onSubmit={handleSubmit}>
        <div className='campo-div'>
          <label>Nombre:</label>
          <input type='text' name='nombre' value={data.nombre} required={true} onChange={handleInputChange} />
        </div>
        <div className='campo-div'>
          <label>Apellido:</label>
          <input type='text' name='apellido' value={data.apellido} required={true} onChange={handleInputChange} />
        </div>
        <div className='campo-div'>
          <label>Segundo Apellido:</label>
          <input type='text' name='segundo_apellido' value={data.segundo_apellido} required={true} onChange={handleInputChange} />
        </div>
        <div className='campo-div'>
          <label>Email:</label>
          <input type='email' name='email' value={data.email} required={true} onChange={handleInputChange} />
        </div>
        <div className='campo-div'>
          <label>Telefono:</label>
          <input type='tel' name='telefono' value={data.telefono} required={true} onChange={handleInputChange} />
        </div>
        <div className='campo-div'>
          <label>Foto:</label>
          <label className='file-upload-label' htmlFor='file-upload'>
            Subir Foto
          </label>
          <input type='file' name='photo' id='file-upload' accept='image/*' onChange={handleFotoChange} style={{ display: 'none' }} />
        </div>

        {isPhotoUploaded && <p>Foto subida !!!</p>}
        {showPhotoUploadedNotice && <PhotoNotice message={showPhotoUploadedNotice} onClose={closePhotoNotice} />}

        <div>
          <button type='submit'>Enviar</button>
        </div>
        <div>
          <a
            href='#'
            onClick={(event) => {
              event.preventDefault();
              handleShowConditions();
            }}
          >
            Conditions de uso
          </a>
        </div>
      </form>

      {showConditionsNotice && <Conditions handleCloseConditions={handleCloseConditions} isConditionsAcepted={isConditionsAcepted} handleAceptConditions={handleAceptConditions} />}
      {isAlert && <Alert message={isAlert.message} onClose={closeAlert} />}
    </div>
  );
};

export default Form;
