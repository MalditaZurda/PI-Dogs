const getTemperaments = require("../helpers/getTemperaments");
const { Temperament } = require("../db");

module.exports = async () => {
    try{
        let temperamentsDB = await Temperament.findAll();
        if (temperamentsDB.length === 0) {
            const temperaments = await getTemperaments();
            temperaments.forEach(async (temperament) => {
                await Temperament.findOrCreate({where:{name: temperament}})
            });
            temperamentsDB = await Temperament.findAll();
            return [...temperamentsDB];
        } else {
            return temperamentsDB;
        }
    } catch(error){
        return `Error al traer temperamentos: ${{error: error.message}}`
    }
};
