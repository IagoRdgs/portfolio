import styles from "./Projects.module.css";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import ProjectCard from "./projectCard/ProjectCard";
import { Container } from "react-bootstrap";
import Project from "./projectCard/Project";
import { client as SanityClient } from "../../../../../lib/sanity";

export default function Projects() {
    const [projectData, setProjectData] = useState([]);
    const [openProject, setOpenProject] = useState(false);

    useEffect(() => {
        fetchProjects();
        console.log(projectData);
    }, []);

    const fetchProjects = async () => {
        const projects = await SanityClient
            .fetch(`*[_type == 'project']| order(_createdAt desc){name, description, resources, "imageUrl": image.asset->url, "imageAlt": image.alt, links}`)
            .then((data) => setProjectData(data))
            .catch((error) => console.error("Erro ao buscar projetos:", error));
        return projects;
    };

    return (
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} id="projects" className={styles.project_container}>
            <Container>
                <h2>Projetos</h2>
                <div className={styles.project}>
                    {projectData.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            onClick={() => {
                                setOpenProject(project);
                                document.body.style.overflow = "hidden";
                            }}
                            index={index}
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
        </motion.section >
    );
};
