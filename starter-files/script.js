
const API_ENDPOINT = 'https://yesno.wtf/api';

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */


const button = document.getElementById('button');
const output = document.getElementById('answer');

async function fetchAnswer() {
  output.textContent = 'Cargando...';

  try {
    const response = await fetch(API_ENDPOINT);

    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }

    const data = await response.json();


    output.textContent = `Respuesta: ${data.answer}`;

    // Limpiar después de 3 segundos
    setTimeout(() => {
      output.textContent = '';
    }, 3000);
  } catch (error) {
    output.textContent = `Error: ${error.message}`;
  }
}

// Asociar evento al botón
button.addEventListener('click', fetchAnswer);