import styles from "./Skills.module.css";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { Container } from "react-bootstrap";
import { client as SanityClient } from "../../../../../lib/sanity";
import iconMap from "../../../../layout/icons";

export default function Skills() {
    const [categoriesData, setCategoriesData] = useState([]);

    useEffect(() => {
        fetchSkillsGrouped();
    }, []);

    const fetchSkillsGrouped = async () => {
        const query = `*[_type == "skillCategory"]{
            "id": _id,
            title,
            "skills": *[_type == "skill" && references(^._id)] | order(orderRank asc) {
                _id,
                title,
                iconName,
                customClass
            }
        }`;

        const skills = await SanityClient
            .fetch(query)
            .then((data) => data.filter(category => category.skills.length > 0))
            .then((data) => setCategoriesData(data))
            .catch((error) => console.error("Erro ao buscar skills:", error));
        return skills;
    }

    return (
        <motion.section initial={{ x: -200, opacity: 0 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} id="skills" className={styles.skills_container}>
            <Container>
                <h2>Skills</h2>

                {categoriesData.length > 0 ? (
                    categoriesData.map((category) => (
                        <motion.div initial={{ opacity: 0, y: 100, rotateZ: 15 }} whileInView={{ opacity: 1, y: 0, rotateZ: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} key={category.id} className={styles.skill_category}>
                            <h3 className={styles.category_title}>{category.title}</h3>

                            <div className={styles.skills}>
                                {category.skills.map((skill, index) => {
                                    const IconComponent = iconMap[skill.iconName] || null;
                                    return (
                                        <SkillItem
                                            key={skill._id}
                                            icon={IconComponent ? <IconComponent size={48} /> : null}
                                            skill={skill.title}
                                            customClass={`color_${skill.customClass}`}
                                            index={index}
                                        />
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))
                ) : (
                    <p>Nenhuma skill para ser exibida.</p>
                )}
            </Container>
        </motion.section>
    );
};

const SkillItem = ({ icon, skill, customClass, index }) => {
    return (
        <motion.div initial={{ opacity: 0, y: 100, rotateZ: 15 }} whileInView={{ opacity: 1, y: 0, rotateZ: 0, transition: { duration: .5, delay: index * .15 } }}  viewport={{ once: true }} whileHover={{ scale: 1.05, y: -3, border: "1px solid rgba(122, 23, 121, .5)", transition: { duration: 0.1 } }} className={`${styles.skill_card} ${styles[customClass]}`}>
            <div className={styles.card_content}>
                {icon}
                <p className={styles.skill_skill}>{skill}</p>
            </div>
        </motion.div>
    );
};