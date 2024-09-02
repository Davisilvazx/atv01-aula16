const axios = require('axios');

async function fetchNews() {
  const requests = [
    axios.get('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=YOUR_API_KEY'),
    axios.get('https://api.nytimes.com/svc/topstories/v2/world.json?api-key=YOUR_API_KEY'),
    axios.get('https://api.nytimes.com/svc/topstories/v2/business.json?api-key=YOUR_API_KEY')
  ];
  const responses = await Promise.all(requests);
  responses.forEach((response, index) => {
    console.log(`Requisição ${index + 1}:`);
    console.log(`Status: ${response.status}`);
    console.log(`Dados: ${JSON.stringify(response.data, null, 2)}`);
    console.log('---');
  });
}

fetchNews();