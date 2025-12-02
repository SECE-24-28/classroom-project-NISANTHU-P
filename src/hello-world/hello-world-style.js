import styled from "styled-components";
export const HelloWorldStyle = styled.div`
background-color: #b2d4d1ff;
allign-items: center;
justify-content: center;
display: flex;

h1{
  color: #033c70ff;
}
.com{
    margin-top: 05px;
    margin-bottom: 50px;
  
}

form {
  width: 350px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: #f9f9f9;
  margin-bottom: 30px;
}

form p {
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: 600;
}

input[type="radio"] {
  margin-right: 6px;
}

label {
  margin-right: 15px;
  font-size: 15px;
}

input[type="text"],
input[type="email"],
input[type="number"] {
  width: 100%;
  padding: 7px 10px;
  border: 1px solid #bbb;
  border-radius: 4px;
  margin-top: 4px;
  font-size: 15px;
}

form br {
  line-height: 20px;
}

button {
  padding: 8px 16px;
  font-size: 15px;
  border: none;
  border-radius: 4px;
  background-color: #0078e7;
  color: white;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background-color: #005bb5;
}

ol,
ul {
  margin-top: 20px;
  margin-left: 40px;
}

li {
  margin-bottom: 5px;
  font-size: 15px;
}

a {
  display: inline-block;
  margin-top: 20px;
  font-size: 16px;
  color: #0078e7;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

table {
  margin-top: 20px;
  border-collapse: collapse;
  width: 400px;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
}

th,
td {
  padding: 10px;
  border: 1px solid #999;
  text-align: left;
  font-size: 15px;
}

th {
  background-color: #e0e0e0;
  font-weight: bold;
}
`;