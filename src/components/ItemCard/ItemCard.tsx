import React, { FunctionComponent, useState } from "react";
import style from "./style.module.css";
import { Icon } from "../Icon/Icon";
import { Item } from "../../model";
import { useDispatch, useSelector } from "react-redux";
import { addCart, removeCart } from "../../actions";

interface OwnProps {
  item: Item;
  number?: number;
  size: number;
}

type Props = OwnProps;

const ItemCard: FunctionComponent<Props> = (props) => {
  const [numState, setNumState] = useState(props.number || 0);
  const dispatch = useDispatch();
  const onMinusClick = () => {
    if (numState > 0) setNumState(numState - 1);
    dispatch({ ...removeCart, data: props.item });
  };
  const onPlusClick = () => {
    setNumState(numState + 1);
    dispatch({ ...addCart, data: props.item });
  };

  let styleObj: any = {
    width: props.size,
  };
  if (numState !== 0) {
    styleObj["border"] = "3px solid #05A357";
  }

  return (
    <div style={styleObj} className={style.container}>
      <div className={style.infoArea}>
        <div className={style.itemName}>{props.item.name}</div>
        <div className={style.itemDescription}>{props.item.description}</div>
        <div className={style.itemPrice}>{`$${props.item.price}`}</div>
        <div className={style.itemSelect}>
          <div className={style.minusBack} onClick={onMinusClick}>
            <Icon name={"minus"} size={[25, 25]} />
          </div>
          <div className={style.itemNum}>{numState}</div>
          <div className={style.plusBack} onClick={onPlusClick}>
            <Icon name={"plus"} size={[25, 25]} />
          </div>
        </div>
      </div>
      <div
        className={style.imageArea}
        style={{
          background: `URL(${props.item.imageURL})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </div>
  );
};

export { ItemCard };
