import React, { FunctionComponent, useState } from "react";
import style from "./style.module.css";
import { useForm } from "react-hook-form";
import { Button, Icon } from "components";
import { useHistory } from "react-router";
import { LoginForm, RegisterForm } from "./types";
import { useDispatch, useSelector } from "react-redux";
import { State } from "reducers/state";
import { logout, toggleMenu } from "../../actions";
import { login,register } from "utils";
import {login as loginAction, logout as logoutAction} from 'actions';

interface OwnProps {}

type Props = OwnProps;

const Menu: FunctionComponent<Props> = (props) => {
  const isOn = useSelector((s: State) => s.isMenuOpen);
  const {user} = useSelector((s:State)=>s);
  const dispatch = useDispatch();
  var content;
  const [status, setStatus] = useState("logging");
  const history = useHistory();

  const { register: loginRef, handleSubmit: handleLogin } = useForm<
    LoginForm
  >();
  const { register: registerRef, handleSubmit: handleRegister } = useForm<RegisterForm>();

  const onLogin = async (data: LoginForm) => {
    const res = await login(data);
    if(res === undefined){
      alert('invalid credentials');
    }
    else{
      dispatch({...loginAction,data:res.data});
      setStatus("logged");
    }
  };

  const onRegister = async (data: RegisterForm) => {
    const res = await register(data);
    if(res === undefined){
      alert("username existed");
    }
    else
      setStatus("logging");
  };

  const onLogout = () => {
    dispatch(logoutAction);
    setStatus("logging");
  };

  if (!isOn) {
    return <div />;
  }

  if (status === "register") {
    content = (
      <form onSubmit={handleRegister(onRegister)} className={style.menu}>
        <div className={style.row}>
          <div className={style.text}>Username</div>
          <input
            name="username"
            className={style.input}
            placeholder={"Username"}
            ref={registerRef}
          />
        </div>

        <div className={style.row}>
          <div className={style.text}>Password</div>
          <input
            name="password"
            type="password"
            className={style.input}
            placeholder={"Password"}
            ref={registerRef}
          />
        </div>

        <div className={style.row}>
          <div className={style.text}>Firstname</div>
          <input
            name="firstname"
            className={style.input}
            placeholder={"firstname"}
            ref={registerRef}
          />
        </div>

        <div className={style.row}>
          <div className={style.text}>Lastname</div>
          <input
            name="lastname"
            className={style.input}
            placeholder={"lastname"}
            ref={registerRef}
          />
        </div>

        <div className={style.row}>
          <div className={style.text}>Phone Number</div>
          <input
            name="phoneNumber"
            className={style.input}
            placeholder={"phoneNumber"}
            ref={registerRef}
          />
        </div>

        <div className={[style.row, style.center].join(" ")}>
          <Button text={"register"} width={250} />
        </div>

        <div className={[style.row, style.center].join(" ")}>
          <Button
            text={"back"}
            width={250}
            onClick={() => setStatus("logging")}
          />
        </div>
      </form>
    );
  } else if (status === "logged") {
    content = (
      <form className={style.menu}>
        <div className={style.flexRow}>
          <Icon size={[56, 56]} name={"appIcon"} className={style.avatar} />
          <div className={style.appText}>{user?.userName||"user"}</div>
        </div>

        <div
          className={style.flexRow}
          onClick={() => {history.push("/orderHistory");dispatch(toggleMenu)}}
        >
          <Icon size={[20, 20]} name={"orderIcon"} />
          <div className={style.appText}>orders</div>
        </div>

        <div className={style.flexRow}>
          <div className={style.logoutBtn} onClick={onLogout}>
            log out
          </div>
        </div>
      </form>
    );
  } else
    content = (
      <form className={style.menu} onSubmit={handleLogin(onLogin)}>
        <div className={style.row}>
          <div className={style.text}>Username</div>
          <input
            name="username"
            className={style.input}
            placeholder={"Username"}
            ref={loginRef}
          />
        </div>

        <div className={style.row}>
          <div className={style.text}>Password</div>
          <input
            name="password"
            type="password"
            className={style.input}
            placeholder={"Password"}
            ref={loginRef}
          />
        </div>

        <div className={[style.row, style.center].join(" ")}>
          <Button text={"login"} width={250} />
        </div>

        <div className={[style.row, style.center].join(" ")}>
          <Button
            text={"register"}
            width={250}
            onClick={() => setStatus("register")}
          />
        </div>

        <div className={style.blocker} />
        <div className={style.row}>
          <div className={style.center}>
            <Icon size={[56, 56]} name={"appIcon"} />
            <div className={style.appText}>There’s more to eat on our app!</div>
          </div>
        </div>
        <div className={style.row}>
          <div className={style.spaceBwn}>
            <div className={style.iconBtn}>
              <Icon name={"appleIcon"} size={20} />
              <div className={style.appText}>iPhone</div>
            </div>

            <div className={style.iconBtn}>
              <Icon name={"androidIcon"} size={20} />
              <div className={style.appText}>Android</div>
            </div>
          </div>
        </div>
      </form>
    );
  return (
    <div className={style.menuContainer}>
      {content}
      <div onClick={() => dispatch(toggleMenu)} className={style.hitBox} />
    </div>
  );
};

export { Menu };
