import styled from "styled-components";

export const FlexBoxStyle = styled.div`
  
margin:150px;
  .element {
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1300px;
    padding-top: 0rem;
    padding-bottom: 0rem;
    padding-left: 0rem;
    padding-right: 0rem;
    border-radius: 200px;
    background-color: red;
    border: 2px solid red;
  }
  @media (max-width: 768px) {
    .element {
      border-radius: 10px;
    }
  }

  .element__item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0px;
    padding-left: 1.5rem;
  }

  .title {
    font-weight: 600;
    font-size: 32px;
    font-family: "Work Sans",normal, sans-serif;
    text-align: center;
    color: white;
    font-weight: bold;
  }


  .sub-title {
    font-weight: 500;
    font-size: 20px;
    font-family: "Work Sans",normal, sans-serif;
    text-align: center;
    max-width: 600px;
    color: white;
  }

`;
