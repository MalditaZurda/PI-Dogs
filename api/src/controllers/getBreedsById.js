const getApiBreedsById = require('../helpers/getApiBreedsById')

module.exports = async (id) => {
    const breed = await getApiBreedsById(id);
    if(breed) return breed
    return new Error('Error en controller')
}