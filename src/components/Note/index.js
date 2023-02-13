import styles from "./note.module.css";
import { useDispatch } from "react-redux";
import { deleteNote } from "../../redux/notes/notesSlice";

export default function Note({ id, backgroundColor, description }) {
  const dispatch = useDispatch();
  const handleDeleteNote = () => {
    dispatch(deleteNote({ id }));
  };

  return (
    <li style={{ backgroundColor }} className={styles.note}>
      <span className={styles.description}>{description}</span>
      <span className={styles.deleteIcon} onClick={handleDeleteNote}>
        x
      </span>
    </li>
  );
}
