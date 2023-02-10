import styles from "./note.module.css";

export default function Note({ id, backgroundColor, description }) {
  return (
    <li style={{ backgroundColor }} className={styles.note}>
      {description}
    </li>
  );
}
