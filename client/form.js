function UploadingDb() {
  document.addEventListener("DOMContentLoaded", () => {
    const excelForm = document.getElementById("excelForm");
    const resultDiv = document.getElementById("result");

    excelForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(excelForm);
      try {
        const response = await fetch("http://localhost:4000/upload-excel", {
          method: "POST",
          body: formData,
        });
        if (response.ok) {
          const data = await response.json();
          resultDiv.innerHTML = JSON.stringify(data, null, 2);
        } else {
          resultDiv.innerHTML = "Error al subir Archivo Excel";
        }
      } catch (error) {
        console.error(error);
        resultDiv.innerHTML = "Error de red al subir Archivo Excel";
      }
    });
  });
}
UploadingDb();
/* ----------------------------------------------------- */
function UpdatingDb() {
  document.addEventListener("DOMContentLoaded", () => {
    const formUpdate = document.getElementById("formUpdate");
    const resultDiv = document.getElementById("result");

    formUpdate.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(formUpdate);
      try {
        const response = await fetch("http://localhost:4000/updateDb", {
          method: "PUT",
          body: formData,
        });
        if (response.ok) {
          const data = await response.json();
          resultDiv.innerHTML = JSON.stringify(data, null, 2);
        } else {
          resultDiv.innerHTML = "Error al actualizar Base de Datos";
        }
      } catch (error) {
        console.error(error);
        resultDiv.innerHTML = "Error de red al actualizar Base de Datos";
      }
    });
  });
}

UpdatingDb();
/* ----------------------------------------------------- */
const btnSend = document.getElementById("sendMsg");
btnSend.addEventListener("click", enviarTexto());

function enviarTexto() {
  document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("textForm");
    const responseDiv = document.getElementById("MsgResponse");
    formulario.addEventListener("submit", async (e) => {
      e.preventDefault();
      const formData = new FormData(formulario);
      const message = {};
      formData.forEach((value, key) => {
        message[key] = value;
      });

      try {
        const response = await fetch("http://localhost:4000/mensaje", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(message),
        });
        console.log(response);
        if (response.ok) {
          const data = await response.json();
          responseDiv.innerHTML = JSON.stringify(data, null, 2);
        } else {
          responseDiv.innerHTML = "Error al enviar el mensaje";
        }
      } catch (error) {
        console.error(error);
        responseDiv.innerHTML = `ERROR: ${error.message}`;
      }
    });
  });
}
/* ---------------------------------------------------------- */

const btnRec = document.getElementById("sendRec");
btnRec.addEventListener("click", enviarRecordatorio());

function enviarRecordatorio() {
  document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("textForm");
    const responseDiv = document.getElementById("MsgResponse");
    formulario.addEventListener("submit", async (e) => {
      e.preventDefault();
      const formData = new FormData(formulario);
      const message = {};
      formData.forEach((value, key) => {
        message[key] = value;
      });

      try {
        const response = await fetch("http://localhost:4000/recordatorio", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(message),
        });
        console.log(response);
        if (response.ok) {
          const data = await response.json();
          responseDiv.innerHTML = JSON.stringify(data, null, 2);
        } else {
          responseDiv.innerHTML = "Error al enviar el mensaje";
        }
      } catch (error) {
        console.error(error);
        responseDiv.innerHTML = `ERROR: ${error.message}`;
      }
    });
  });
}
/* ---------------------------------------------------------- */

const btnVep = document.getElementById("sendVep");
const responseDiv = document.getElementById("MsgResponse");
btnVep.addEventListener("click", async () => {
  try {
    const response = await fetch("http://localhost:4000/msj-media", {
      method: "POST",
    });
    console.log(response);
    if (response.ok) {
      responseDiv.innerHTML = `El Vep se envió correctamente`;
    } else {
      responseDiv.innerHTML = "Error al enviar Vep";
    }
  } catch (error) {
    console.error(error);
    responseDiv.innerHTML = `ERROR: ${error.message}`;
  }
});
