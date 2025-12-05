import styled from "styled-components";

export const AiIconStyle = styled.div`
.ai-icon {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    background: #a4d45cff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    cursor: pointer;
    z-index: 1001;
    border: 5px solid #7f7171ff;
}

p{
color: #c10c0cff;
font-family: poppins, sans-serif;
font-size: 1.2rem;
font-weight: 1000;
}

.ai-icon:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
}
`;