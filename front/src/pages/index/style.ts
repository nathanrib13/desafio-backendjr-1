import styled from "styled-components";

export const StyleIndexPage = styled.section`
  width: 100%;
  background-color: #4dbce9;
  color: white;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 300px;
  }
  form > h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
    margin-bottom: 50px;
  }
  input[type="file"] {
    background-color: transparent;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    cursor: pointer;
    padding: 40px 25px;
    border-radius: 4px;
    border: 2px white dashed;
    margin-bottom: 25px;
  }

  /* Estilize o botão de upload quando o cursor estiver sobre ele */
  input[type="file"]:hover {
    background-color: white;
    color: #4dbce9;
  }

  div {
    display: flex;
    gap: 190px;
  }

  button {
    background-color: white;
    color: #4dbce9;
    border: 2px solid #4dbce9;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    border-radius: 4px;
  }

  button:hover {
    background-color: #4dbce9;
    color: white;
    border: 2px solid white;
  }
`;
