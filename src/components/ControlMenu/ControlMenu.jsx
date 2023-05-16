import style from "./ControlMenu.module.scss";
import { CiTrash, CiEdit } from "react-icons/ci";
import { useNotes } from "../../context";
import Icon from "../../img/plus.svg";
function ControlMenu() {
  const { currentNote, addNote, setShowModal } = useNotes();

  return (
    <div className={style.ControlBox}>
      <button className={style.BtnControl} onClick={addNote}>
        <img src={Icon} alt="" />
      </button>
      <button
        className={style.BtnControl}
        disabled={!currentNote}
        onClick={() => setShowModal(true)}
      >
        <CiTrash />
      </button>
      <button className={style.BtnControl} disabled={!currentNote}>
        <CiEdit />
      </button>
    </div>
  );
}
export default ControlMenu;
