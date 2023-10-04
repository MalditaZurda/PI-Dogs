const getBreeds = require('../controllers/getBreeds')

module.exports = async (req, res) => {
    try{
        const apiBreeds = await getBreeds();
        return res.status(200).json(apiBreeds);
    } catch(error){
        res.status(400).json({error: error.message})
    }
}