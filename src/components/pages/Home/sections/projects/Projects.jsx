import styles from "./Projects.module.css";

import { Carousel, CarouselItem, CarouselCaption } from "react-bootstrap";
import ProjectCard from "./projectCard/ProjectCard";

import projetoimg from "../../../../../assets/hero-programming.svg";
import { useEffect, useState } from "react";

export default function Projects() {

    const [repoData, setRepoData] = useState([]);
    const token = import.meta.env.VITE_GIHTUB_TOKEN;

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

                {repoData
                    .map((repo) => (
                        <CarouselItem>
                            <ProjectCard
                                key={repo.id}
                                projectName={repo.name}
                                projectImage={projetoimg}
                            />
                        </CarouselItem>
                    ))
                }
            </Carousel>
        </section>
    );
};
