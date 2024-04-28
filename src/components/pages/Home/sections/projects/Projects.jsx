import styles from "./Projects.module.css";

import { Carousel, Container } from "react-bootstrap";
import ProjectCard from "./projectCard/ProjectCard";

import projetoimg from "../../../../../assets/hero-programming.svg";

export default function Projects() {
    return (
        <section id="projects" className={styles.project_container}>
            <h2>Projetos</h2>
            <ProjectCard
                image={projetoimg}
            />
        </section>
    );
};
