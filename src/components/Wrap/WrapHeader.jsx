import style from "./Wrap.module.scss";
import React from "react";
function WrapHeader({ children }) {
  return <div className={style.WrapHeader}>{children}</div>;
}
export default WrapHeader;
