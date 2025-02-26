import styles from "./About.module.css";

import hero from "../../../../../assets/profile.png";
import curriculo from "../../../../../assets/curriculo.pdf"
import Button from "../../../../layout/button/Button";

export default function About() {
    return (
        <>
            <section id="sobre" className={styles.about_container}>
                <div className={styles.profile_container}>
                    <img src={hero} alt="hero" />
                </div>
                <div className={styles.about}>
                    <h1>Olá, sou <br /><span>Iago Rodrigues!</span></h1>
                    <p>Sou um desenvolvedor Full Stack e Mobile, especializado em criar soluções digitais completas e eficientes. Desde o planejamento até a execução, tenho a experiência necessária para construir aplicações que atendem a todos os requisitos técnicos e de usuário. Estou sempre em busca de aprender, evoluir e aplicar novas tecnologias, garantindo a entrega de produtos de alta qualidade em todas as plataformas. Meu objetivo é criar aplicações de alto desempenho, seguras e escaláveis, com foco nas necessidades reais do usuário.</p>

                    <div className={styles.buttons_container}>
                        <Button
                            text="Baixar CV"
                            href={curriculo}
                            download="cv.pdf"
                        />
                        <Button
                            text="Ir para o GitHub"
                            href="https://www.github.com/HipnosM"
                            target="_blank"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};
