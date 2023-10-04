const getTemperaments = require('../controllers/getTemperaments')
module.exports = async (req, res) => {
    try{
        let temperamentsDB = getTemperaments();
        res.status(200).json(temperamentsDB)
    } catch(error){
        res.status(400).send({error: error.message})
    }
}