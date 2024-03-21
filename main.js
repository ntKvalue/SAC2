// main.js

// Función para enviar una solicitud a la API de OpenAI
function sendToOpenAI(prompt) {
  const apiKey = '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'; // Reemplaza con tu clave de API
  const endPoint = 'https://api.openai.com/v1/engines/davinci-codex/completions'; // Endpoint de la API

  // Realiza una llamada POST a la API
  const response = post(apiKey, endPoint, prompt);

  // Procesa la respuesta y muestra el resultado en tu widget
  return response;
}

// Función para realizar una solicitud POST
function post(apiKey, endPoint, prompt) {
  // Implementa la lógica para realizar una solicitud POST aquí
  // Puedes usar bibliotecas como Axios o fetch para hacer la llamada

  return result;
}


