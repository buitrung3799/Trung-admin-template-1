import React from "react";
const Home = React.lazy(() => import("./screens/Home"));
const ErrorPage = React.lazy(() => import("./screens/404Error"));
const UserGroup = React.lazy(() => import("./screens/User Group"));
const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/404-error",
    name: "404 Error",
    component: ErrorPage,
  },
  {
    path: "/user-group",
    name: "User Group",
    component: UserGroup,
  },
];
export default routes;
