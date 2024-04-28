import styles from "./Button.module.css";

export default function Button({text, href, download, target}) {
    return (
        <a className={styles.button} href={href} target={target} download={download}>{text}</a>
    );
};
