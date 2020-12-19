import React, { FunctionComponent } from "react";
import style from "./style.module.css";
import { Icon } from "..";
import { Link } from "react-router-dom";

interface OwnProps {
  name: string;
  title: string;
  size: number;
}

type Props = OwnProps;

const CategoryCard: FunctionComponent<Props> = (props) => {
  return (
    <div style={{ width: props.size + "vw" }} className={style.container}>
      <Link to="/search">
        <Icon name={props.name} size={props.size} />
      </Link>
      <div className={style.textArea}>{props.title}</div>
    </div>
  );
};

export { CategoryCard };
