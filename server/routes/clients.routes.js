const { Router } = require("express");
const {
 cuitRecordatorio,
 cuitMensaje,
 cuitVep,
  updateClient,
  deleteClient,
} = require("../controllers/clients.controllers.js");

const clientsRouter = Router();

clientsRouter.get("/msg-recordatorio", cuitRecordatorio);

clientsRouter.get("/msg", cuitMensaje);

clientsRouter.get("/vep", cuitVep);

clientsRouter.put("/client/:id", updateClient);

clientsRouter.delete("/client/:id", deleteClient);

module.exports = clientsRouter;
