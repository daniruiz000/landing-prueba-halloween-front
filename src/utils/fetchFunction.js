export const fetchFunction = async (formData) => {
  try {
    const response = await fetch('https://landing-promo-prueba-api.onrender.com/user/add-user', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      return true;
    } else {
      const errorText = await response.text();
      console.log(errorText);
      alert(`Error: ${response.status} - ${response.statusText}\n${errorText}`);
    }
  } catch (error) {
    console.error(error);
    alert(`Error en fetchFunction: ${error}`);
  }
};
