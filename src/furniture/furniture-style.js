import styled from 'styled-components';

export const FurnitureStyle = styled.div`

    margin: 0;
    font-family: "Poppins", sans-serif;
    background: #fdfdfd;
    

    .hero {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 80px 120px;
    background: linear-gradient(to right, #fff6ee, #ffffff);
    }

    .hero-content {
    max-width: 480px;
    }

    .hero-content h1 {
    font-size: 48px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 20px;
    }

    .orange {
    color: #ff8b00;
    }

    .subtext {
    font-size: 16px;
    color: #444;
    margin-bottom: 35px;
    }

    .btn-group {
    display: flex;
    gap: 20px;
    }

    .btn-dark {
    background: #1c1c1c;
    color: #fff;
    border: none;
    padding: 12px 26px;
    border-radius: 8px;
    font-size: 15px;
    cursor: pointer;
    transition: 0.3s;
    }

    .btn-dark:hover {
    background: #000;
    }

    .btn-light {
    background: transparent;
    border: 1px solid #000;
    padding: 12px 26px;
    border-radius: 8px;
    font-size: 15px;
    cursor: pointer;
    transition: 0.3s;
    }

    .btn-light:hover {
    background: #f0f0f0;
    }

    .hero-image img {
    width: 550px;
    height: auto;
    object-fit: cover;

    border-top-left-radius: 300px;
    border-bottom-left-radius: 300px;
    }

`;