document
  .getElementById("csvUpload")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o envio do formulário

    var fileInput = document.getElementById("csvFile");
    var file = fileInput.files[0];

    var formData = new FormData();
    formData.append("file", file);

    // Faz a requisição para a rota "/clients" usando o método POST
    fetch("http://localhost:3000/clients", {
      method: "POST",
      body: formData,
    })
      .then(function (response) {
        // Lida com a resposta do servidor
        if (response.ok) {
          // Se a resposta for bem-sucedida (status 200-299), faça algo
          console.log("Arquivo enviado com sucesso!");
        } else {
          // Caso contrário, lida com o erro
          console.error("Erro ao enviar o arquivo:", response.statusText);
        }
      })
      .catch(function (error) {
        // Lida com erros na requisição
        console.error("Erro na requisição:", error);
      });
  });
