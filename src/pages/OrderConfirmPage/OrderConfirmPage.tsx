import React, { FunctionComponent } from "react";
import { Fee } from "./types";
import style from "./style.module.css";

interface OwnProps {}

type Props = OwnProps;

const OrderConfirmPage: FunctionComponent<Props> = (props) => {
  return (
    <div className={style.page}>
      <div>p</div>
    </div>
  );
};

export { OrderConfirmPage };
