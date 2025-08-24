
import React from "react";
import "./Css/StarWars.css";

const StarWarsTheme = () => {
    return (
    <div className="starwars-theme-bg" style={{minHeight: '100vh', height: '100vh', display: 'flex', flexDirection: 'column'}}>
            <div className="starwars-theme-card profile-card">
                <div className="profile-card-content">
                    <img className="profile-avatar" src="https://avatars.githubusercontent.com/u/108557012?s=400&u=2f2902e26ee47e6c7adca2580961654a6ab76e4f&v=4" alt="Foto de perfil" />
                    <h1 className="profile-title">João Pedro da Cruz 🪐</h1>
                    <span className="profile-role">Desenvolvedor <span className="profile-role-frontend">Front-End</span></span>
                    <p className="profile-desc">Sou um desenvolvedor pronto para novos desafios. Que a Força esteja com você!</p>
                    <a className="profile-explore-btn" href="#Sobre">Explorar Galáxia</a>
                </div>
            </div>

            <div className="starwars-theme-card about-card" id="Sobre">
                <h2 className="about-title">Sobre Mim</h2>
                <p className="about-desc">
                    Desenvolvedor Front-End em início de carreira, com experiência em HTML, CSS, JavaScript, React, PHP focado em criar interfaces intuitivas e envolventes. Minha paixão por resolver problemas me impulsiona a buscar a melhor solução para cada desafio. Atualmente, estou expandindo minhas habilidades para o universo Fullstack, aprendendo sobre Back-End (MySQL e Firebase), para construir projetos cada vez mais completos. Sou movido pela curiosidade e pelo aprendizado contínuo, sempre buscando aprimorar a experiência do usuário (UX) e entregar resultados de qualidade.
                </p>
                <span className="about-highlight">
                    Expandindo para o universo Fullstack com Back-End (MySQL e Firebase)
                </span>
            </div>

            <div className="starwars-theme-card techs-card">
                <h3 className="techs-title">Tecnologias</h3>
                <div className="techs-grid">
                    {[
                        {src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", label: "JavaScript"},
                        {src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", label: "React"},
                        {src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", label: "HTML5"},
                        {src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", label: "CSS3"},
                        {src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", label: "PHP"},
                        {src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", label: "Firebase"},
                        {src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", label: "Git"},
                        {src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", label: "MySQL"},
                        {src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", label: "Java"},
                        {src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", label: "Angular"},
                        {src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", label: "Python"},
                        {src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", label: "C"},
                    ].map(tech => (
                        <div key={tech.label} className="tech-item">
                            <img className="tech-icon" src={tech.src} alt={tech.label} title={tech.label} />
                            <span className="tech-label">{tech.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="starwars-theme-card projects-card">
                <h3 className="projects-title">Projetos</h3>
                <div className="projects-grid">
                    <div className="project-item">
                        <img className="project-img" src="https://media.licdn.com/dms/image/v2/D4D2DAQEWHKa4XhfpXA/profile-treasury-image-shrink_800_800/B4DZbbY07QGwAY-/0/1747437441159?e=1756051200&v=beta&t=-D-PLlCBx1xdYkia4MA0WuP36FALucn4TbQfHbtawkI" alt="Calendário Escolar" />
                        <div>
                            <div className="project-title">Calendário Escolar</div>
                            <div className="project-techs">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" title="React" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" title="Firebase" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" title="CSS3" />
                            </div>
                            <div className="project-desc">
                                Meu primeiro projeto com React: um calendário escolar interativo para facilitar a gestão de eventos acadêmicos na ETEC Zona Leste. Permite criar, editar e visualizar eventos em tempo real, com interface responsiva e integração ao Firebase.
                            </div>
                            <a className="project-link" href="https://github.com/PedroCruzDm/Etec_Calendario" target="_blank" rel="noopener">Ver repositório</a>
                        </div>
                    </div>
                    <div className="project-item">
                        <img className="project-img" src="https://workana.s3.amazonaws.com/portfolios/gd/6aa93b409c8b5b567c073c6a86902d3f/Capturadetela20250304114536.png?response-content-disposition=inline%3Bfilename%3D%22Captura%20de%20tela%202025-03-04%20114536.png%22&response-content-type=image%2Fpng&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA33COQEVTJSIXHA73%2F20250817%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250817T175410Z&X-Amz-SignedHeaders=host&X-Amz-Expires=21600&X-Amz-Signature=8ac5b841e888bf446b0c0df1f5687c25699f4d8be72bd902c513a9eb3b4d784e" alt="Qi Planta" />
                        <div>
                            <div className="project-title">QiPlanta</div>
                            <div className="project-techs">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" title="PHP" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" title="JavaScript" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" title="CSS3" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" title="MySQL" />
                            </div>
                            <div className="project-desc">
                                Um projeto desenvolvido durante o curso de Desenvolvimento de Sistemas com minha equipe, desenvolvemos um E-commerce para venda de plantas com PHP e JavaScript para as funcionalidades de front-end e back-end, css para estilização e MySQL para o banco de dados.
                            </div>
                            <a className="project-link" href="https://github.com/GRNSz/Projeto_Feira_Tecnologica_QiPlanta" target="_blank" rel="noopener">Ver repositório</a>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="starwars-footer" style={{marginTop: 'auto', flexShrink: 0}}>
                    <div className="footer-content">
                        <span className="footer-name">João Pedro da Cruz &copy; {new Date().getFullYear()}</span>

                        <a className="footer-link" href="https://github.com/PedroCruzDm" target="_blank" rel="noopener" aria-label="GitHub">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
                        </a>
                        <a className="footer-link" href="https://www.linkedin.com/in/joaopedrodacruz/" target="_blank" rel="noopener" aria-label="LinkedIn">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" />
                        </a>
                        <span className="footer-rights">Portfólio inspirado em Star Wars. Que a Força esteja com você!</span>
                        <span>V1.01</span>
                    </div>
                </footer>
    </div>
    );
};

export default StarWarsTheme;