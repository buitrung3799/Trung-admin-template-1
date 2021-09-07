import React, { Suspense, useState } from "react";
import { Container, Header, Content, Footer, Sidebar } from "rsuite";
import { Redirect, Route, Switch } from "react-router-dom";
import DefaultNavbar from "./DefaultNavbar";
import DefaultSidebar from "./DefaultSidebar";
import DefaultFooter from "./DefaultFooter";
import ErrorPage from "./404Error";
import routes from "../routes";
import { Progress } from "rsuite";

const { Line } = Progress;
// ==================================================================
export default function Home(props) {
  const [expand, setExpand] = useState(true);
  const handleExpand = () => {
    setExpand(!expand);
  };
  const loading = () => {
    <div style={{ position: "absolute", top: 0, width: "100%" }}>
      <Line percent={100} strokeColor="blue" />
    </div>;
  };
  return (
    <Container>
      <Header>
        <DefaultNavbar handleExpand={handleExpand} />
      </Header>
      <Container className="page-container">
        <Sidebar collapsible width={expand ? 250 : 56}>
          <DefaultSidebar expand={expand} />
        </Sidebar>
        <Container>
          <Content>
            <Suspense fallback={loading()}>
              <Switch>
                {routes.map((route, idx) => {
                  return route.component ? (
                    <Route
                      key={idx}
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
                    >
                      <route.component {...props} />
                    </Route>
                  ) : (
                    <ErrorPage {...props} />
                  );
                })}
                <Redirect from="/" to="/404-error" />
              </Switch>
            </Suspense>
            <ErrorPage />
          </Content>
          <Footer>
            <DefaultFooter />
          </Footer>
        </Container>
      </Container>
    </Container>
  );
}
