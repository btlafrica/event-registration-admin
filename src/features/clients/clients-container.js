import React, { useEffect } from "react";
import ClientsComponent from "./clients-component";
import {
  getClients,
  getLoading,
  getError,
  setClients,
} from "./clients-reducer";
import { compose } from "ramda";
import { connect } from "react-redux";
import { fetchClients, createClient } from "./clients-saga";

const mapStateToProps = (state) => ({
  loading: getLoading(state),
  clients: getClients(state),
  error: getError(state),
});
const ClientsContainer = compose(
  connect(mapStateToProps, { setClients, fetchClients, createClient })
)(({ loading, error, clients, setClients, createClient,fetchClients }) => {
  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <ClientsComponent
      clients={clients}
      createClient={createClient}
      setClients={setClients}
      loading={loading}
    />
  );
});

export default ClientsContainer;
