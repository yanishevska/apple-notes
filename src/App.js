import "./App.css";
import { useState, useEffect } from "react";
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

  return (
    <>
      <WrapHeader>
        <ControlMenu />
        <SearchBox />
      </WrapHeader>

      <Wrap>
        <Sidebar />
        <Workspace />
      </Wrap>
    </>
  );
}

export default App;
