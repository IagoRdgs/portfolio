import styles from "./Button.module.css";

export default function Button({text, href, download}) {
    return (
        <a className={styles.button} href={href} target="_blank" download={download}>{text}</a>
    );
};
