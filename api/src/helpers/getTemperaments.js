require("dotenv").config();
const axios = require("axios");
const URL = "https://api.thedogapi.com/v1";
const { API_KEY } = process.env

module.exports = async () => {
    const {data} = await axios.get(`${URL}/breeds?api_key=${API_KEY}`)
    const temperamentsApi = [];
    data.map((breed) => temperamentsApi.push(breed.temperament));
    const notNull = temperamentsApi.filter((temperament) => temperament !== null);
    const strings = notNull.join(",").trim().split(",");
    const noSpaces = strings.map(temperament => temperament.trim());
    const noDuplicates = [...new Set(noSpaces)];
    const allTemperaments = noDuplicates.filter(temperament => temperament !== "").sort();

    return [...allTemperaments];
}