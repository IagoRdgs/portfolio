import styles from "./About.module.css";

import hero from "../../../../../assets/profile.png";
import Button from "../../../../layout/button/Button";

export default function About() {
    return (
        <>
            <section id="sobre" className={styles.about_container}>
                <div className={styles.profile_container}>
                    <img src={hero} alt="hero" />
                </div>
                <div className={styles.about}>
                    <h1>Olá, sou <br/><span>Iago Rodrigues!</span></h1>
                    <p>Graduado em Gestão de Recursos Humanos, sou um desenvolvedor web em formação, com foco em Front-end.</p>
                    <div className={styles.buttons_container}>
                        <Button
                            text="Baixar CV"
                            href="#"
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
