import Container from "./components/Container";
import Header from "./components/Header";
import Search from "./components/Search";
import AddNote from "./components/AddNote";
import NoteList from "./components/NoteList";

export default function App() {
  return (
    <Container>
      <Header />
      <Search />
      <AddNote />
      <NoteList />
    </Container>
  );
}
