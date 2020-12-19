import React, { FunctionComponent } from "react";
import style from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../reducers/state";
import { toggleCart, toggleMenu } from "../../actions";
import { Button } from "..";
import { Item } from "../../model";
import { useHistory } from "react-router";

interface OwnProps {}

type Props = OwnProps;

const CartMenu: FunctionComponent<Props> = (props) => {
  const isOn = useSelector((s: State) => s.isCartOpen);
  const cart = useSelector((s:State) => s.cart);
  const totalPrice = cart.reduce((num,item:Item)=>num+item.price,0);
  const history = useHistory();
  console.log(totalPrice)
  const totalNum = cart.length;
  const dispatch = useDispatch();
  const onHitBoxClicked = () =>{
    dispatch(toggleCart);
  };

  if (!isOn) return <div />;
  else return(
    <div className={style.cartContainer} >
    <div className={style.cartMenu}>
      <div className={style.item}>
        <div className={style.itemName} style={{fontSize:20,fontWeight:"bold"}}>Cuisine</div>
        <div className={style.itemPrice}style={{fontSize:20,fontWeight:"bold"}}>Price</div>
      </div>
      <div className={style.itemList}>
        {cart.map((item:Item)=>(
          <div className={style.item}>
            <div className={style.itemName} style={{fontWeight:"lighter"}}>{item.name}</div>
            <div className={style.itemPrice}style={{fontWeight:"lighter"}}>{item.price}</div>
          </div>
        ))}
      </div>
      <div
        className={style.btnContainer}
        onClick={()=>{
          dispatch(toggleCart);
          history.push("orderConfirm");
        }}
      >
        <div className={style.totalNum}>{totalNum}</div>
        <Button text={"Checkout"} width={"100%"}/>
        <div className={style.totalPrice}>{totalPrice}</div>
      </div>
    </div>
      <div className={style.hitBox} onWheel={onHitBoxClicked} onClick={onHitBoxClicked}/>
    </div>
  );
};

export { CartMenu };
