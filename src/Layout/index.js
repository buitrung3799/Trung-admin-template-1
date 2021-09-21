import React, { Suspense, useState } from "react";
import { Container, Header, Content, Footer, Sidebar } from "rsuite";
import { Redirect, Route, Switch } from "react-router-dom";
import DefaultNavbar from "./DefaultNavbar";
import DefaultSidebar from "./DefaultSidebar";
import DefaultFooter from "./DefaultFooter";
import ErrorPage from "../screens/404Error";
import routes from "../routes";
import { Loading } from "../components/UI Components";
// ==================================================================
export default function Home(props) {
  const [expand, setExpand] = useState(true);
  const [activeRoute, setActiveRoute] = useState("home");
  const handleSelectRoute = (activeKey) => {
    setActiveRoute(activeKey);
  };
  const handleExpand = () => {
    setExpand(!expand);
  };

  return (
    <Container>
      <Header>
        <DefaultNavbar handleExpand={handleExpand} />
      </Header>
      <Container className="page-container">
        <Sidebar collapsible width={expand ? 250 : 56}>
          <DefaultSidebar
            activeRoute={activeRoute}
            handleSelectRoute={handleSelectRoute}
            expand={expand}
          />
        </Sidebar>
        <Container>
          <Content>
            <Suspense fallback={<Loading />}>
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
          </Content>
          <Footer>
            <DefaultFooter />
          </Footer>
        </Container>
      </Container>
    </Container>
  );
}
