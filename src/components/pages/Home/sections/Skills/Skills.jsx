import styles from "./Skills.module.css";

import { Container } from "react-bootstrap";
import { FaCss3Alt, FaDatabase, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { SiAxios, SiExpress, SiGit, SiNodedotjs, SiPrisma } from "react-icons/si";

export default function Skills() {

    const skillData = [
        { id: 1, title: "HTML", icon: <FaHtml5 />, customClass: "html", value: 97 },
        { id: 2, title: "CSS", icon: <FaCss3Alt />, customClass: "css", value: 97 },
        { id: 3, title: "JavaScript", icon: <FaJs />, customClass: "js", value: 84 },
        { id: 4, title: "Node JS", icon: <SiNodedotjs />, customClass: "node", value: 77 },
        { id: 5, title: "React + Vite", icon: <FaReact />, customClass: "react", value: 80 },
        { id: 6, title: "React Native", icon: <TbBrandReactNative />, customClass: "react", value: 75 },
        { id: 7, title: "Express JS", icon: <SiExpress />, customClass: "express", value: 85 },
        { id: 8, title: "BD/SQL", icon: <FaDatabase />, customClass: "sql", value: 70 },
        { id: 9, title: "Prisma ORM", icon: <SiPrisma />, customClass: "prisma", value: 70 },
        { id: 10, title: "Git/GitHub", icon: <SiGit />, customClass: "git", value: 90 },
        { id: 11, title: "Axios", icon: <SiAxios />, customClass: "axios", value: 75 },
    ];

    return (
        <section id="skills" className={styles.skills_container}>
            <Container>
                <h2>Skills</h2>
                <div className={styles.skills} >
                    {skillData.length > 0 ? (
                        skillData.map((item, index) => (
                            <SkillItem
                                key={index}
                                icon={item.icon}
                                skill={item.title}
                                value={item.value}
                                customClass={`color_${item.customClass}`}
                            />
                        ))
                    ) : (
                        <p>Nenhuma skill para ser exibida.</p>
                    )};
                </div>
            </Container>
        </section>
    );
};

const SkillItem = ({ icon, skill, customClass, value }) => {
    return (
        <div className={`${styles.skill_card} ${styles[customClass]}`}>
            <div className={styles.card_content}>
                {icon}
                <p className={styles.skill_skill}>{skill}</p>
            </div>

            <div className={styles.bar_box}>
                <div className={styles.bar} style={{ width: `${value}%` }}></div>
            </div>
        </div>
    );
};