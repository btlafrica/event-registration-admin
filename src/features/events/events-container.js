import React, { useEffect } from "react";
import EventsComponent from "./events-component";
import { compose } from "ramda";
import { connect } from "react-redux";
import { getEvents, getLoading } from "./events-reducer";
import { createEvent, fetchEvents } from "./events-saga";
import { getClients } from "../clients/clients-reducer";

const mapStateToProps = (state) => ({
  loading: getLoading(state),
  clients: getClients(state),
  events: getEvents(state),
});

const EventsContainer = compose(
  connect(mapStateToProps, { fetchEvents, createEvent })
)(({ loading, fetchEvents, clients, createEvent, events }) => {
  useEffect(() => {
    fetchEvents();
  }, []);
  const handleCreateEvent = (data) => {
    // console.log(data);
    createEvent(data);
  };
  return (
    <EventsComponent
      loading={loading}
      clients={clients}
      events={events}
      handleCreateEvent={handleCreateEvent}
    />
  );
});

export default EventsContainer;
