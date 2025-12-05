import styled from "styled-components";

export const ContactStyle = styled.div`

.contact-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
    background: #f8f9fa;
    min-height: 100vh;
    text-align: center;
}

.contact-container h2 {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 3rem;
    color: #2c3e50;
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.contact-form input,
.contact-form textarea {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background: #fff;
}

.contact-form input:focus,
.contact-form textarea:focus {
    outline: none;
    border-color: #3498db;
}

.contact-form button {
    padding: 12px;
    background: #3498db;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
}

.contact-form button:hover {
    background: #2980b9;
}

.success-message {
    background: #27ae60;
    color: #fff;
    padding: 1rem;
    border-radius: 4px;
    text-align: center;
}

.contact-info {
    background: #fff;
    padding: 3rem;
    border-radius: 8px;
    border: 1px solid #ddd;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    max-width: 400px;
    margin: 0 auto;
}

.contact-info h3 {
    margin-bottom: 1rem;
    color: #2c3e50;
    font-size: 1.25rem;
}

.contact-info p {
    margin: 0.5rem 0;
    color: #666;
}

.contact-info a {
    color: #3498db;
    text-decoration: none;
}

.contact-info a:hover {
    text-decoration: underline;
}




`;