import style from "./ListItem.module.scss";

function ListItem() {
  const date = new Date();
  return (
    <div className={style.bgColor}>
      <p>ListItem</p>
      <ul>
        <li>
          <h3>Wow</h3>
          <p>{date.toUTCString()}</p>
          <p>It`s my amazing notes</p>
        </li>
        <li>
          {" "}
          <h3>Wow</h3>
          <p>{date.toUTCString()}</p>
          <p>It`s my amazing notes</p>
        </li>
        <li>
          {" "}
          <h3>Wow</h3>
          <p>{date.toUTCString()}</p>
          <p>It`s my amazing notes</p>
        </li>
      </ul>
    </div>
  );
}
export default ListItem;
