import React, { useState } from 'react';
import '../styles/layouts/Formulario.scss'; // Importa tu archivo SCSS
import { useNavigate } from 'react-router';
import { fetchFunction } from '../utils/fetchFunction';
import { añadirDatos, verificarFormularioCompleto } from '../utils/dataUtils';

const Formulario = () => {
  const navigate = useNavigate();

  const [datos, setDatos] = useState({
    nombre: '',
    apellido: '',
    segundo_apellido: '',
    email: '',
    telefono: '',
    foto: null, // Para almacenar la foto seleccionada
  });

  const [mostrarCondiciones, setMostrarCondiciones] = useState(false);
  const [aceptarCondiciones, setAceptarCondiciones] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDatos({ ...datos, [name]: value });
  };

  const handleFotoChange = (event) => {
    const foto = event.target.files?.[0] ?? null;
    setDatos({ ...datos, foto });
  };

  const handleMostrarCondiciones = () => {
    setMostrarCondiciones(true);
  };

  const handleCloseCondiciones = () => {
    setMostrarCondiciones(false);
  };

  const handleAceptarCondiciones = () => {
    setAceptarCondiciones(!aceptarCondiciones); // Cambiar el estado a lo opuesto
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
          const response = await fetchFunction(formData, navigate);
          if (response) {
            navigate('/correct');
          }
        } else {
          alert('Falta rellenar alguno de los datos');
        }
      } catch (error) {
        alert(error);
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
          <label>Subir Foto:</label>
          <input type='file' name='foto' accept='image/*' onChange={handleFotoChange} />
        </div>
        <div>
          <button type='submit'>Enviar</button>
        </div>
        <div>
          <a
            href='#'
            onClick={(e) => {
              e.preventDefault();
              handleMostrarCondiciones();
            }}
          >
            Condiciones de uso
          </a>
        </div>
      </form>
      {mostrarCondiciones && (
        <div className='condiciones-div'>
          <div className='condiciones-content'>
            <h2>Condiciones de uso</h2>
            <h3>Debes aceptar las condiciones de uso para poder inscribirte.</h3>
            <p>
              Todos los datos recopilados por esta aplicación se mantendrán en un estado de privacidad y confidencialidad absolutos durante el período de prueba. Los datos recopilados se utilizarán exclusivamente con fines de prueba y mejora de la aplicación. No compartiremos ni venderemos sus datos a terceros en ningún momento. Todos los datos recopilados por esta aplicación serán eliminados de manera segura y permanente cuando expire el período de prueba. No conservaremos ni utilizaremos sus datos más allá de este período. Si tiene alguna pregunta o inquietud con respecto a la privacidad de
              sus datos durante el período de prueba, no dude en ponerse en contacto con nuestro equipo de soporte. Estamos aquí para ayudar. Al utilizar esta aplicación, usted acepta cumplir con estas condiciones de uso y comprende que sus datos se manejarán de acuerdo con las políticas de privacidad y términos de uso de la aplicación. Agradecemos su participación en nuestra prueba y esperamos brindarle la mejor experiencia posible. Siéntase libre de ponerse en contacto con nosotros si necesita más información o asistencia.
            </p>
            <input type='checkbox' onChange={handleAceptarCondiciones} checked={aceptarCondiciones} /> Aceptar
            <button onClick={handleCloseCondiciones}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Formulario;
