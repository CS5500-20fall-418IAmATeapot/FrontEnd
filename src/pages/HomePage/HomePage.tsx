import React, { FunctionComponent } from "react";
import style from "./style.module.css";

interface OwnProps {}

type Props = OwnProps;

const HomePage: FunctionComponent<Props> = (props) => {
  return (
    <div className={style.container}>
      <div className={style.carousel}>p</div>
      <div className={style.categoryBar}></div>
      <div className={style.popular}></div>
    </div>
  );
};

export { HomePage };
