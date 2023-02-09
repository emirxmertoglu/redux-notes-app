import { useSelector } from "react-redux";
import Container from "./components/Container";
import Header from "./components/Header";
import Search from "./components/Search";

export default function App() {
  const notes = useSelector((state) => state.notes.list);

  return (
    <Container>
      <Header />
      <Search />
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
