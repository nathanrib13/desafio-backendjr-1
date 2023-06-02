document
  .getElementById("csvUpload")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var fileInput = document.getElementById("csvFile");
    var file = fileInput.files[0];

    var formData = new FormData();
    formData.append("file", file);

    fetch("http://localhost:3000/clients", {
      method: "POST",
      body: formData,
    })
      .then(function (response) {
        if (response.ok) {
          console.log("Arquivo enviado com sucesso!");
        } else {
          console.error("Erro ao enviar o arquivo:", response.statusText);
        }
      })
      .catch(function (error) {
        console.error("Erro na requisição:", error);
      });
  });
