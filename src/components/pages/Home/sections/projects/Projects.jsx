import styles from "./Projects.module.css";

import { Carousel, Container } from "react-bootstrap";
import ProjectCard from "./projectCard/ProjectCard";

import projetoimg from "../../../../../assets/hero-programming.svg";

export default function Projects() {
    return (
        <section id="projects" className={styles.carousel_container}>
            <h2>Projetos</h2>
            <Container>
                <ProjectCard
                    projectName="Projeto Teste"
                    projectDescription="este é um teste para ver como o card está se comportando."
                    projectImage={projetoimg}
                    projectLink="https://hipnos-costs.vercel.app"
                />
            </Container>
        </section>
    );
};
