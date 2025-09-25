import styles from "../Contact/Contact.module.css";
import { motion } from "framer-motion";

import { Container } from "react-bootstrap";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
    return (
        <motion.section initial={{ x: -200, y: 250, opacity: 0 }} whileInView={{ x: 0, opacity: 1, y: 0 }} transition={{ duration: .5 }} id="contact" className={styles.contact_container}>
            <Container>
                <h2>Contato</h2>
                <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5 }} className={styles.contact_content}>
                    <p>Envie-me um E-mail</p>
                    <form action="https://formspree.io/f/mgegjaqw" method="POST" className={styles.form_contact}>
                        <div className={styles.input_group}>
                            <input type="email" id="email" name="email" placeholder="exemplo@email.com" required />
                            <label htmlFor="email">E-mail</label>
                        </div>

                        <div className={styles.input_group}>
                            <input type="text" name="message" id="message" placeholder="Sua mensagem..." required></input>
                            <label htmlFor="message">Mensagem</label>
                        </div>

                        <button type="submit">Enviar</button>
                    </form>
                </motion.div>

            </Container>
            <div className={styles.social_media}>
                <ul className={styles.social_media_list}>
                    <li>
                        <a href="https://www.linkedin.com/in/iago-rdgs" target="_blank">
                            <FaLinkedin />
                        </a>
                    </li>
                    {/* <li>
                        <a href="https://www.instagram.com/iago__zz" target="_blank">
                            <FaInstagram />
                        </a>
                    </li> */}
                    <li>
                        <a href="https://wa.me/5585981463192" target="_blank">
                            <FaWhatsapp />
                        </a>
                    </li>
                </ul>
                <p>&copy; 2024 Iago Rodrigues. Todos os direitos reservados.</p>
            </div>
        </motion.section>
    );
};
