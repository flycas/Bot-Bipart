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
