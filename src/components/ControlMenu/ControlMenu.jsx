import style from "./ControlMenu.module.scss";

function ControlMenu() {
  return (
    <div className={style.bgColor}>
      <p>ControlMenu</p>
      <button>Add</button>
      <button>Delete</button>
      <button>Edit</button>
    </div>
  );
}
export default ControlMenu;
