import { useSelector } from "react-redux";
import Container from "./components/Container";
import Header from "./components/Header";

export default function App() {
  const notes = useSelector((state) => state.notes.list);

  return (
    <Container>
      <Header />
      <ul>
        {notes.map((note) => (
          <li key={note.id} style={{ backgroundColor: note.color }}>
            {note.description}
          </li>
        ))}
      </ul>
    </Container>
  );
}
