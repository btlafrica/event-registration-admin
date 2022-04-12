import React, { useEffect, useState } from "react";
import EventsComponent from "./events-component";
import { compose } from "ramda";
import { connect } from "react-redux";
import { getEvents, getLoading } from "./events-reducer";
import { createEvent, fetchEvents } from "./events-saga";
import { getClients } from "../clients/clients-reducer";
import { FiUser, FiUsers, FiCreditCard } from "react-icons/fi";
const tabs = [
  {
    title: "Overview",
    iconLight: <FiUser size={24} color="white" />,
    iconDark: <FiUser size={24} color="grey" />,
  },
  {
    title: "Users",
    iconLight: <FiUsers size={24} color="white" />,
    iconDark: <FiUsers size={24} color="grey" />,
  },
  {
    title: "Payments",
    iconLight: <FiCreditCard size={24} color="white" />,
    iconDark: <FiCreditCard size={24} color="grey" />,
  },
];
const mapStateToProps = (state) => ({
  loading: getLoading(state),
  clients: getClients(state),
  events: getEvents(state),
});

const EventsContainer = compose(
  connect(mapStateToProps, { fetchEvents, createEvent })
)(({ loading, fetchEvents, clients, createEvent, events }) => {
  const [selectedTab, setSelectedTab] = useState({
    title: "Overview",
    iconLight: <FiUser color="white" />,
    iconDark: <FiUser color="grey" />,
  });
  const handleSelectedTab = (tab) => {
    setSelectedTab(tab);
  };
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
      tabs={tabs}
      handleCreateEvent={handleCreateEvent}
      handleSelectedTab={handleSelectedTab}
      selectedTab={selectedTab}
    />
  );
});

export default EventsContainer;
