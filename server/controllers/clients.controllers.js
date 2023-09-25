const fs = require("fs");
const path = require("path");
const pool = require("../db.js");

const cuitRecordatorio = async (req, res) => {
  const [result] = await pool.query(
    "SELECT * from clients WHERE  RECORDATORIO='SI'"
  );
  let contacto = "";
  for (let i = 0; i < result.length; i++) {
    contacto += result[i].cuit + "->" + result[i].contacto + "\n";
  }
  console.log(contacto);
  res.json(result);
};

const cuitMensaje = async (req, res) => {
  const [result] = await pool.query(
    "SELECT * from clients WHERE  MENSAJE='SI'"
  );
  let contacto = "";
  for (let i = 0; i < result.length; i++) {
    contacto += result[i].contacto + "\n";
  }
  console.log(contacto);
  res.json(result);
};

const updateClient = (req, res) => {
  res.send("Actualizando Cliente");
};

const deleteClient = (req, res) => {
  res.send("Eliminando Cliente");
};

module.exports = {
  cuitRecordatorio: cuitRecordatorio,
  cuitMensaje: cuitMensaje,
  updateClient: updateClient,
  deleteClient: deleteClient,
};
