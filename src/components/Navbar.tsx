import { useTheme } from "../context/ThemeContext";
import styles from "./Navbar.module.css";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={styles.navbar}>
      <h1>Theme Switcher</h1>

      <button onClick={toggleTheme}>
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </nav>
  );
}