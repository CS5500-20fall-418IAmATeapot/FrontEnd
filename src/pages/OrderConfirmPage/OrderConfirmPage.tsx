import React, { FunctionComponent, useState } from "react";
import { Fee } from "./types";
import { DeliveryForm } from "./types";
import style from "./style.module.css";
import { Button, Icon } from "../../components";
import { Chip } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../reducers/state";
import { clearCart } from "../../actions";

interface OwnProps {}

type Props = OwnProps;

const OrderConfirmPage: FunctionComponent<Props> = (props) => {
  const cart = useSelector((s: State) => s.cart);
  const fee: Fee = {
    itemNum: cart.length,
    item: cart.reduce((c, item) => c + item.price, 0),
    service: 4,
    delivery: 3,
    total: cart.reduce((c, item) => c + item.price, 0) + 7,
  };
  const dispatch = useDispatch();

  const [hasInput, setHasInput] = useState(false);
  const saveInput = () => {
    alert("Address Confirmed");
    setHasInput(true);
  };
  const history = useHistory();

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
              style={{
                backgroundColor: `${hasInput ? "#cccccc" : "#f5f5f5"}`,
              }}
              placeholder={"Address First Line"}
              ref={deliveryRef}
              readOnly={hasInput}
            />
          </div>
          <div className={style.row}>
            <input
              name="secondLine"
              className={style.input}
              style={{
                backgroundColor: `${hasInput ? "#cccccc" : "#f5f5f5"}`,
              }}
              placeholder={"Address Second Line"}
              ref={deliveryRef}
              readOnly={hasInput}
            />
          </div>

          <div className={style.row} style={{ display: "flex" }}>
            <input
              name="city"
              className={style.input}
              style={{
                width: "30%",
                marginRight: "5%",
                backgroundColor: `${hasInput ? "#cccccc" : "#f5f5f5"}`,
              }}
              placeholder={"City"}
              ref={deliveryRef}
              readOnly={hasInput}
            />
            <input
              name="state"
              className={style.input}
              style={{
                width: "30%",
                marginRight: "5%",
                backgroundColor: `${hasInput ? "#cccccc" : "#f5f5f5"}`,
              }}
              placeholder={"State"}
              ref={deliveryRef}
              readOnly={hasInput}
            />
            <input
              name="zipcode"
              className={style.input}
              style={{
                width: "30%",
                backgroundColor: `${hasInput ? "#cccccc" : "#f5f5f5"}`,
              }}
              placeholder={"Zip Code"}
              ref={deliveryRef}
              readOnly={hasInput}
            />
          </div>

          <div className={style.row}>
            <input
              name="instructions"
              className={style.input}
              style={{
                backgroundColor: `${hasInput ? "#cccccc" : "#f5f5f5"}`,
              }}
              placeholder={"Add delivery instructions"}
              ref={deliveryRef}
              readOnly={hasInput}
            />
          </div>
        </form>
        <div onClick={saveInput}>
          <Button text={"Save & Continue"} width={"53vw"} disabled={hasInput} />
        </div>
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

        <Button
          text={"Place an order"}
          width={"27vw"}
          disabled={!hasInput}
          onClick={() => {
            alert("order placed");
            dispatch(clearCart);
            history.push("/");
          }}
        />
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
