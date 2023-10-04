const getApiBreeds = require('../helpers/getApiBreeds');

module.exports = async () => {
    const apiBreeds = await getApiBreeds();
    if (apiBreeds) return [...apiBreeds];
    return new Error('controller Error')
}