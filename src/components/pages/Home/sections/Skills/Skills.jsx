import styles from "./Skills.module.css";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { Container } from "react-bootstrap";
import { client as SanityClient } from "../../../../../lib/sanity";
import iconMap from "../../../../layout/icons";

export default function Skills() {
    const [skillData, setSkillData] = useState([]);
   
    useEffect(() => {
        fetchSkills();
    }, []);

    const fetchSkills = async () => {
        const skills = await SanityClient
            .fetch("*[_type == 'skill']{title, iconName, value, customClass} | order(value desc)")
            .then((data) => setSkillData(data))
            .catch((error) => console.error("Erro ao buscar skills:", error));
        return skills;
    }

    return (
        <motion.section initial={{ x: -400, opacity: 0 }} whileInView={{ x: 0, opacity: 1, }} transition={{ duration: 1 }} viewport={{ once: true }} id="skills" className={styles.skills_container}>
            <Container>
                <h2>Skills</h2>
                <div className={styles.skills} >
                    {skillData.length > 0 ? (
                        skillData.map((item, index) => {
                            const IconComponent = iconMap[item.iconName];
                            return (
                                <SkillItem
                                    key={index}
                                    icon={IconComponent ? <IconComponent /> : null}
                                    skill={item.title}
                                    value={item.value}
                                    customClass={`color_${item.customClass}`}
                                    index={index}
                                />
                            );
                        })
                    ) : (
                        <p>Nenhuma skill para ser exibida.</p>
                    )};
                </div>
            </Container>
        </motion.section>
    );
};

const SkillItem = ({ icon, skill, customClass, value, index }) => {
    return (
        <motion.div initial={{ opacity: 0, y: 100, rotateZ: 15 }} whileInView={{ opacity: 1, y: 0, rotateZ: 0 }} transition={{ duration: .5, delay: index * .15 }} viewport={{ once: true }} className={`${styles.skill_card} ${styles[customClass]}`}>
            <div className={styles.card_content}>
                {icon}
                <p className={styles.skill_skill}>{skill}</p>
            </div>

            <div className={styles.bar_box}>
                <div className={styles.bar} style={{ width: `${value}%` }}></div>
            </div>
        </motion.div>
    );
};