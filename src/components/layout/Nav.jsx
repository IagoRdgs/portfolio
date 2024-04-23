import styles from "./Nav.module.css";

import { useState } from "react";

import { CiMenuBurger } from "react-icons/ci";

export default function Nav() {
    const [barActive, setBarActive] = useState();

    return (
        <div className={styles.header_container}>
            <span className={styles.logo}>Logo</span>
            <CiMenuBurger
                className={`${styles.menu} ${barActive ? styles.active : ""}`}
                onClick={() => { setBarActive(!barActive) }}
            />
            {barActive && <div className={styles.overlay}></div>}
            <nav className={barActive ? `${styles.active}` : ""}>
                <ul>
                    <Navigation
                        href="#"
                        title="Sobre"
                    />
                    <Navigation
                        href="#"
                        title="Skills"
                    />
                    <Navigation
                        href="#"
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