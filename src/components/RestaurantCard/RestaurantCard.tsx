import React, { FunctionComponent } from "react";
import style from "./style.module.css";

interface OwnProps {
  name: string;
  rating: number;
  fee: number;
  time: number;
  imageURL: string;
}

type Props = OwnProps;

const RestaurantCard: FunctionComponent<Props> = (props) => {
  return (
    <div className={style.container}>
      <div className={style.infoArea}>
        <div className={style.itemName}>{props.name}</div>

        <div className={style.minusBack}></div>
        <div className={style.itemNum}>0</div>
        <div className={style.plusBack}></div>
      </div>
      <img className={style.imgArea} src={props.imageURL} alt="item image" />
    </div>
  );
};

export { RestaurantCard };
