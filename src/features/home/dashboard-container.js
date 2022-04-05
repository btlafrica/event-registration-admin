import React, { useEffect } from "react";
import DashboardComponent from "./dashboard-component";
import { compose } from "ramda";
import { connect } from "react-redux";
import { getClients } from "../clients/clients-reducer";
import { getEvents } from "../events/events-reducer";
import { fetchClients } from "../clients/clients-saga";
import { fetchEvents } from "../events/events-saga";
const mapStateToProps = (state) => ({
  clients: getClients(state),
  events: getEvents(state),
});

const DashboardContainer = compose(
  connect(mapStateToProps, { fetchClients, fetchEvents })
)(({ clients, events, fetchClients, fetchEvents }) => {
  useEffect(() => {
    fetchClients();
    fetchEvents();
  }, []);

  return <DashboardComponent clients={clients} events={events} />;
});

export default DashboardContainer;
