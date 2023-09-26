const dogsRouter = require('express').Router()
const getDogsApi = require('../helpers/getDogsFromApi')

dogsRouter.get("/", async (req, res) => {
    try{
        const dogs = await getDogsApi();
        res.json(dogs)
    } catch(error){
        res.status(404).json('error 404')
    }
});

dogsRouter.get("/:idRaza", (req, res) => {
    res.send("Esta ruta obtiene el detalle de una raza específica. Es decir que devuelve un objeto con la información pedida en el detalle de un perro.")
    // La raza es recibida por parámetro (ID).
    // Tiene que incluir los datos de los temperamentos asociadas a esta raza.
    // Debe funcionar tanto para los perros de la API como para los de la base de datos.
})

dogsRouter.post("/", (req, res) => {
    res.send("Esta ruta recibirá todos los datos necesarios para crear un nuevo perro y relacionarlo con los temperamentos asociados.")
    // Toda la información debe ser recibida por body.
    // Debe crear la raza de perro en la base de datos, y esta debe estar relacionada con los temperamentos indicados (al menos uno).
})

dogsRouter.get("/temperaments", (req, res) => {
    res.send("Obtiene todos los temperamentos existentes.")
    // Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí.
})



module.exports = dogsRouter;