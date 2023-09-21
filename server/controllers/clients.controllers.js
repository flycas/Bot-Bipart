const cuitRecordatorio = (req, res) => {
  res.send("Obteniendo Cuits para recordatorio");
};

const cuitMensaje = (req, res) => {
  res.send("Obteniendo Cuits para mensaje");
};

const cuitVep = (req, res) => {
  console.log(req.body);
  res.send("Creando Cuits para vep");
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
  cuitVep: cuitVep,
  updateClient: updateClient,
  deleteClient: deleteClient,
};
