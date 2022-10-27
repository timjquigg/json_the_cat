const request = require('request');

const breedToFind = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedToFind}`, (error, response, body) => {

  if (error) {
    console.log(error);
    return;
  }
  
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log(`${breedToFind} not found.`);
    return;
  }
  console.log(data[0].name);
  console.log(data[0].description);
});