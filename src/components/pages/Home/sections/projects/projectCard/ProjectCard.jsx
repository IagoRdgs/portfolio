import styles from "./ProjectCard.module.css";
import { motion } from "framer-motion";

export default function ProjectCard({ project, onClick, index }) {
    return (
        <motion.div initial={{ opacity: 0, scale: 0.1, x: -200 }} whileInView={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: .5, delay: .2 * index }} viewport={{ once: true }} className={styles.card_container} onClick={onClick}>
            <img
                src={project.imageUrl}
                alt={project.name}
            />
        </motion.div>
    );
};