import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project, onClick }) {
    return (
        <div className={styles.card_container} onClick={onClick}>
            <img
                src={project.image}
                alt={project.name}
            />
        </div>
    );
};