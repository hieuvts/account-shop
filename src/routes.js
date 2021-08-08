import { Layout, Affix, Button } from "antd";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from "./views/shared/constants";
import MyFooter from "./views/shared/footer";
import HomeHeader from "./views/shared/header";

const { Content } = Layout;
export default function Routes() {
  const [showTopBanner, setShowTopBanner] = useState(true);

  return (
    <>
      <Layout className="layout">
        <Router>
          {showTopBanner ? (
            <div className="top-banner">
              <Button
                type="link"
                style={{ marginLeft: "auto", color: "black" }}
                onClick={() => setShowTopBanner(false)}
              >
                X
              </Button>
            </div>
          ) : null}

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
