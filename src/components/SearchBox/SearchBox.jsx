import style from "./SearchBox.module.scss";

function SearchBox() {
  return (
    <div className={style.bgColor}>
      <p>SearchBox</p>
      <label>
        Search
        <input type="text" />
      </label>
    </div>
  );
}
export default SearchBox;
