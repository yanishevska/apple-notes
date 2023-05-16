import React from "react";
import { useNotes } from "../../context";
import ListItem from "../ListItem";
import style from "./Sidebar.module.scss";

const Sidebar = () => {
  const { getVisibleNotes } = useNotes();
  const visibleNotes = getVisibleNotes();
  const sortedNotes = visibleNotes.sort((a, b) => b.date - a.date);
  return (
    <ul className={style.List}>
      {sortedNotes.length === 0 ? (
        <p>List is empty</p>
      ) : (
        sortedNotes.map(({ id, text, title, date }) => (
          <ListItem key={id} id={id} text={text} title={title} date={date} />
        ))
      )}
    </ul>
  );
};
export default Sidebar;
