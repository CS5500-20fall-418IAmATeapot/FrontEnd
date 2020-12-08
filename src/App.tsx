import React from "react";
import "./App.css";
import { Foot, ItemCard, NavBar, RestaurantCard } from "./components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  HomePage,
  NotFoundPage,
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
        <ItemCard
          name={"Caffe"}
          price={4.15}
          description={
            "Our dark, rich espresso balanced with steamed milk and a light layer of foa...."
          }
          imageURL={"https://i.imgur.com/8qy6ewL.png"}
          size={400}
        />
        <div className="container">
          <Switch>
            <Route path={"/"} exact>
              <HomePage />
            </Route>
            <Route path={"/search"} exact>
              <SearchPage />
            </Route>
            <Route path={"/orderHistory"} exact>
              <OrderHistoryPage />
            </Route>
            <Route path={"/orderConfirm"} exact>
              <OrderConfirmPage />
            </Route>
            <Route path={"/restaurant"} exact>
              <RestaurantPage />
            </Route>
            <Route component={NotFoundPage} />
          </Switch>
        </div>
        <Foot />
      </div>
    </Router>
  );
}

export default App;
