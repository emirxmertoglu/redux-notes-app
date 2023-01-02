import "./styles.css";
import { useSelector } from "react-redux";

export default function App() {
  const notes = useSelector((state) => state.notes.notes);

  return (
    <div className="App">
      <ul>
        {notes.map((note) => (
          <li key={note.id} style={{ backgroundColor: note.color }}>
            {note.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
