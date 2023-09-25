/*
  Realizamos envío de datos desde el front para enviar mensajes
*/

document
  .getElementById("textForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const msgArea = document.getElementById("txtArea").value;

    await fetch("/mensaje", {
      method: "POST",
      headers: {
        "content-type": "aplication/json",
      },
      body: JSON.stringify({ msgArea }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      });
  });
