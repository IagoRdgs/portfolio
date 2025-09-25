import styles from "./Project.module.css";

import Button from "../../../../../layout/button/Button";
import { Container } from "react-bootstrap";

export default function Project({ project, onClick }) {
    return (
        <>
            <div className={styles.overflow} onClick={onClick}></div>
            <Container>
                <div className={styles.modal_project}>
                    <div className={styles.modal_content}>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <h4>{project.resources}</h4>
                        <div className={styles.modal_buttons}>
                            <Button
                                text="Projeto"
                                href={project.links.site ? project.links.site : "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                            />
                            <Button
                                text="Código"
                                href={project.links.github ? project.links.github : "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </>

    );
};
