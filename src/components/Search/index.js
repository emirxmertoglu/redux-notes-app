import styles from "./search.module.css";
import { useDispatch } from "react-redux";
import { changeSearch } from "../../redux/notes/notesSlice";

export default function Search() {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(changeSearch({ search: e.target.value }));
  };

  return (
    <input
      className={styles.search}
      placeholder="Search..."
      onChange={(e) => handleSearch(e)}
    />
  );
}
