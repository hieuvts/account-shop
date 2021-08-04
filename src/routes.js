import { Breadcrumb, Layout, Affix } from "antd";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from "./views/shared/constants";
import MyFooter from "./views/shared/footer";
import HomeHeader from "./views/shared/header";

const { Header, Content } = Layout;
export default function Routes() {
  return (
    <>
      <Layout className="layout">
        <Router>
          <Affix>
            <HomeHeader />
          </Affix>
          <Content style={{ padding: "0 50px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>
                {window.location.pathname.toUpperCase()}
              </Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content">
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
