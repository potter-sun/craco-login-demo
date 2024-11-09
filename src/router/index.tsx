import { createBrowserRouter, useRoutes } from "react-router-dom";

import App from "../App";

/**
 * Router auth
 * @param props components
 * @returns
 */
const RouterBeforeEach = (props: any) => {
  if (props.route?.meta?.auth) {
    const isConnected = window.localStorage.getItem("isConnected");
    if (isConnected !== "true") {
      return <div>Login your wallet please!</div>;
    }
  }
  return <div>{props.children}</div>;
};
const formattedRoutes = (routes: any) => {
  return routes.map((route: any) => {
    const _route: any = {
      meta: route.meta || {},
      path: route.path,
      element: (
        <RouterBeforeEach route={route}>{route.element}</RouterBeforeEach>
      ),
      children: route.children ? formattedRoutes(route.children) : [],
    };
    return _route;
  });
};

const routes = [
  {
    path: "/",
    element: <App />,
  },
];

export default createBrowserRouter([
  {
    path: "*",
    Component: () => useRoutes(formattedRoutes(routes)),
  },
]);
