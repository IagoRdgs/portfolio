import styles from "./About.module.css";

import { useState, useEffect } from "react";

import hero from "../../../../../assets/profile.png";
import curriculo from "../../../../../assets/curriculo.pdf"
import Button from "../../../../layout/button/Button";
import { client as SanityClient } from "../../../../../lib/sanity";

export default function About() {
    const [aboutData, setAboutData] = useState();

    useEffect(() => {
        fetchAbout();
    }, []);
    
    const fetchAbout = async () => {
        const about = await SanityClient
            .fetch(`*[_type == 'about'][0]{name, profileImage, bio, "resumeUrl": resume.asset->url, githubUrl}`)
            .then((data) => setAboutData(data))
            .catch((error) => console.error("Erro ao buscar about:", error));
        return about;
    };

    return (
        <>
            <section id="sobre" className={styles.about_container}>
                <div className={styles.profile_container}>
                    <img src={hero} alt="hero" />
                </div>
                <div className={styles.about}>
                    <h1>Olá, sou <br /><span>{aboutData?.name}!</span></h1>
                    <p>{aboutData?.bio}</p>

                    <div className={styles.buttons_container}>
                        <Button
                            text="Baixar CV"
                            href={aboutData?.resumeUrl}
                            download="IAGO_DEVFULLSTACK.pdf"
                        />
                        <Button
                            text="Ir para o GitHub"
                            href={aboutData?.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};
