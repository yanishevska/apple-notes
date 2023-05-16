import "./App.css";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { v4 as uuidv4 } from "uuid";
import ControlMenu from "./components/ControlMenu/ControlMenu";
import SearchBox from "./components/SearchBox/SearchBox";
import Sidebar from "./components/Sidebar/Sidebar";
import Workspace from "./components/Workspace";
import Wrap from "./components/Wrap/Wrap";
import WrapHeader from "./components/Wrap/WrapHeader";
import {
  getAllNotesDB,
  saveNoteDB,
  deleteNoteDB,
  updateNoteDB,
} from "./db/useIndexDB";
import { NotesContext } from "./context";
import { Modal } from "./components/Modal/Modal";

function App() {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function fetchNotes() {
      const fetchAllNotes = await getAllNotesDB();
      setNotes(fetchAllNotes);
    }
    fetchNotes();
  }, []);

  const addNote = async () => {
    const newNote = { id: uuidv4(), text: "", title: "", date: Date.now() };
    await saveNoteDB(newNote);
    setNotes((prevState) => [newNote, ...prevState]);
    setCurrentNote(newNote.id);
  };

  const deleteNote = async (id) => {
    await deleteNoteDB(id);
    setNotes(notes.filter((note) => note.id !== id));
    setCurrentNote(null);
    setShowModal(false);
  };

  const updateNote = async (updatedNoteDB) => {
    await updateNoteDB(updatedNoteDB);
    setNotes(
      notes.map((note) => (note.id === updatedNoteDB.id ? updatedNoteDB : note))
    );
  };

  const getCurrentNote = () => {
    return notes.find(({ id }) => id === currentNote);
  };

  const handleChange = (evt) => {
    setSearch(evt.target.value);
  };

  const getVisibleNotes = () => {
    const normalizedFilter = search.toLowerCase();
    return notes.filter((note) =>
      note.text.toLowerCase().includes(normalizedFilter)
    );
  };
  return (
    <NotesContext.Provider
      value={{
        notes,
        addNote,
        deleteNote,
        updateNote,
        currentNote,
        setCurrentNote,
        getCurrentNote,
        setSearch,
        getVisibleNotes,
        handleChange,
        setShowModal,
      }}
    >
      <WrapHeader>
        <ControlMenu />
        <SearchBox />
      </WrapHeader>

      <Wrap>
        <Sidebar />
        <Workspace />
        {showModal &&
          createPortal(
            <Modal onClose={() => setShowModal(false)} />,
            document.body
          )}
      </Wrap>
    </NotesContext.Provider>
  );
}

export default App;
