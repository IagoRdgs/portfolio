import styles from "./Button.module.css";

export default function Button({text, href, download, target, onClick}) {
    return (
        <a className={styles.button} href={href} target={target} download={download} onClick={onClick}>{text}</a>
    );
};
