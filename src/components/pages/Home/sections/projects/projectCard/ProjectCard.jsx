import styles from "./ProjectCard.module.css";

import Button from "../../../../../layout/button/Button";

export default function ProjectCard({ projectImage, projectName, projectDesc }) {
    return (
        <section className={styles.card_container}>
            <div className={styles.card}>
                <div className={styles.card_header}>
                    <h3>{projectName}</h3>
                    <p>Descrição</p>
                </div>

                <div className={styles.card_image}>
                    <img src={projectImage} alt="" />
                </div>
            </div>
                <div className={styles.card_buttons}>
                    <Button
                        text="Projeto"
                        href={null}
                    />
                    <Button
                        text="Código"
                        href={null}
                    />
                </div>
        </section>
    );
};