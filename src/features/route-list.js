import React from "react";
const Dashboard = React.lazy(() => import("./home/dashboard-container"));
const Admins = React.lazy(() => import("./admins/admins-container"));
const Events = React.lazy(() => import("./events/events-container"));
const Clients= React.lazy(() => import("./clients/clients-container"));
const routes = [
  { path: "/", exact: true },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/admins", name: "Admins", component: Admins },
  { path: "/events", name: "Events", component: Events },
  { path: "/clients", name: "Events", component: Clients },
];

export default routes;
