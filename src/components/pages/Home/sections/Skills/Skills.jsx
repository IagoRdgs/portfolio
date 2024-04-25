import styles from "./Skills.module.css";

import ProgressBar from "react-bootstrap/ProgressBar";
import { Container, Row, Col } from "react-bootstrap";

export default function Skills() {
    return (
        <section id="skills" className={styles.skills_container}>
            <Container>
                <h2>Skills</h2>
                <ul className={styles.skills_list} >
                    <Row>
                        <Col md={6}>
                            <SkillItem
                                title="HTML"
                                amount={93}
                                type="danger"
                            />
                        </Col>
                        <Col md={6}>
                            <SkillItem
                                title="CSS"
                                amount={90}
                                type="info"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <SkillItem
                                title="JavaScript"
                                amount={75}
                                type="warning"
                            />
                        </Col>
                        <Col md={6}>
                            <SkillItem
                                title="Git/GitHub"
                                amount={80}
                                type="success"
                            />
                        </Col>
                        <Col md={6}>
                            <SkillItem
                                title="React + Vite"
                                amount={80}
                                type="info"
                            />

                        </Col>
                    </Row>
                </ul>
            </Container>
        </section>
    );
};

const SkillItem = ({ title, amount, type }) => {
    return (
        <li className={styles.skill_items}>
            {title}
            <ProgressBar variant={type} now={amount} animated />
        </li>
    )
};