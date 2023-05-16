import style from "./Wrap.module.scss";
import React from "react";
function Wrap({ children }) {
  return <div className={style.Wrap}>{children}</div>;
}
export default Wrap;
