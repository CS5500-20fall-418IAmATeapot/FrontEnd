import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Foot, NavBar } from "./components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  HomePage,
  OrderConfirmPage,
  OrderHistoryPage,
  RestaurantPage,
  SearchPage,
} from "./pages";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="container">
          <Switch>
            <Route path={"/search"}>
              <SearchPage />
            </Route>
            <Route path={"/orderHistory"}>
              <OrderHistoryPage />
            </Route>
            <Route path={"/orderConfirm"}>
              <OrderConfirmPage />
            </Route>
            <Route path={"/restaurant"}>
              <RestaurantPage />
            </Route>
            <Route path={"/"}>
              <HomePage />
            </Route>
          </Switch>
        </div>
        <Foot />
      </div>
    </Router>
  );
}

export default App;
