import React from "react";
const Home = React.lazy(() => import("./screens/Home"));
const ErrorPage = React.lazy(() => import("./screens/404Error"));
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
];
export default routes;
