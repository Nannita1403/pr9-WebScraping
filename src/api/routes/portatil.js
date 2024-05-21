const { getAllPortatiles, insertManyPortatiles } = require("../controllers/portatil");

const portatilesRouter = require("express").Router();

portatilesRouter.post ("/info_pcComponents", insertManyPortatiles);
portatilesRouter.get ("/", getAllPortatiles)

module.exports = portatilesRouter;