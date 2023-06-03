import { useNavigate } from "react-router-dom";
import { autenticarComGoogle } from "../../services/cliente/client";
import { StyleDashboardPage } from "./style";

export const DashboardPage = () => {
  const navigate = useNavigate();

  return (
    <StyleDashboardPage>
      <h1> Para visualizar os dados faça login </h1>

      <button
        onClick={() => {
          autenticarComGoogle();
        }}
      >
        login com google
      </button>
      <div>
        <button onClick={() => navigate("/")}>
          {" "}
          &#129044; Voltar para arquvio
        </button>
      </div>
    </StyleDashboardPage>
  );
};
