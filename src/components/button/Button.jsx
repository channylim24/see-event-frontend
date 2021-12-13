import React from "react";
import { AiOutlineEye, AiOutlineSearch } from "react-icons/ai";

function Button({ iconLeft, iconRight, name }) {
  iconLeft = true;
  return (
    <div>
      <button>
        {iconLeft ? (
          <span>
            <AiOutlineEye />
          </span>
        ) : (
          ""
        )}
        {name}
        {iconRight ? <span>{iconRight}</span> : ""}
      </button>
    </div>
  );
}

export default Button;
