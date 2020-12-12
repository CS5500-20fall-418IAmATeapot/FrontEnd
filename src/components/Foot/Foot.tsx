import React, { FunctionComponent } from "react";
import style from "./style.module.css";
import saber1 from "assets/images/saber1.png";
import saber2 from "assets/images/saber2.png";
import saber3 from "assets/images/saber3.png";
import saber4 from "assets/images/saber4.png";

interface OwnProps {}

type Props = OwnProps;

const Foot: FunctionComponent<Props> = (props) => {
  return (
    <div className={style.container}>
      <div className={style.infoContainer}>
        <div className={style.title}>
          <div className={style.saber}>Saber</div>
          <div className={style.eats}>Eats</div>
        </div>
        <div className={style.slogan}>We provide best food!</div>
        <div className={style.copyright}>
          © 2020 TypeMoon Inc. All rights reserved&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      </div>
      <div className={style.imageContainer}>
        <img src={saber1} alt="" className={style.saberImg} />
        <img src={saber2} alt="" className={style.saberImg} />
        <img src={saber3} alt="" className={style.saberImg} />
        <img src={saber4} alt="" className={style.saberImg} />
      </div>
    </div>
  );
};

export { Foot };
