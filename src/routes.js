import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./views/pages/home/Home";
import DepositPage from "./views/pages/deposit/Deposit";
import ContactPage from "./views/pages/contact/Contact";
import SignIn from "./views/pages/account/SignIn";
import logo from "./images/google.svg";
export default function Routes() {
  return (
    <>
      <Router>
        <header>
          <a className="logo" href="/">
            <img src={logo} alt="Home" width="60px" height="60px"></img>
          </a>
          <nav>
            <ul className="nav-link">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/deposit">Nạp tiền</Link>
              </li>
              <li>
                <Link to="/contact">Liên hệ</Link>
              </li>
            </ul>
          </nav>
          <button className="signin-button">Đăng nhập</button>
        </header>
        <Switch>
          <Route path="/deposit">
            <DepositPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/account">
            <SignIn />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
