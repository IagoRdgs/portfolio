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
                    <p>Sou um desenvolvedor full stack apaixonado por transformar ideias em código. Com experiência em desenvolvimento web e mobile, domino tecnologias como React, Node.js, Express, Prisma e SQL. Além de habilidades técnicas, valorizo boas práticas, colaboração e metodologias ágeis. Estou sempre em busca de novos desafios e aprendizados para criar soluções inovadoras e eficientes.</p>

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
