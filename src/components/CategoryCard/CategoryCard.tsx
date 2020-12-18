import React, { FunctionComponent } from "react";
import style from "./style.module.css";

interface OwnProps {
  name: string;

  imageURL: string;
  size: number;
}

type Props = OwnProps;

const CategoryCard: FunctionComponent<Props> = (props) => {
  return (
    <div style={{ width: props.size + "vw" }} className={style.container}>
      <img className={style.imageArea} src={props.imageURL} alt="item image" />
      <div className={style.textArea}>{props.name}</div>
    </div>
  );
};

export { CategoryCard };
