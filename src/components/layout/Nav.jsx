import styles from "./Nav.module.css";

import { useState } from "react";

import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

export default function Nav() {
    const [barActive, setBarActive] = useState();

    return (
        <div className={styles.header_container}>
            <span className={styles.logo}>Logo</span>
            {barActive ? (
                <>
                    <IoClose
                        className={`${styles.menu} ${styles.active}`}
                        onClick={() => {
                            setBarActive(!barActive);
                        }}
                    />
                    <div className={styles.overlay}></div>
                </>
            ) : <CiMenuBurger
                className={styles.menu}
                onClick={() => {
                    setBarActive(!barActive);
                }}
            />}
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
            <a href={href} className={styles.Title}>{title}</a>
        </li>
    )
};