export const añadirDatos = (datos) => {
  const formData = new FormData();

  formData.append('nombre', datos.nombre);
  formData.append('apellido', datos.apellido);
  formData.append('segundo_apellido', datos.segundo_apellido);
  formData.append('email', datos.email);
  formData.append('telefono', datos.telefono);

  if (datos.foto) {
    formData.append('foto', datos.foto);
  }
  return formData;
};

export const verificarFormularioCompleto = (datos) => {
  const nombreValido = /^[A-Za-zÁ-ÿ\s]{2,19}$/.test(datos.nombre.trim());
  const apellidoValido = /^[A-Za-zÁ-ÿ\s]{2,19}$/.test(datos.apellido.trim());
  const segundoApellidoValido = /^[A-Za-zÁ-ÿ\s]{2,19}$/.test(datos.segundo_apellido.trim());
  const telefonoValido = /^(34|\+34|0034)?[6789]\d{8}$/.test(datos.telefono);
  const emailValido = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(datos.email);

  return nombreValido && apellidoValido && segundoApellidoValido && telefonoValido && emailValido && datos.nombre.trim() !== '' && datos.apellido.trim() !== '' && datos.segundo_apellido.trim() !== '' && datos.email.trim() !== '' && datos.telefono.trim() !== '';
};
