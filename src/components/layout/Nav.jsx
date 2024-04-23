import styles from "./Nav.module.css";

import { useState } from "react";

import { CiMenuBurger } from "react-icons/ci";

export default function Nav() {
    const [barActive, setBarActive] = useState();

    return (
        <div className={styles.header_container}>
            <span className={styles.logo}>Logo</span>
            <CiMenuBurger
                className={`${styles.menu} ${barActive ? (() => {
                    document.body.style.overflow = 'hidden';
                    return styles.active;
                })() : (() => {
                    document.body.style.overflow = 'unset';
                    return "";
                })()
                    }`}
                onClick={() => { setBarActive(!barActive) }}
            />
            {barActive && <div className={styles.overlay} onClick={() => {
                setBarActive(false)
            }}></div>}
            <nav className={barActive ? `${styles.active}` : ""}>
                <ul onClick={() => { setBarActive(false) }}>
                    <Navigation
                        href="#sobre"
                        title="Sobre"
                    />
                    <Navigation
                        href="#skills"
                        title="Skills"
                    />
                    <Navigation
                        href="#projects"
                        title="Projetos"
                    />
                    <Navigation
                        href="#contact"
                        title="Contato"
                    />
                </ul>
            </nav >
        </div>
    );
};

const Navigation = ({ href, title }) => {
    return (
        <li>
            <a href={href}>
                <span className={styles.title}>{title}</span>
            </a>
        </li>
    )
};