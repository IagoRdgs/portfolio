import styles from "./About.module.css";

import hero from "../../../../../assets/hero-programming.svg";

export default function About() {
    return (
        <>
            <section id="sobre" className={styles.about_container}>
                <div className={styles.profile_container}>
                    <img src={hero} alt="hero" />
                </div>
                <div className={styles.about}>
                    <h1>Olá, sou <span>Iago Rodrigues</span>!</h1>
                    <p>Graduado em Gestão de Recursos Humanos, sou um desenvolvedor web em formação, com foco em Front-end.</p>
                </div>
            </section>
        </>
    );
};
