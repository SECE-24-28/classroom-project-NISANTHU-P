import styled from "styled-components";

export const PositionStyle = styled.div`
.element{
height: 500px;
width: 300px;
background-color: blue;
margin-top: 50px;
}

.element-1{
height: 100px;
width: 100px;
background-color: red;
margin-top: 50px;
// position: sticky;
position: relative;
top: 100px;
left: 20px;
}
.square{
width: 1000px;
height: 1000px;
background-color: green;
position: relative;
left: 100px;
}

.square__element{
background-color: yellow;
width: 200px;
height: 200px;
position: relative;
top: 100px;
left: 200px;
}

`;