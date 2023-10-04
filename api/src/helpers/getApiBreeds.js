require("dotenv").config();
const axios = require("axios");
const URL = "https://api.thedogapi.com/v1/breeds";
const { API_KEY } = process.env;

module.exports = async () => {
  const { data } = await axios.get(`${URL}/?api_key=${API_KEY}`);
  
  let breeds = [...data];
  let apiBreeds = [];

  breeds.map((breed) => {
    let { id, name, height, weight, life_span, image } = breed;

    let apiBreed = {
      id: id,
      name: name,
      height: height.metric,
      weight: weight.metric,
      life_span: life_span,
      image: image.url
    };

    apiBreeds.push(apiBreed);
  });
  
  if (apiBreeds) return apiBreeds;

  return new Error(`Error: error al traer las razas desde la api`)
};