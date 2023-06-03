import styled from "styled-components";

export const StyleDashboardPage = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
  align-items: center;
  background-color: #4dbce9;
  color: white;

  h1 {
    font-size: 24px;
    margin-bottom: 20px;
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

  > div {
    position: fixed;
    top: 0;
    left: 0;
    margin: 40px;

    > button {
      font-size: 25px;
      padding: 10px 20px;
      background-color: #4dbce9;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  }
`;
