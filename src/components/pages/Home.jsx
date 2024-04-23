import styles from "./Home.module.css";

import Nav from "../layout/Nav";

import hero from "../../assets/hero-programming.svg";

export default function Home() {

    return (
        <>
            <header>
                <Nav />
            </header>
            <main>
                <section id="sobre" className={styles.info_container}>
                    <div className={styles.profile_container}>
                        <img src={hero} alt="hero" />
                    </div>
                    <div className={styles.info}>
                        <h1>Olá, sou <span>Iago Rodrigues</span>!</h1>
                        <p>Graduado em Gestão de Recursos Humanos, sou um desenvolvedor web em formação, com foco em Front-end.</p>
                    </div>
                </section>

                <section className={styles.skills}>
                    <h2 id="skills">Skills</h2>
                    <ul className={styles.skills_list}>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React + Vite</li>
                        <li>Git/GitHub</li>
                    </ul>
                </section>

                <section className={styles.projects}>
                    <h2 id="projects">Projetos</h2>
                </section>
            </main>

        </>
    );
};

