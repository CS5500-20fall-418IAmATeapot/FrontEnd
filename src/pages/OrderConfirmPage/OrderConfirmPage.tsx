import React, { FunctionComponent } from "react";
import { Fee } from "./types";
import { deliveryForm } from "./types";
import style from "./style.module.css";
import { Button, Icon } from "../../components";
import { Chip } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { LoginForm } from "../../components/Menu/types";

interface OwnProps {}

type Props = OwnProps;

const OrderConfirmPage: FunctionComponent<Props> = (props) => {
  const fee: Fee = {
    itemNum: 5,
    item: 47.05,
    service: 4.5,
    delivery: 5.49,
    total: 57.09,
  };

  const { register: deliveryRef, handleSubmit: handleDelivery } = useForm();
  //TODO onDelivery
  const onDelivery = () => {};

  return (
    <div className={style.container}>
      <div className={style.deliveryArea}>
        <div className={style.deliveryText}>Edit delivery details</div>
        <form
          onSubmit={handleDelivery(onDelivery)}
          className={style.deliveryForm}
        >
          <div className={style.row}>
            <input
              name="firstLine"
              className={style.input}
              placeholder={"Address First Line"}
              ref={deliveryRef}
            />
          </div>
          <div className={style.row}>
            <input
              name="secondLine"
              className={style.input}
              placeholder={"Address Second Line"}
              ref={deliveryRef}
            />
          </div>

          <div className={style.row} style={{ display: "flex" }}>
            <input
              name="city"
              className={style.input}
              style={{ width: "30%", marginRight: "5%" }}
              placeholder={"City"}
              ref={deliveryRef}
            />
            <input
              name="state"
              className={style.input}
              style={{ width: "30%", marginRight: "5%" }}
              placeholder={"State"}
              ref={deliveryRef}
            />
            <input
              name="zipcode"
              className={style.input}
              style={{ width: "30%" }}
              placeholder={"Zip Code"}
              ref={deliveryRef}
            />
          </div>

          <div className={style.row}>
            <input
              name="instructions"
              className={style.input}
              placeholder={"Add delivery instructions"}
              ref={deliveryRef}
            />
          </div>
        </form>
        <Button text={"Save & Continue"} width={53} disabled={true} />
      </div>
      <div className={style.feeArea}>
        <div className={style.feeList}>
          <table className={style.feeTable}>
            <tr>
              <td>
                {"Subtotal · "}
                <span
                  style={{ textDecoration: "underline", fontWeight: "bold" }}
                >{`${fee.itemNum} items`}</span>
              </td>
              <td style={{ textAlign: "right" }}>{`$${fee.item}`}</td>
            </tr>
            <tr>
              <td>Service Fee</td>
              <td style={{ textAlign: "right" }}>{`$${fee.service}`}</td>
            </tr>
            <tr>
              <td>Delivery Fee</td>
              <td style={{ textAlign: "right" }}>{`$${fee.delivery}`}</td>
            </tr>
            <tr>
              <td style={{ fontWeight: "bold" }}>Total</td>
              <td style={{ textAlign: "right" }}>{`$${fee.total}`}</td>
            </tr>
          </table>
        </div>

        <Button text={"Place an order"} width={27} disabled={true} />
      </div>
      <div className={style.paymentArea}>
        <div className={style.paymentText}>Payment</div>
        <div className={style.divider}></div>
        <div className={style.paymentList}>
          <Chip
            style={{ marginRight: "30px", fontWeight: "bold" }}
            icon={<Icon name="creditCard" size={[20, 20]} />}
            label={"Credit Card"}
          />
          <Chip
            style={{ fontWeight: "bold" }}
            icon={<Icon name="paypal" size={[20, 20]} />}
            label={"Paypal"}
          />
        </div>
      </div>
    </div>
  );
};

export { OrderConfirmPage };
