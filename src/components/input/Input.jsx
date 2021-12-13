import style from "./input.module.scss";
import { AiOutlineEye, AiOutlineSearch } from "react-icons/ai";

function Input({ classStyle, type, iconLeft, iconRight }) {
  return (
    <div className={style[{ classStyle }]}>
      {iconLeft ? (
        <button className={style.search__browse}>
          <AiOutlineSearch />
        </button>
      ) : (
        ""
      )}
      <input type={type} className={style.input__field} placeholder="Search" />
      {iconRight ? (
        <button className={style.input__eye}>
          <AiOutlineEye />
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default Input;
