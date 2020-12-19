import React, { FunctionComponent } from "react";
import style from "./style.module.css";
interface OwnProps {
  text: string;
  width: number | string;
  onClick?: (e: any) => any;
  disabled?: boolean;
}

type Props = OwnProps;

const Button: FunctionComponent<Props> = (props) => {
  return (
    <button
      onClick={props.onClick}
      style={{
        width: props.width,
      }}
      type={"submit"}
      className={style.btn}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
};

export { Button };
