require("dotenv").config();
const axios = require("axios");
const URL = "https://api.thedogapi.com/v1";
const { API_KEY } = process.env;

module.exports = async (breedId) => {
  const response = await axios.get(`${URL}/breeds/${breedId}?api_key=${API_KEY}`);
  let {id, name, height, weight, life_span, breed_for, breed_group, reference_image_id} = response.data;

  let image = await axios.get(`${URL}/images/${reference_image_id}?api_key=${API_KEY}`);

  let breed = {
    id: id,
    name: name,
    height: height.metric,
    weight: weight.metric,
    life_span: life_span,
    breed_for: breed_for,
    breed_group: breed_group,
    image: image.data.url
  }

  if(breed) return breed
  
  return new Error(`Error: helper/apidogsID`)
};