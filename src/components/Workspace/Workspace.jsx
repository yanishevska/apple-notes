import style from "./Workspace.module.scss";
import { useNotes } from "../../context";
import React from "react";

const Workspace = () => {
  const { getCurrentNote, updateNote } = useNotes();
  const activeNote = getCurrentNote();
  const onChange = (data, value) => {
    updateNote({
      ...activeNote,
      [data]: value,
      date: Date.now(),
    });
  };

  return (
    activeNote && (
      <form className={style.Form}>
        <p className={style.Date}>{new Date(activeNote.date).toUTCString()}</p>
        <input
          style={{
            borderStyle: "none",
            fontSize: "24px",
            padding: "10px",
            marginBottom: "5px",
          }}
          type="text"
          placeholder="Title"
          id="title"
          value={activeNote.title}
          onChange={(e) => onChange("title", e.target.value)}
        ></input>
        <textarea
          type="text"
          id="text"
          placeholder="Write down your thoughts..."
          value={activeNote.text}
          onChange={(e) => onChange("text", e.target.value)}
          rows="20"
          autoFocus
          style={{ borderStyle: "none", fontSize: "24px" }}
        ></textarea>
      </form>
    )
  );
};
export default Workspace;
