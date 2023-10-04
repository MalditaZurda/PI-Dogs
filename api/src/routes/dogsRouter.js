const dogsRouter = require('express').Router()
const getBreeds = require('../handlers/getBreeds')
const getBreedById = require('../handlers/getBreedById')
const createDog = require('../helpers/createBreed')


dogsRouter.get("/", getBreeds);

dogsRouter.get("/:id", getBreedById)


dogsRouter.post("/", (req, res) => {
    const response = createDog(req.body);
    res.json(response);
})

module.exports = dogsRouter;