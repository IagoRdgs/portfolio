import styles from "./ProjectCard.module.css";

import Button from "../../../../../layout/button/Button";

export default function ProjectCard({ projectName, projectDesc, projectImage, projecTechnologies, projectLink, codeLink }) {
    return (
        <section className={styles.card_container}>
            <div className={styles.card}>
                <div className={styles.card_header}>
                    <h3>{projectName}</h3>
                    <p>{projectDesc}</p>
                </div>

                <div className={styles.card_image}>
                    <img src={projectImage} alt="" />
                </div>
                <div className={styles.card_footer}>
                    <h4>{projecTechnologies}</h4>
                </div>
            </div>
            <div className={styles.card_buttons}>
                <Button
                    text="Projeto"
                    href={projectLink ? projectLink : null}
                    target="_blank"
                />
                <Button
                    text="Código"
                    href={codeLink ? codeLink : null}
                    target="_blank"
                />
            </div>
        </section>
    );
};