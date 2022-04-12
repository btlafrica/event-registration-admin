import React from "react";
const Dashboard = React.lazy(() => import("./home/dashboard-container"));
const Admins = React.lazy(() => import("./admins/admins-container"));
const Events = React.lazy(() => import("./events/events-container"));
const Clients = React.lazy(() => import("./clients/clients-container"));
const AddEvent = React.lazy(() => import("./events/add-event/add-event-container"));
const routes = [
  { path: "/", exact: true },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/admins", name: "Admins", component: Admins },
  { path: "/events", name: "Events", component: Events },
  { path: "/clients", name: "Events", component: Clients },
  { path: "/add-event", name: "Events", component: AddEvent },
];

export default routes;
