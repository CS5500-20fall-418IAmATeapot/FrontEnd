import { login, register, searchRestaurant } from "./index";
import { LoginForm, RegisterForm } from "../components/Menu/types";
import { SearchFilter } from "../model";

test("register", async () => {
  const form: RegisterForm = {
    username: "test",
    firstname: "testname",
    lastname: "testname",
    password: "testPwd",
    phoneNumber: "12345123",
  };

  const res = await register(form);
  console.log(res);
});

test("login", async () => {
  const loginForm: LoginForm = {
    username: "customerTestChange6",
    password: "testPassword",
  };

  const res = await login(loginForm);
  console.log(res);
});

test("searchRestaurant", async ()=>{
  const filter:SearchFilter={
    price:"$",
    keyword:"Chinese",
    sortBy:"default",
  }
  const res = await searchRestaurant(filter);
  console.log(res)
});
