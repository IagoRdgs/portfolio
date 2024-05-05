import styles from "./Projects.module.css";

import { Carousel, CarouselItem, CarouselCaption } from "react-bootstrap";
import ProjectCard from "./projectCard/ProjectCard";

import projetoimg from "../../../../../assets/hero-programming.svg";
import { useEffect, useState } from "react";

export default function Projects() {

    const [repoData, setRepoData] = useState([]);
    const [readmeData, setReadmeData] = useState([]);

    const token = import.meta.env.VITE_GITHUB_TOKEN;

    const apiUrl = "https://api.github.com/users/HipnosM/repos";

    async function getRepoData() {
        try {
            const repoResponse = await fetch(apiUrl, {
                method: "GET",
                headers: {
                    Authorization: `token ${token}`,
                }
            });

            if (!repoResponse.ok) {
                throw new Error('Erro ao buscar os repositórios.');
            }

            const repoData = await repoResponse.json();
            const repoNames = repoData.map(repo => repo.name);

            const allReadmes = [];
            for (const repoName of repoNames) {
                const readmeResponse = await fetch(`https://api.github.com/repos/HipnosM/${repoName}/contents/README.md`, {
                    method: "GET",
                    headers: {
                        Authorization: `token ${token}`,
                        Accept: "application/vnd.github.raw+json",
                    }
                });
                if (!readmeResponse.ok) {
                    throw new Error('Erro ao buscar os READMEs.');
                }

                const readmeData = await readmeResponse.text();
                allReadmes.push(readmeData);
                setReadmeData(allReadmes);
            }

            setRepoData(repoData);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getRepoData();
    }, []);

    return (
        <section id="projects" className={styles.project_container}>
            <h2>Projetos</h2>
            <Carousel className={styles.carousel} wrap={false} interval={null}>
                {repoData.map((repo, id) => (
                    <CarouselItem key={repo.id}>
                        <ProjectCard
                            projectName={repo.name}
                            projectImage={projetoimg}
                            codeLink={repo.html_url}
                            projectLink={repo.homepage}
                            projectDesc={readmeData[id]}
                        />
                    </CarouselItem>
                ))
                }
            </Carousel>
        </section>
    );
};
