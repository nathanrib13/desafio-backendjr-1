import { useState } from "react";
import api from "../../services/axios";
import { StyleIndexPage } from "./style";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

export const IndexPage = () => {
  const [fileInputed, setFileInputed] = useState<File | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!fileInputed) {
      alert("Nenhum arquivo selecionado");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", fileInputed);

      await enviarArquivo(formData);
    } catch (error) {
      console.error("Erro ao enviar o arquivo:", error);
    }
  };

  const enviarArquivo = async (formData: FormData) => {
    try {
      const apiResponse = await api.post("clients", formData);
      if (apiResponse.data[0].message.startsWith("nao")) {
        alert("erro ao cadastrar clientes. revise os dados e tente novamnete");
      } else {
        alert("Clientes cadastrados com sucesso");
      }
    } catch (error) {
      throw error;
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setFileInputed(file);
  };

  return (
    <StyleIndexPage>
      <form id="csvUpload" onSubmit={handleSubmit}>
        <h1>Envie aqui seu arquivo CSV</h1>
        <input
          type="file"
          id="csvFile"
          name="csvFile"
          accept=".csv"
          onChange={handleFileChange}
        />
        <div>
          <button type="submit">Enviar</button>
          <button onClick={() => navigate("/dashboard")}>
            visualizar dados
          </button>
        </div>
      </form>
    </StyleIndexPage>
  );
};
