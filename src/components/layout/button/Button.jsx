import styles from "./Button.module.css";

export default function Button({text, href, download, target, onClick}) {
    return (
        <div className={styles.button}>
            <a href={href} target={target} download={download} onClick={onClick}>{text}</a>
        </div>
    );
};
