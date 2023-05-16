import { useEffect } from "react";
import { useNotes } from "../../context";
import style from "./Modal.module.scss";
export const Modal = () => {
  const { currentNote, setShowModal, deleteNote } = useNotes();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        setShowModal(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setShowModal]);

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      setShowModal(false);
    }
  };

  return (
    <div className={style.Overlay} onClick={handleBackdropClick}>
      <div className={style.Modal}>
        <p>Delete this notes?</p>
        <div>
          <button
            className={style.BtnModal}
            onClick={() => deleteNote(currentNote)}
          >
            Yes
          </button>
          <button
            className={style.BtnModal}
            onClick={() => setShowModal(false)}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};
