import React, { ChangeEvent, FunctionComponent, useEffect, useState } from "react";
import style from "./style.module.css";
import { RestaurantCard } from "../../components";
import { Col, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { SearchFilter } from "../../model";
import { searchRestaurant } from "../../utils";
import { State } from "../../reducers/state";

interface OwnProps {}

type Props = OwnProps;

const SearchPage: FunctionComponent<Props> = (props) => {
  const keyword = useSelector((state:State) => state.keyword);

  const [price,setPrice] = useState("$");
  const filter:SearchFilter={
    price:price,
    keyword:keyword||"",
    sortBy:"default"
  }
  let [data,setData] = useState([]);
  useEffect( ()=>{
    const downloadData = async ()=>{
      const res = await searchRestaurant(filter);
      setData(res);
    }
    downloadData();
  },[price,keyword])
  const onRatioChange=(e:ChangeEvent<HTMLInputElement>)=>{
    setPrice(e.currentTarget.value);
  }
  return (
    <div>
      <div className={style.searchPage}>
        <div className={style.searchBar}>
          <div className={style.keyword}>{`"${keyword}"`}</div>
          <div className={style.numText}>{`${data.length}+ Restaurants`}</div>
          <form className={style.form}>
            <div className={style.inputGroup}>
              <input type="radio" name="price" value="$" checked={price ==="$"} onChange={onRatioChange} />
              <div className={style.labelText}>$</div>
            </div>

            <div className={style.inputGroup}>
              <input type="radio" name="price" value="$$" checked={price ==="$$"} onChange={onRatioChange}/>
              <div className={style.labelText}>$$</div>
            </div>

            <div className={style.inputGroup}>
              <input type="radio" name="price" value="$$$" checked={price ==="$$$"} onChange={onRatioChange}/>
              <div className={style.labelText}>$$$</div>
            </div>

            <div className={style.inputGroup}>
              <input type="radio" name="price" value="$$$$" checked={price === "$$$$"} onChange={onRatioChange}/>
              <div className={style.labelText}>$$$$</div>
            </div>

          </form>
        </div>
        <div className={style.restaurantsList}>
          {data.map((item:any)=>{
            return(
              <RestaurantCard
                key = {item.id}
                name={item.name}
                rating={parseFloat((2+Math.random()*2).toFixed(1))}
                fee={4}
                time={Math.floor(10+Math.random()*10)}
                imageURL={item.imageURL}
                size={24}
              />
            )
          })}
        </div>
      </div>
    </div>
  );
};

export { SearchPage };
