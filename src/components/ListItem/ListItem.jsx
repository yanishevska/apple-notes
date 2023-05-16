import style from "./ListItem.module.scss";
import React from "react";
import { useNotes } from "../../context";

const ListItem = ({ id, text, title, date }) => {
  const { currentNote, setCurrentNote } = useNotes();
  return (
    <div className={style.ListItemBox}>
      <li
        className={style.ListItem}
        currentNote={currentNote}
        id={id}
        onClick={() => setCurrentNote(id)}
      >
        <h2>{title.length > 0 ? title.slice(0, 10) : text.slice(0, 10)}</h2>
        <p>{text.length > 0 ? text.slice(0, 10) : "My awesome note..."}</p>
        <p>{new Date(date).toUTCString()}</p>
      </li>
    </div>
  );
};
export default ListItem;
