import React, { FunctionComponent, useEffect, useState } from "react";
import { Item, Restaurant } from "../../model";
import style from "./style.module.css";
import { ItemCard } from "../../components";
import { getMenuByResId } from "../../utils";
import { useSelector } from "react-redux";
import { State } from "../../reducers/state";

interface OwnProps {}

type Props = OwnProps;

const RestaurantPage: FunctionComponent<Props> = (props) => {
  const restaurant: Restaurant = {
    addressId: 12,
    imageURL:
      "https://d1ralsognjng37.cloudfront.net/6a723fab-61c8-4def-a19d-c2670199ef49.jpeg",
    tags: ["Chinese", "Asian", "Noodles", "$"],
    id: 15,
    name: "Din Tai Fung (Pacific Place)",
  };

  const cart = useSelector((s:State)=>s.cart);
  const[menuData, setMenuData] = useState([]);
  useEffect(()=>{
    const getData = async () =>{
      const res = await getMenuByResId(restaurant.id);
      setMenuData(res);
    }
    getData();
  },[restaurant])

  const tags = restaurant.tags;
  [tags[0],tags[tags.length-1]] = [tags[tags.length-1],tags[0]];
  const tagsStr = tags.join(" • ");
  const deliveryTime = "35 - 45 Min •  ";
  const rating = 4.8;
  const fee = '  • $3.49 Delivery Fee'

  return (
    <div>
      <div
        className={style.imageContainer}
        style={{
          background: `URL(${restaurant.imageURL})`,
          backgroundSize: "100%",
          backgroundPosition: "center",
        }}
      >
        <div className={style.restaurantInfo}>
          <div className={style.title}>
            {restaurant.name}
          </div>
          <div className={style.tagsInfo}>
            {tagsStr}
          </div>
          <div className={style.deliverInfo}>
            {deliveryTime}
            <div className={style.rating}>
              {rating}
            </div>
            {fee}
          </div>
        </div>
      </div>

      <div className={style.cuisineList}>
        <div className={style.title}>Cuisine</div>
        <div className={style.cuisineContainer}>
          {
            menuData.map((item:Item)=>(
              <ItemCard  item={item}
                         number={cart.reduce((i:any)=>(item.id===i.id?0:1),0)}
                        size={500}/>
            ))
          }
        </div>


      </div>
    </div>
  );
};

export { RestaurantPage };
