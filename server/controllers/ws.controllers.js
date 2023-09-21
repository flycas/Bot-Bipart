// const { MessageMedia } = require("whatsapp-web.js");
// const Cliente = require("../repositories/ws.repositories.js");

// const cliente = new Cliente();

// const envioMensaje = async (req, resp) => {
//   try {
//     const number = req.body.number;
//     const message = req.body.message;
//     const msjEnviado = await cliente.sendMessage(`${number}@c.us`, message);
//     console.log(msjEnviado);
//     resp.send(msjEnviado);
//   } catch (error) {
//     console.error(error);
//     resp.send(error);
//   }
// };

// const envioMsjMedia = async (req, resp) => {
//   try {
//     const number = req.body.number;
//     const media = MessageMedia.fromFilePath("C:/Users/mauri/Documents/programacion/Practicas/Node JS/vep.pdf")
//     const msjEnviado = await cliente.sendMessage(`${number}@c.us`, media);
//     console.log(msjEnviado);
//     resp.send(msjEnviado);
//   } catch (error) {
//     console.error(error);
//     resp.send(error);
//   }
// };

// module.exports = {
//   envioMensaje: envioMensaje,
//   envioMsjMedia: envioMsjMedia,
// };
