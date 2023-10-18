const Condiciones = ({ handleAceptarCondiciones, handleCloseCondiciones, aceptarCondiciones }) => {
  return (
    <div className='condiciones-div'>
      <div className='condiciones-content'>
        <h2>Condiciones de uso</h2>
        <h3>Debes aceptar las condiciones de uso para poder inscribirte.</h3>
        <p>
          Todos los datos recopilados por esta aplicación se mantendrán en un estado de privacidad y confidencialidad absolutos durante el período de prueba. Los datos recopilados se utilizarán exclusivamente con fines de prueba y mejora de la aplicación. No compartiremos ni venderemos sus datos a terceros en ningún momento. Todos los datos recopilados por esta aplicación serán eliminados de manera segura y permanente cuando expire el período de prueba. No conservaremos ni utilizaremos sus datos más allá de este período. Si tiene alguna pregunta o inquietud con respecto a la privacidad de sus
          datos durante el período de prueba, no dude en ponerse en contacto con nuestro equipo de soporte. Estamos aquí para ayudar. Al utilizar esta aplicación, usted acepta cumplir con estas condiciones de uso y comprende que sus datos se manejarán de acuerdo con las políticas de privacidad y términos de uso de la aplicación. Agradecemos su participación en nuestra prueba y esperamos brindarle la mejor experiencia posible. Siéntase libre de ponerse en contacto con nosotros si necesita más información o asistencia.
        </p>
        <input type='checkbox' onChange={handleAceptarCondiciones} checked={aceptarCondiciones} /> Aceptar
        <button onClick={handleCloseCondiciones}>Cerrar</button>
      </div>
    </div>
  );
};

export default Condiciones;
