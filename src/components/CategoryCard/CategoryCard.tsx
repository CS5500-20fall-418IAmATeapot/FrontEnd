import React, { FunctionComponent } from "react";
import style from "./style.module.css";
import { Icon } from "..";
import { Link } from "react-router-dom";
import { search as searchAction } from "../../actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

interface OwnProps {
  name: string;
  title: string;
  size: number;
}

type Props = OwnProps;

const CategoryCard: FunctionComponent<Props> = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const searchCategory = (keyword: string) => {
    dispatch({ ...searchAction, data: keyword });
    history.push("search");
  };

  return (
    <div style={{ width: props.size + "vw" }} className={style.container}>
      <div onClick={(e) => searchCategory(props.title)}>
        <Icon name={props.name} size={props.size} />
      </div>

      <div className={style.textArea}>{props.title}</div>
    </div>
  );
};

export { CategoryCard };
