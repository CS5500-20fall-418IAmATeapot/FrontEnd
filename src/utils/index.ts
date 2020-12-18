import axios from "axios";
import { LoginForm, RegisterForm } from "components/Menu/types";
import { BACKEND_URL } from "../constants";
axios.defaults.baseURL = BACKEND_URL;
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

const login = async (loginForm: LoginForm): Promise<any> => {
  const data = await axios
    .post("/customer/login", {
      userName: loginForm.username,
      password: loginForm.password,
    })
    .then((res) => {
      return res.data;
    })
    .then((data) => {
      return data;
    })
    .catch((e: Error) => {
      console.log(e);
      return undefined;
    });
  return data;
};

const register = async (registerForm: RegisterForm): Promise<any> => {
  const data = await axios
    .post("/customer/register", {
      userName: registerForm.username,
      name: {
        firstName: registerForm.firstname,
        lastName: registerForm.lastname,
      },
      phone: registerForm.phoneNumber,
      password: registerForm.password,
    })
    .then((res) => {
      return res.data;
    })
    .catch((e: Error) => {
      console.log(e);
      return undefined;
    });
  return data;
};
export { login, register };
