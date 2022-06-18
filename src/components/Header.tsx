import logoIcon from "../assets/rocket.svg";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.logo}>
      <img src={logoIcon} alt="Blue rocket logo" />
      <h1>
        to<span>do</span>
      </h1>
    </header>
  );
}
