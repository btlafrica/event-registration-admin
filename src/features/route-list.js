import React from "react";
const Dashboard = React.lazy(() => import("./home/dashboard-container"));
const routes = [
  { path: "/", exact: true },
  { path: "/dashboard", name: "Dasboard", component: Dashboard },
];

export default routes;
