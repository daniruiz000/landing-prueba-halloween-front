const API_URL = process.env.REACT_APP_API_URL;

export const fetchFunction = async (formData) => {
  try {
    const response = await fetch(API_URL, {
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
