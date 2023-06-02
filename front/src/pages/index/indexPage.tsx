import { useRef } from "react";
import { enviarArquivo } from "../../services/cliente/client";
import { StyleIndexPage } from "./style";
import { useNavigate } from "react-router-dom";

export const IndexPage = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    const fileInput = fileInputRef.current;

    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      enviarArquivo(file);
    }
  };

  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <StyleIndexPage>
      <form id="csvUpload" action="">
        <h1>Envie aqui seu arquivo CSV</h1>
        <input type="file" id="csvFile" name="csvFile" accept=".csv" />

        <button type="submit" onSubmit={handleClick}>
          Enviar
        </button>
      </form>

      <button onClick={handleLogin}>
        {" "}
        faça login para Visualizar dados enviados
      </button>
    </StyleIndexPage>
  );
};
