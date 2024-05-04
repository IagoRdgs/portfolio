import styles from "./Projects.module.css";

import { Carousel, CarouselItem, CarouselCaption } from "react-bootstrap";
import ProjectCard from "./projectCard/ProjectCard";

import projetoimg from "../../../../../assets/hero-programming.svg";
import { useEffect, useState } from "react";

export default function Projects() {

    const [repoData, setRepoData] = useState([]);
    const token = "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";

    const apiUrl = "https://api.github.com/users/HipnosM/repos";

    useEffect(() => {
        fetch(apiUrl, {
            method: "GET",
            headers: {
                Authorization: `token ${token}`,
                "Content-Type": "application/json",
            }
        })
            .then((resp) => resp.json())
            .then((data) => {
                setRepoData(data);
                console.log(data);
            })
            .catch((err) => console.log(err))
    }, []);

    return (
        <section id="projects" className={styles.project_container}>
            <h2>Projetos</h2>
            <Carousel className={styles.carousel} wrap={false} interval={null}>
                {repoData.map((repo) => (
                        <CarouselItem>
                            <ProjectCard
                                key={repo.id}
                                projectName={repo.name}
                                projectImage={projetoimg}
                                codeLink={repo.html_url}
                            />
                        </CarouselItem>
                    ))
                }
            </Carousel>
        </section>
    );
};
