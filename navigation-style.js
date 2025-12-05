import styled from "styled-components";

export const NavigationStyle = styled.div`
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: #2c3e50;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    box-sizing: border-box;
}

.nav-brand a {
    font-size: 24px;
    font-weight: bold;
    text-decoration: none;
    color: #fff;
}

.nav-links {
    display: flex;
    gap: 2rem;
}

.nav-links a {
    text-decoration: none;
    color: #fff;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 4px;
}

.nav-links a:hover,
.nav-links a.active {
    background: #34495e;
    color: #fff;
}

@media (max-width: 768px) {
    .navbar {
        flex-direction: column;
        padding: 1rem;
    }
    
    .nav-links {
        margin-top: 1rem;
        gap: 1rem;
    }
}
`;