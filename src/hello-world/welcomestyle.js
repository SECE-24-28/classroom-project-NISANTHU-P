import styled from 'styled-components';

export const WelcomeStyle = styled.div`
  background-color: #ffffffff;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
  display: flex;
  h1{color: red;}
  h3{weight : 800;}
  p{
  margin: 50px;
  font-size: 20px;
  @media (max-width: 600px) {
    color: blue;
    margin: 10px;
    font-size: 15px;
  }
  }
  `;