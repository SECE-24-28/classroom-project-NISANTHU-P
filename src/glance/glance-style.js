import styled from 'styled-components';

export const GlanceStyle = styled.div`

.atglance{
position: relative;
padding: 3rem 0px;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 25px;
}

.title{
    font-size: 40px;
    font-weight: 600;
    text-align: center;
    font-family: Inter, sans-serif;
    margin-bottom: 2rem;
    }

.glance{
    color: rgb(252, 41, 71);
}

.ele-1, .ele-2{
    display: flex;
    gap: 25px;
    justify-content: center;
}

.colleges, .students, .studymaterials, .professionaltrainers{
    position: relative;
    width: 450px;
    display: flex;
    padding: 1rem 1rem 0px;
    justify-content: space-between;
    align-items: center;
    border-radius: 12px;
    font-family: Inter, sans-serif;
    overflow: visible;
    z-index: 1;
}

.details{
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 5px;
    color: rgb(51, 65, 85);
}

.value{
    font-size: 24px;
    font-weight: 700;
    margin: 0px;
    padding-bottom: 20px;
    color: rgb(0, 0, 0);
}

.colleges{
    background-color: rgb(255, 223, 228);
}

.students{
    background-color: rgb(226, 240, 250);
}

.studymaterials{
    background-color: rgb(222, 255, 236);
}

.professionaltrainers{
    background-color: rgb(255, 230, 199);
}

img{
    position: absolute;
    bottom: -25px;
    right: 20px;
    height: 120px;
    width: auto;
    object-fit: contain;
    z-index: 2;
}

`;