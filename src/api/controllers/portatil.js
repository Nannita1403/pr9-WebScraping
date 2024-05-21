const Portatil = require("../models/portatil");
const products = require("../../../products.json");


const insertManyPortatiles = async (req, res, next) => {
    try {
        await Portatil.insertMany(products.results);
        console.log(products.results);
        return res.status(201).json("Todos los productos subidos a la BBDD");
    } catch (error) {
        return res.status(400).json("Error al insertar los Portatiles");
    }
};

const getAllPortatiles = async (req, res, next)=> {
    try {
        const allPortatiles = await Portatil.find();
        return res.status(200).json(allPortatiles);
    } catch (error) {
        return res.status(400).json(" Error al mostrar los Portatiles");
    }
}



module.exports = {
    insertManyPortatiles,
    getAllPortatiles
}
