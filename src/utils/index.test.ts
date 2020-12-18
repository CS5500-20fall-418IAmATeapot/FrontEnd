import { login, register } from "./index";
import { LoginForm, RegisterForm } from "../components/Menu/types";

test("register", async () => {

  const form:RegisterForm= {
    username:"test",
    firstname:"testname",
    lastname:'testname',
    password:"testPwd",
    phoneNumber:"12345123",
  }

  const res = await register(form);
  console.log(res)

});

test("login", async () => {

  const loginForm:LoginForm={
    username:"customerTestChange6",
    password:"testPassword",
  }

  const res = await login(loginForm);
  console.log(res)

});
