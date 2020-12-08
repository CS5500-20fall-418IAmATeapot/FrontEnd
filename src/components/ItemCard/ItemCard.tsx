import React, { FunctionComponent } from "react";
import style from "./style.module.css";
import { Icon } from "../Icon/Icon";

interface OwnProps {
  name: string;
  price: number;
  description: string;
  imageURL: string;
  size: number;
}

type Props = OwnProps;

const ItemCard: FunctionComponent<Props> = (props) => {
  return (
    <div
      style={{ width: props.size, height: props.size * 0.56 }}
      className={style.container}
    >
      <div className={style.infoArea}>
        <div className={style.itemName}>{props.name}</div>
        <div className={style.itemDescription}>{props.description}</div>
        <div className={style.itemPrice}>{`$${props.price}`}</div>
        <div className={style.minusBack}>
          <Icon name={"minus"} size={25} />
        </div>
        <div className={style.itemNum}>0</div>
        <div className={style.plusBack}>
          <Icon name={"plus"} size={25} />
        </div>
      </div>
      <img className={style.imageArea} src={props.imageURL} alt="item image" />
    </div>
  );
};

export { ItemCard };
