import styles from "./Projects.module.css";

import ProjectCard from "./projectCard/ProjectCard";

import projects from "../../../../../data/projectsList";
import { Container } from "react-bootstrap";
import { useState } from "react";
import Project from "./projectCard/Project";

export default function Projects() {

    const [openProject, setOpenProject] = useState(false);

    return (
        <section id="projects" className={styles.project_container}>
            <Container>
                <h2>Projetos</h2>
                <div className={styles.project}>
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onClick={() => {
                                setOpenProject(project);
                                document.body.style.overflow = "hidden";
                            }}
                        />
                    ))}
                    {openProject && (
                        <Project
                            project={openProject}
                            onClick={() => {
                                setOpenProject(null);
                                document.body.style.overflow = "unset";
                            }}
                        />
                    )}
                </div>
            </Container>
        </section >
    );
};
