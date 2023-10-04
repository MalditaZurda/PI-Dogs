const {Dog} = require('../db')

module.exports = async (dog) => {
    const {name, height, weight, life_span} = dog;

    const newDog = await Dog.create({
        name: name,
        height: height,
        weight: weight,
        life_span: life_span
    })

    return newDog;
}