import ListItem from "../ListItem/";
import style from "./Sidebar.module.scss";

function Sidebar() {
  return (
    <div className={style.bgColor}>
      <p>Sidebar</p>
      <ListItem />
    </div>
  );
}
export default Sidebar;
