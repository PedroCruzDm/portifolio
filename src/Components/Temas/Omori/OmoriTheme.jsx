import "./Css/Omori.css";

const OmoriTheme = () => {
    return (
        <div className="card-profile">
            <div>
                <div className="card-profile__title">
                    
                    <div className="card-profile__photo">
                        <img src="https://avatars.githubusercontent.com/u/108557012?s=400&u=2f2902e26ee47e6c7adca2580961654a6ab76e4f&v=4" alt="Foto de perfil" />
                    </div>

                    <h1>João Pedro da Cruz 🪐</h1>
                    <span>Desenvolvedor Front-End</span>
                    <p>Sou um desenvolvedor pronto para novos desafios.</p>

                    <div className="card-profile__explore">
                        <button href="#Sobre">Explorar Trabalho</button>
                    </div>
                </div>

                <div className="sobre_mim" id="Sobre">
                    <div className="card-profile__title">
                        <h2>Sobre Mim</h2>
                    </div>

                    <div className="divisoria">
                        <div>
                            <p>
                                 Desenvolvedor Front-End em início de carreira, com experiência em HTML, CSS, JavaScript, React, php focado em criar interfaces intuitivas e envolventes. Minha paixão por resolver problemas me impulsiona a buscar a melhor solução para cada desafio. Atualmente, estou expandindo minhas habilidades para o universo Fullstack, aprendendo sobre Back-End (MySQL e Firebase), para construir projetos cada vez mais completos. Sou movido pela curiosidade e pelo aprendizado contínuo, sempre buscando aprimorar a experiência do usuário (UX) e entregar resultados de qualidade.
                            </p>
                                <br></br>
                            <span>
                                Expandindo para o universo Fullstack com Back-End (MySQL e Firebase)
                            </span>
                        </div>
                        <div>
                            Icon 
                        </div>
                    </div>

                </div>
                
                <div className="card-profile__description"></div>

                <div className="card-profile__techs">
                    <div className="card-profile__techs__title">
                        <h3>Habilidades</h3>
                    </div>

                    <div className="divisoria">

                        <div className="card_skills">
                            <div className="card_skills_header">
                                <h3>Frontend</h3>
                            </div>

                            <div className="card_skill_body">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" title="HTML5" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" title="CSS3" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" title="JavaScript" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" title="React" />
                            </div>

                        </div>

                        <div className="card_skills">
                            <div className="card_skills_header">
                                <h3>Backend</h3>
                            </div>

                            <div className="card_skill_body">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" title="PHP" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" title="Java" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" title="MySQL" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" title="Firebase" />
                            </div>

                            <div className="card_skills">
                                <div className="card_skill_header">
                                    <h3>UX/UI</h3>
                                </div>

                                <div className="card_skill_body">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" title="Figma" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" title="Bootstrap" />
                                    <ul>
                                        <li>Psicologia das cores</li>
                                        <li>Design de interfaces</li>
                                        <li>Leis da Psicologia Aplicadas a <b>UX/UI</b></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="card_skills">
                                <div className="card_skills_header">
                                    <h3>Outros</h3>
                                </div>
                                <div className="card_skills_body">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" title="Git" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" title="GitHub" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" alt="GitLab" title="GitLab" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" title="Docker" />
                                </div>
                            </div>

                        </div>

                    </div>


                </div>
            </div>

            <div className="card-projects">
                <div className="card-projects__title">Projetos</div>
                <div className="card-projects__grid">
                    <div className="card-project">
                        <img className="card-project__img" src="https://media.licdn.com/dms/image/v2/D4D2DAQEWHKa4XhfpXA/profile-treasury-image-shrink_800_800/B4DZbbY07QGwAY-/0/1747437441159?e=1756051200&v=beta&t=-D-PLlCBx1xdYkia4MA0WuP36FALucn4TbQfHbtawkI" alt="Calendário Escolar" />
                        <div className="card-project__info">
                            <div className="card-project__title">Calendário Escolar</div>
                            <div className="card-project__techs">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" title="React" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" title="Firebase" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" title="CSS3" />
                            </div>
                            <div className="card-project__desc">
                                Meu primeiro projeto com React: um calendário escolar interativo para facilitar a gestão de eventos acadêmicos na ETEC Zona Leste. Permite criar, editar e visualizar eventos em tempo real, com interface responsiva e integração ao Firebase.
                            </div>
                            <a href="https://github.com/PedroCruzDm/Etec_Calendario" target="_blank" rel="noopener" style={{display:"block",margin:"0.8em auto 0 auto",padding:"0.5em 1.3em",fontSize:"1em",fontWeight:600,borderRadius:"8px",border:"none",background:"#232336",color:"#FF6721",textDecoration:"none",boxShadow:"0 2px 8px rgba(0,0,0,0.08)",transition:"background 0.2s",maxWidth:"fit-content"}}>Ver repositório</a>
                        </div>
                    </div>
                    <div className="card-project">
                        <img className="card-project__img" src="https://workana.s3.amazonaws.com/portfolios/gd/6aa93b409c8b5b567c073c6a86902d3f/Capturadetela20250304114536.png?response-content-disposition=inline%3Bfilename%3D%22Captura%20de%20tela%202025-03-04%20114536.png%22&response-content-type=image%2Fpng&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA33COQEVTJSIXHA73%2F20250817%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250817T175410Z&X-Amz-SignedHeaders=host&X-Amz-Expires=21600&X-Amz-Signature=8ac5b841e888bf446b0c0df1f5687c25699f4d8be72bd902c513a9eb3b4d784e" alt="Qi Planta" />
                        <div className="card-project__info">
                            <div className="card-project__title">QiPlanta</div>
                            <div className="card-project__techs">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" title="PHP" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" title="JavaScript" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" title="CSS3" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" title="MySQL" />
                            </div>
                            <div className="card-project__desc">
                                Um projeto desenvolvido durante o curso de Desenvolvimento de Sistemas com minha equipe, desenvolvemos um E-commerce para venda de plantas com PHP e JavaScript para as funcionalidades de front-end e back-end, css para estilização e MySQL para o banco de dados.
                            </div>
                            <a href="https://github.com/GRNSz/Projeto_Feira_Tecnologica_QiPlanta" target="_blank" rel="noopener" style={{display:"block",margin:"0.8em auto 0 auto",padding:"0.5em 1.3em",fontSize:"1em",fontWeight:600,borderRadius:"8px",border:"none",background:"#232336",color:"#FF6721",textDecoration:"none",boxShadow:"0 2px 8px rgba(0,0,0,0.08)",transition:"background 0.2s",maxWidth:"fit-content"}}>Ver repositório</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OmoriTheme;
