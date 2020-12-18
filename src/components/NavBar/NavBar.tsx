import React, { FunctionComponent } from "react";
import style from "./style.module.css";
import { Icon } from "components";
import { FormControl, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../actions";
import { State } from "../../reducers/state";
import { useHistory } from "react-router";

interface OwnProps {}

type Props = OwnProps;

const NavBar: FunctionComponent<Props> = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isMenuOpen } = useSelector((s: State) => s);
  const search = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      alert("you pressed enter");
    }
  };
  return (
    <div className={style.navBar}>
      <Icon
        onClick={() => dispatch(toggleMenu)}
        name={"menu"}
        size={30}
        className={style.menuIcon}
      />
      <div className={style.title} onClick={() => history.push("/")}>
        <div className={style.saber}>Saber</div>
        <div className={style.eats}>Eats</div>
      </div>
      <div className={style.growBox} />
      <div className={style.locationButton}>
        <Icon
          name={"location"}
          size={[24, 24]}
          className={style.locationIcon}
        />
        <div>Seattle</div>
      </div>
      <InputGroup className={style.inputGroup}>
        <InputGroup.Prepend>
          <InputGroup.Text className={style.prepend}>
            <Icon name={"search"} size={16} />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="Shiro, I am hungry"
          aria-label="Username"
          aria-describedby="basic-addon1"
          className={style.input}
          onKeyPress={search}
        />
      </InputGroup>
      <div className={style.cartBtn}>
        <Icon name={"cart"} size={20} />
      </div>
    </div>
  );
};

export { NavBar };
