import { Layout, Affix } from "antd";
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
          <Content style={{ padding: "10px 20px" }}>
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
