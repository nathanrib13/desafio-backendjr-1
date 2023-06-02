import api from "../axios";

function enviarArquivo(file: any) {
  const formData = new FormData();
  formData.append("file", file);

  api
    .post("clients", formData)
    .then(function () {
      console.log("Arquivo enviado com sucesso!");
    })
    .catch(function (error) {
      console.error("Erro ao enviar o arquivo:", error);
    });
}

function getUsuarios() {
  return api
    .get("/clients")
    .then(function (response) {
      console.log("Usuários obtidos com sucesso:", response.data);
      return response.data;
    })
    .catch(function (error) {
      console.error("Erro ao obter os usuários:", error);
      throw error;
    });
}

export { enviarArquivo, getUsuarios };
