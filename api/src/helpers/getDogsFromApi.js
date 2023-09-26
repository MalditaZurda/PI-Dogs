require('dotenv').config()
const axios = require('axios')
const URL = "https://api.thedogapi.com/v1/breeds" 
const {API_KEY} = process.env

module.exports = async () => {
    const {data} = await axios.get(`${URL}/?limit=8&api_key=${API_KEY}`)
    
    
    return [...dogsByBreeds];
}