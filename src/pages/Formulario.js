import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { fetchFunction } from '../utils/fetchFunction';
import { añadirDatos, verificarFormularioCompleto } from '../utils/dataUtils';
import Condiciones from '../components/Condiciones';
import Alert from '../components/Alert';
import AvisoFoto from '../components/AvisoFoto';

const Formulario = () => {
  const navigate = useNavigate();

  const [datos, setDatos] = useState({
    nombre: '',
    apellido: '',
    segundo_apellido: '',
    email: '',
    telefono: '',
    foto: null,
  });

  const [mostrarCondiciones, setMostrarCondiciones] = useState(false);
  const [aceptarCondiciones, setAceptarCondiciones] = useState(false);

  const [alert, setAlert] = useState(null);

  const [fotoSubida, setFotoSubida] = useState(false);
  const [avisoFoto, setAvisoFoto] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDatos({ ...datos, [name]: value });
  };

  const handleFotoChange = (event) => {
    const foto = event.target.files?.[0] ?? null;
    setDatos({ ...datos, foto });

    if (foto) {
      setFotoSubida(true);
      setAvisoFoto('Foto subida !!!');
    } else {
      setFotoSubida(false);
      setAvisoFoto(null);
    }
  };

  const handleMostrarCondiciones = () => {
    setMostrarCondiciones(true);
  };

  const handleCloseCondiciones = () => {
    setMostrarCondiciones(false);
  };

  const handleAceptarCondiciones = () => {
    setAceptarCondiciones(!aceptarCondiciones);
  };

  const showAlert = (message) => {
    setAlert({ message });
  };

  const closeAlert = () => {
    setAlert(null);
  };

  const closeAvisoFoto = () => {
    setAvisoFoto(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!aceptarCondiciones) {
      handleMostrarCondiciones();
    } else {
      try {
        const formRellenado = verificarFormularioCompleto(datos);
        if (formRellenado) {
          const formData = añadirDatos(datos);
          const response = await fetchFunction(formData, showAlert);

          if (response) {
            navigate('/correct');
          }
        } else {
          showAlert('Falta rellenar alguno de los campos correctamente.');
        }
      } catch (error) {
        showAlert(error);
      }
    }
  };

  return (
    <div className='formulario-container'>
      <form className='formulario' onSubmit={handleSubmit}>
        <div className='campo-div'>
          <label>Nombre:</label>
          <input type='text' name='nombre' value={datos.nombre} required={true} onChange={handleInputChange} />
        </div>
        <div className='campo-div'>
          <label>Apellido:</label>
          <input type='text' name='apellido' value={datos.apellido} required={true} onChange={handleInputChange} />
        </div>
        <div className='campo-div'>
          <label>Segundo Apellido:</label>
          <input type='text' name='segundo_apellido' value={datos.segundo_apellido} required={true} onChange={handleInputChange} />
        </div>
        <div className='campo-div'>
          <label>Email:</label>
          <input type='email' name='email' value={datos.email} required={true} onChange={handleInputChange} />
        </div>
        <div className='campo-div'>
          <label>Telefono:</label>
          <input type='tel' name='telefono' value={datos.telefono} required={true} onChange={handleInputChange} />
        </div>
        <div className='campo-div'>
          <label>Foto:</label>
          <label className='file-upload-label' htmlFor='file-upload'>
            Subir Foto
          </label>
          <input type='file' name='foto' id='file-upload' accept='image/*' onChange={handleFotoChange} style={{ display: 'none' }} />
        </div>
        {fotoSubida && <p>Foto subida !!!</p>}
        {avisoFoto && <AvisoFoto message={avisoFoto} onClose={closeAvisoFoto} />}
        <div>
          <button type='submit'>Enviar</button>
        </div>
        <div>
          <a
            href='#'
            onClick={(event) => {
              event.preventDefault();
              handleMostrarCondiciones();
            }}
          >
            Condiciones de uso
          </a>
        </div>
      </form>
      {mostrarCondiciones && <Condiciones handleCloseCondiciones={handleCloseCondiciones} aceptarCondiciones={aceptarCondiciones} handleAceptarCondiciones={handleAceptarCondiciones} />}
      {alert && <Alert message={alert.message} onClose={closeAlert} />}
    </div>
  );
};

export default Formulario;
