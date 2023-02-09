import styles from "./addNote.module.css";

export default function AddNote() {
  return (
    <form className={styles.wrapper}>
      <textarea
        placeholder="Enter your note here..."
        className={styles.enterNote}
      />
      <div className={styles.sub}>
        <div>left side</div>
        <button
          type="submit"
          onClick={(e) => e.preventDefault()}
          className={styles.btnSubmit}
        >
          Add
        </button>
      </div>
    </form>
  );
}
