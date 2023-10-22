export const insertDataToForm = (data) => {
  const formData = new FormData();

  formData.append('nombre', data.nombre);
  formData.append('apellido', data.apellido);
  formData.append('segundo_apellido', data.segundo_apellido);
  formData.append('email', data.email);
  formData.append('telefono', data.telefono);

  if (data.foto) {
    formData.append('foto', data.foto);
  }
  return formData;
};

export const checkFormIsCompleteAndCorrect = (data, showAlert) => {
  const isNameCorrect = /^[A-Za-zÁ-ÿ\s]{3,19}$/.test(data.nombre.trim());
  const isLastNameCorrect = /^[A-Za-zÁ-ÿ\s]{3,19}$/.test(data.apellido.trim());
  const isSecondLastNameCorrect = /^[A-Za-zÁ-ÿ\s]{3,19}$/.test(data.segundo_apellido.trim());
  const isPhoneCorrect = /^(34|\+34|0034)?[6789]\d{8}$/.test(data.telefono);
  const isMailCorrect = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data.email);

  if (data.nombre.trim() === '' || !isNameCorrect) {
    showAlert('Los datos introducidos en el campo "nombre" no son validos');
    return false;
  }

  if (data.apellido.trim() === '' || !isLastNameCorrect) {
    showAlert('Los datos introducidos en el campo "apellido" no son validos');
    return false;
  }

  if (data.segundo_apellido.trim() === '' || !isSecondLastNameCorrect) {
    showAlert('Los datos introducidos en el campo "segundo apellido" no son validos');
    return false;
  }

  if (data.telefono.trim() === '' || !isPhoneCorrect) {
    showAlert('Los datos introducidos en el campo "telefono" no son validos');
    return false;
  }

  if (data.email.trim() === '' || !isMailCorrect) {
    showAlert('Los datos introducidos en el campo "email" no son validos');
    return false;
  }

  return true;
};
