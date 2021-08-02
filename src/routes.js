import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { routes } from "./views/shared/constants";
import logo from "./images/google.svg";
import { Layout, Menu, Breadcrumb } from "antd";
import MyFooter from "./views/shared/footer";
const { Header, Content } = Layout;
export default function Routes() {
  
  return (
    <>
      {/* <Router>
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
      </Router> */}
      <Layout className="layout">
        <Router>
          <Header>
            <div className="logo">
              <img src={logo} alt="Home" width="50px" height="50px"></img>
            </div>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
              <Menu.Item key={1} onClick={() => console.log("clicked Home")}>
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key={2} onClick={() => console.log("clicked Deposit")}>
                <Link to="/deposit">Deposit</Link>
              </Menu.Item>
              <Menu.Item key={3} onClick={() => console.log("clicked Contact")}>
                <Link to="/contact">Contact</Link>
              </Menu.Item>
              <Menu.Item key={4} onClick={() => console.log("clicked SignIn")}>
                <Link to="/signin"> SignIn</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: "0 50px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>
                {window.location.pathname.toUpperCase()}
              </Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content">
              {/* <MainContent /> */}
              <Switch>
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                  />
                ))}
              </Switch>
            </div>
          </Content>
          <MyFooter />
        </Router>
      </Layout>
    </>
  );
}

function MainContent() {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      ))}
    </Switch>
  );
}
