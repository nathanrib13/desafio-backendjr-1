import api from "../axios";

const enviarArquivo = async (file: any) => {
  try {
    await api.post("/clients", file, {
      headers: {
        "Content-Type": `multipart/form-data`,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

const autenticarComGoogle = () => {
  window.location.href = "http://localhost:3000/auth/google";
};

function getUsuarios() {
  return api
    .get("/read/clients")
    .then(function (response) {
      console.log("Usuários obtidos com sucesso:", response.data);
      return response.data;
    })
    .catch(function (error) {
      console.error("Erro ao obter os usuários:", error);
      throw error;
    });
}

export { enviarArquivo, getUsuarios, autenticarComGoogle };
