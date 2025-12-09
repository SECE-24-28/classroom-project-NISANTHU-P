import styled from "styled-components";

export const ProjectsStyle = styled.div`

.projects-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    background: #f8f9fa;
    min-height: 100vh;
}

.projects-container h2 {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 3rem;
    color: #2c3e50;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.project-card {
    border: 1px solid #ddd;
    padding: 2rem;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}



.project-card h3 {
    margin-bottom: 1rem;
    color: #2c3e50;
    font-size: 1.25rem;
}

.project-card p {
    color: #666;
    line-height: 1.6;
    margin-bottom: 1.5rem;
}

.tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
}

.tech-tag {
    background: #e9ecef;
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
    font-size: 0.875rem;
    color: #495057;
}

.project-links {
    display: flex;
    gap: 1rem;
}

.project-links a {
    text-decoration: none;
    color: #fff;
    background: #3498db;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    font-size: 0.875rem;
}

.project-links a:hover {
    background: #2980b9;
}


`;