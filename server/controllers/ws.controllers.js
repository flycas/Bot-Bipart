const { MessageMedia } = require("whatsapp-web.js");
const Cliente = require("../ws-client/wsClient.js");
const pool = require("../db.js");
const fs = require("fs");
const path = require("path");

const cliente = new Cliente();

const envioMensaje = async (req, resp) => {
  try {
    const message = req.body.message;
    let msjEnviado = {};
    [resultado] = await pool.query(
      "SELECT contacto FROM clients WHERE mensaje = 'SI'"
    );
    resultado.forEach(async (fila) => {
      let { contacto } = fila;
      msjEnviado = await cliente.sendMessage(`${contacto}@c.us`, message);
    });

    console.log(msjEnviado);
    resp.json("El mensaje se envió correctamente");
  } catch (error) {
    console.error(error);
    resp.send(error);
  }
};

const envioMsjMedia = async (req, resp) => {
  try {
    const folder =
      "C:/Users/mauri/Documents/programacion/Practicas/Veps-Prueba";
    let files = fs.readdirSync(folder);
    let media = "";
    let number = "";
    let msjEnviado = {};
    files.forEach(async (file) => {
      let f = file.slice(0, 11);
      file = path.join(folder, file);
      media = MessageMedia.fromFilePath(`${file}`);
      [number] = await pool.query(
        "SELECT contacto FROM clients WHERE vep='si' && cuit=?",
        f
      );
      number.forEach(async (row) => {
        let { contacto } = row;
        msjEnviado = await cliente.sendMessage(`${contacto}@c.us`, media);
        console.log(msjEnviado);
        console.log(msjEnviado._data.to.user);
      });
    });
    resp.json("Mensaje enviado Correctamente");
  } catch (error) {
    console.error(error);
    resp.send(error);
  }
};

const envioRecordatorio = async (req, resp) => {
  try {
    const message = req.body.message;
    let msjEnviado = {};
    [resultado] = await pool.query(
      "SELECT contacto FROM clients WHERE recordatorio = 'SI'"
    );
    resultado.forEach(async (fila) => {
      let { contacto } = fila;
      msjEnviado = await cliente.sendMessage(`${contacto}@c.us`, message);
    });

    console.log(msjEnviado);
    resp.json("El mensaje se envió correctamente");
  } catch (error) {
    console.error(error);
    resp.send(error);
  }
};

module.exports = {
  envioMensaje: envioMensaje,
  envioMsjMedia: envioMsjMedia,
  envioRecordatorio: envioRecordatorio,
};
