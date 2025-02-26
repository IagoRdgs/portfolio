import { FaCss3Alt, FaDatabase, FaHtml5, FaJs, FaNode, FaReact } from "react-icons/fa";
import styles from "./Skills.module.css";

import { Container } from "react-bootstrap";
import { TbBrandReactNative, TbSql } from "react-icons/tb";
import { SiAxios, SiExpress, SiGit, SiGithub, SiNodedotjs, SiPrisma } from "react-icons/si";

export default function Skills() {
    return (
        <section id="skills" className={styles.skills_container}>
            <Container>
                <h2>Skills</h2>
                <div className={styles.skills} >
                    <SkillItem
                        icon={<FaHtml5 />}
                        title="HTML"
                        value={97}
                        customClass="color_html"
                    />
                    <SkillItem
                        icon={<FaCss3Alt />}
                        title="CSS"
                        value={97}
                        customClass="color_css"
                    />
                    <SkillItem
                        icon={<FaJs />}
                        title="JavaScript"
                        value={83}
                        customClass="color_js"
                    />
                    <SkillItem
                        icon={<SiNodedotjs />}
                        title="Node JS"
                        value={77}
                        customClass="color_node"
                    />
                    <SkillItem
                        icon={<FaReact />}
                        title="React + Vite"
                        value={80}
                        customClass="color_react"
                    />
                    <SkillItem
                        icon={<TbBrandReactNative />}
                        title="React Native"
                        value={65}
                        customClass="color_react"
                    />
                    <SkillItem
                        icon={<SiExpress />}
                        title="Express JS"
                        value={85}
                        customClass="color_express"
                    />
                    <SkillItem
                        icon={<FaDatabase />}
                        title="BD/SQL"
                        value={60}
                        customClass="color_sql"
                    />
                    <SkillItem
                        icon={<SiPrisma />}
                        title="Prisma ORM"
                        value={65}
                        customClass="color_prisma"
                    />
                    <SkillItem
                        icon={<SiGit />}
                        title="Git/GitHub"
                        value={90}
                        customClass="color_git"
                    />
                    <SkillItem
                        icon={<SiAxios />}
                        title="Axios"
                        value={60}
                        customClass="color_axios"
                    />
                </div>
            </Container>
        </section>
    );
};

const SkillItem = ({ icon, title, customClass, value }) => {
    return (
        <div className={`${styles.skill_card} ${styles[customClass]}`}>
            <div className={styles.card_content}>
                {icon}
                <p className={styles.skill_title}>{title}</p>
            </div>

            <div className={styles.bar_box}>
                <div className={styles.bar} style={{ width: `${value}%` }}></div>
            </div>
        </div>
    );
};