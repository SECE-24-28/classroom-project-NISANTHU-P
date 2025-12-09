import styled from "styled-components";

export const UseStateStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: white;

  h1 {
    font-size: 2.5rem;
    color: #2c3e50;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 3rem;
    color: #130760ff;
    margin-bottom: 2rem;
  }

  button {
    padding: 1rem 2rem;
    margin: 0.5rem;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background: #3498db;
    color: white;
  }

  button:hover {
    background: #2980b9;
  }
`;
