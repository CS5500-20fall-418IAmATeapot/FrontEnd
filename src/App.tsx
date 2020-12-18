import React from "react";
import "./App.css";
import { Foot, ItemCard, Menu, NavBar, RestaurantCard } from "./components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createStore, Store, applyMiddleware } from "redux";
import { initialState } from "reducers/state";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import { reducer } from "reducers";
import {
  HomePage,
  NotFoundPage,
  OrderConfirmPage,
  OrderHistoryPage,
  RestaurantPage,
  SearchPage,
} from "./pages";
import { login } from "./utils";
import { LoginForm } from "./components/Menu/types";

function App() {
  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  ) as Store;
  return (
    <Provider store={store}>
      <Router>
        <Menu />
        <div className="App">
          <NavBar />
          <div className={"pageContainer"}>
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
    </Provider>
  );
}

export default App;
