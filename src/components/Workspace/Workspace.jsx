import style from "./Workspace.module.scss";

function Workspace() {
  return (
    <div className={style.bgColor}>
      <p>Workspace</p>
      <textarea cols="100" placeholder="Type...." maxLength="1000"></textarea>
    </div>
  );
}
export default Workspace;
