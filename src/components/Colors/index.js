import classNames from "classnames/bind";
import styles from "./colors.module.css";
import { useSelector, useDispatch } from "react-redux";
import { changeActiveColor } from "../../redux/notes/notesSlice";
let cx = classNames.bind(styles);

export default function Colors() {
  const colors = useSelector((state) => state.notes.colors);
  const dispatch = useDispatch();

  const handleChangeColor = (id) => {
    dispatch(changeActiveColor({ id }));
  };

  return (
    <ul className={styles.wrapper}>
      {colors.map((color) => (
        <li
          key={color.id}
          className={cx({
            colorBox: true,
            active: color.isActive,
            reset: color?.isReset,
          })}
          style={{ backgroundColor: color?.backgroundColor }}
          onClick={() => handleChangeColor(color.id)}
        ></li>
      ))}
    </ul>
  );
}
