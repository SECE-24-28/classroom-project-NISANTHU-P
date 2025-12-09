import styled from "styled-components";
export const OurCourseStyle = styled.div`


img{
    border: 1px solid rgb(221, 221, 221);
    border-radius: 10px;
    aspect-ratio: 3 / 2;
    width: 100%;
    object-fit: cover;
}

.ourcourse{
    max-width: 1280px;
    margin: 0px auto;
    display: flex;
    gap: 3rem;
    padding-top: 3rem;
    flex-direction: column;
}

.heading{
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
}

.title{
    font-weight: 600;
    font-size: 48px;
    text-align: center;
    font-family: "Work Sans", sans-serif;
}

.sub_title{
    font-size: 18px;
    text-align: center;
    font-family: "Work Sans", sans-serif;
    font-weight: 500;
    color: rgb(86, 102, 131);
    max-width: 700px;
}

.courses{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 360px));
    place-items: center;
    gap: 2rem;
    max-width: 1400px;
}

.aptitude,.techinical,.mern{
    border: 1px solid rgb(221, 221, 221);
    padding: 0.5rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.8rem;
    position: relative;
}

.course_name{
        font-size: 1rem;
        width: 100%;
        font-family: Poppins, normal, sans-serif;
        font-weight: 600;
}

.details{
    font-weight: 400;
    font-family: Poppins, sans-serif;
    font-style: normal;
}

.now{
    font-size: 1.5rem;
    color: rgb(52, 52, 52);
    display: inline-flex;
    align-items: center;
    font-family: Poppins, sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    font-weight: 780;
}

.original{
    font-size: 1.5rem;
    text-decoration: line-through;
    color: rgb(173, 172, 172);
    display: inline-flex;
    align-items: center;
    font-family: Source Sans\ 3, sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    font-weight: 400;
    position: relative;
    top: 0px;
    left: 10px;
}

.gst{
    font-size: 1.1rem;
    color: rgb(252, 41, 71);
    font-family:  Poppins, sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    font-weight: 700;
    position: relative;
    top: 10px;
}

.Buy_Now{
    padding: 12px 16px;
    width: 100%;
    font-size: 18px;
    border-radius: 6px;
    transition: 0.3s;
    white-space: nowrap;
    font-family: "Work Sans", sans-serif;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    color: rgb(255, 255, 255);
    background: rgb(252, 41, 71);
    border: 1px solid rgb(252, 41, 71);
}

a{
    color: rgb(9, 9, 9);
    padding: 12px 16px;
    width: 100%;
    font-size: 18px;
    border-radius: 6px;
    background: rgb(232, 232, 232);
    border: 1px solid rgb(232, 232, 232);
    transition: 0.3s;
    white-space: nowrap;
    cursor: pointer;
    font-family: "Work Sans", sans-serif;
    font-weight: 500;
    text-decoration: none;
    
}

.buy{
    gap: 1rem;
    display: flex;
    align-items: center;
    flex-direction: row;
}

`;