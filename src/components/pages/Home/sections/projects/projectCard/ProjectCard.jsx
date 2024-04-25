import styles from "./ProjectCard.module.css";

import Button from "../../../../../layout/button/Button";
import { Container } from "react-bootstrap";

export default function ProjectCard({ projectName, projectDescription, projectImage, alt, projectLink , codeLink }) {
    return (
        <>
            <Container>
                <div className={styles.card_container}>
                    <div className={styles.card}>
                        <div className={styles.card_info}>
                            <h3>{projectName}</h3>
                            <p>{projectDescription}</p>
                        </div>
                        <img src={projectImage} alt={alt} />
                        <div className={styles.card_buttons}>
                            <Button
                                text="Projeto"
                                href={projectLink}
                            />
                            <Button
                                text="Código"
                                href={codeLink}
                            />
                        </div>
                    </div>
                </div>

            </Container>
        </>
    );
};