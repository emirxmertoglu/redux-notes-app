import styles from "./addNote.module.css";
import Colors from "../Colors";
import { useDispatch } from "react-redux";
import { addNote } from "../../redux/notes/notesSlice";
import { useState } from "react";

export default function AddNote() {
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const submitNote = (e) => {
    e.preventDefault();
    dispatch(addNote({ description }));
  };

  return (
    <form className={styles.wrapper}>
      <textarea
        placeholder="Enter your note here..."
        className={styles.enterNote}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className={styles.sub}>
        <Colors />
        <button
          type="submit"
          onClick={(e) => submitNote(e)}
          className={styles.btnSubmit}
        >
          Add
        </button>
      </div>
    </form>
  );
}
