import React, { FunctionComponent } from "react";
import { Fee } from "./types";
import style from "./style.module.css";
import { Button } from "../../components";

interface OwnProps {}

type Props = OwnProps;

const OrderConfirmPage: FunctionComponent<Props> = (props) => {
  return (
    <div className={style.container}>
      <div className={style.deliveryArea}>address</div>
      <div className={style.feeArea}>
        <div className={style.feeList}></div>

        <Button text={"Place an order"} width={30} />
      </div>
      <div className={style.paymentArea}>pament</div>
    </div>
  );
};

export { OrderConfirmPage };
