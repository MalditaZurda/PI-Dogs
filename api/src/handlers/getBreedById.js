const getBreedsById = require('../controllers/getBreedsById')

module.exports = async (req, res) => {
    try{
        const {id} = req.params;
        const breed = await getBreedsById((id));
        return res.status(200).json(breed);
    } catch(error){
        res.status(400).json({error: error.message})
    }
}