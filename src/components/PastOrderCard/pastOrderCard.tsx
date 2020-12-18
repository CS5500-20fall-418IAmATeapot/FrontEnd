import React, { FunctionComponent } from "react";
import style from "./style.module.css";
import {Button} from "../Button/Button";

interface OwnProps {
    name: string;
    description: string;
    imageURL: string;
    size: number;
    time: string;
    menu: string;
}

type Props = OwnProps;

const PastOrderCard: FunctionComponent<Props> = (props) => {
    return (
        <div className={style.container}>
            <div className={style.infoArea}>
                <div className={style.itemName}>{props.name}</div>
                <div className={style.itemDescription}>{props.description}</div>
                <div className={style.time}>{props.time}</div>
                <div className={style.menu}>{props.menu}</div>
            </div>
            <img className={style.imageArea} src={props.imageURL} alt="item image" />
            <div className={style.button}>
                <Button  text={"Reorder"} width={100} />
            </div>

        </div>
    );
};

export { PastOrderCard };