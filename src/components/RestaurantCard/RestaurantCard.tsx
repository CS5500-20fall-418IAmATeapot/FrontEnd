import React, { FunctionComponent } from "react";
import style from "./style.module.css";

interface OwnProps {
  name: string;
  rating: number;
  fee: number;
  time: number;
  imageURL: string;
  size: number;
}

type Props = OwnProps;

const RestaurantCard: FunctionComponent<Props> = (props) => {
  return (
    <div style={{ width: props.size + "vw" }} className={style.container}>
      <div
        className={style.imageContainer}
        style={{ backgroundImage: `URL(${props.imageURL})` }}
      />
      <div className={style.infoArea}>
        <div className={style.restaurantName}>{props.name}</div>
        <div className={style.deliveryInfo}>
          {`$${props.fee} Delivery Fee | ${props.time} Min`}
        </div>
        <div className={style.ratingBack}>
          <div className={style.rating}>{props.rating}</div>
        </div>
      </div>
    </div>
  );
};

export { RestaurantCard };
