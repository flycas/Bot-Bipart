const { Router } = require("express");
const {
  envioMensaje,
  envioMsjMedia,
  envioRecordatorio,
} = require("../controllers/ws.controllers.js");

const router = Router();

router.post("/mensaje", envioMensaje);

router.post("/recordatorio", envioRecordatorio);

router.post("/msj-media", envioMsjMedia);

module.exports = router;
