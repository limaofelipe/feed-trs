import styles from "./Header.module.css";
import feedLogo from"../assets/feed-logo.svg";

export function Header() {
    return (
        <div className={styles.header}>
            <img src={feedLogo} alt="Logo do Feed" />
        </div>
    );
}