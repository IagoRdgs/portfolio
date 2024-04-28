import styles from "./ProjectCard.module.css";

import Button from "../../../../../layout/button/Button";

export default function ProjectCard({ image }) {
    return (
        <section className={styles.card_container}>
            <div className={styles.card}>
                <div className={styles.card_header}>
                    <h3>Nome do projeto</h3>
                    <p>Descrição do projeto Descrição do projetoDescrição do projetoDescrição do projetoDescrição do projetoDescrição do projetoDescrição do projetoDescrição do projetoDescrição do projetoDescrição do projetoDescrição do projetoDescrição do projeto</p>
                </div>

                <div className={styles.card_image}>
                    <img src={image} alt="" />
                </div>
            </div>
                <div className={styles.card_buttons}>
                    <Button
                        text="Projeto"
                        href={null}
                    />
                    <Button
                        text="Código"
                        href={null}
                    />
                </div>
        </section>
    );
};