import React, { FunctionComponent } from "react";
import style from "./style.module.css";
interface OwnProps {
  text: string;
  width: number | string;
  onClick?: (e: any) => any;
}

type Props = OwnProps;

const Button: FunctionComponent<Props> = (props) => {
  return (
    <button
      onClick={props.onClick}
      style={{ width: `${props.width}vw` }}
      type={"submit"}
      className={style.btn}
    >
      {props.text}
    </button>
  );
};

export { Button };
