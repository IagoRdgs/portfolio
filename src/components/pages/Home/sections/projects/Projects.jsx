import styles from "./Projects.module.css";

import { Carousel, CarouselItem, CarouselCaption } from "react-bootstrap";
import ProjectCard from "./projectCard/ProjectCard";

import projects from "../../../../../data/projects";

export default function Projects() {


    return (
        <section id="projects" className={styles.project_container}>
            <h2>Projetos</h2>
            <div className={styles.carousel_container}>
                <Carousel className={styles.carousel} wrap={false} interval={null}>
                    {projects.map((project) => (
                        <CarouselItem key={project.id}>
                            <ProjectCard
                                projectName={project.name}
                                projectDesc={project.description}
                                projectImage={project.image}
                                projecTechnologies={project.technologies}
                                projectLink={project.links.site}
                                codeLink={project.links.github}
                            />
                        </CarouselItem>
                    ))
                    }
                </Carousel>
            </div>
        </section >
    );
};
