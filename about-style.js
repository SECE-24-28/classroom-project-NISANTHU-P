import styled from "styled-components";

export const AboutStyle = styled.div`

.about-container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 2rem;
    background: #f8f9fa;
    min-height: 100vh;
}

.about-container h2 {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 3rem;
    color: #2c3e50;
}

.about-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 3rem;
    margin-bottom: 3rem;
    align-items: start;
}

.about-text {
    line-height: 1.6;
}

.about-text p {
    font-size: 18px;
    margin-bottom: 1.5rem;
    color: #555;
}

.about-stats {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.stat-item {
    text-align: center;
    background: #3498db;
    padding: 1.5rem;
    border-radius: 8px;
    color: white;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.stat-item h3 {
    font-size: 2rem;
    margin: 0;
    color: #fff;
}

.stat-item p {
    margin: 0.5rem 0 0 0;
    color: rgba(255,255,255,0.9);
    font-size: 0.875rem;
}

.about-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.about-card {
    border: 1px solid #ddd;
    padding: 2rem;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}



.about-card h3 {
    margin-bottom: 1rem;
    color: #2c3e50;
    font-size: 1.25rem;
}

.about-card p {
    color: #666;
    margin: 0.5rem 0;
    line-height: 1.6;
}

@media (max-width: 768px) {
    .about-content {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .about-stats {
        flex-direction: row;
        justify-content: space-around;
    }
    
    .stat-item {
        flex: 1;
        margin: 0 0.5rem;
    }
}


`;