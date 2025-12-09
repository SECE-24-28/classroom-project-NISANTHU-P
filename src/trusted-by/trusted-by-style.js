import styled from "styled-components";
export const TrustedByStyle = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
gap: ${props => props.styles?.gap || "2rem"};

.value {
    font-size: 40px;
    font-family: "Work Sans", sans-serif;
    font-weight: 700;
    color: gray;
}
.name {
    font-size: 20px;
    font-family: "Work Sans", sans-serif;
    font-weight: 500;
    color: gray;
    text-transform: uppercase;
}
.main-box {
    position: relative;
    padding: 1rem;
    text-align: center;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    box-shadow: var(--shadow);
    width: ${props => props.styles?.mainBoxWidth || "230px"};
    height: ${props => props.styles?.mainBoxHeight || "200px"};
}
.rectangle {
    border-radius: 10px;
    height: 50%;
    width: 100%;
    z-index: -1;
    left: 0px;
    right: 0px;
    background-color: ${props => props.styles?.rectangleColor || "rgb(0, 197, 190)"};
    position: absolute;
    top: initial;
    bottom: 0px;
}

.parent {
    --shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.3);
    --circle-width: ${props => props.styles?.circleWidth || "90px"};
    padding: 0.8rem;
    border-radius: 10px;
    background-color: white;
    position: relative;
    z-index: 2;
}
.icon {
    position: absolute;
    left: 50%;
    bottom: 0px;
    width: var(--circle-width);
    height: var(--circle-width);
    padding: 0.4rem;
    border-radius: 50%;
    box-shadow: var(--shadow);
    background-color:${({styles})=>styles.backgroundcolor};
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    top: 0px;
    translate: -50% -50%;
}
.circle {
    width: calc(var(--circle-width) - 20px);
    height: calc(var(--circle-width) - 20px);
    padding: 0.4rem;
    border-radius: 50%;
    box-shadow: var(--shadow);
    background-color: rgb(255, 255, 255);
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
}


`;