const { Client, LocalAuth } = require("whatsapp-web.js");

class Cliente extends Client {
  constructor() {
    super({
      puppeteer: {
        headless: false,
      },
      authStrategy: new LocalAuth({
        clientId: "bipart",
      }),
    });

    this.on("qr", (qr) => {
      console.log("QR Recibido", qr);
    });

    this.on("ready", () => {
      this.status = true;
      console.log("Login Exitoso");
    });

    this.on("auth_failure", () => {
      this.status = false;
      console.log("Login Fallido");
    });
    this.initialize();
  }
}

module.exports = Cliente;
