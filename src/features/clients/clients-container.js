import React from "react";
import ClientsComponent from "./clients-component";
import {
  getClients,
  getLoading,
  getError,
  setClients,
} from "./clients-reducer";
import { compose } from "ramda";
import { connect } from "react-redux";
const mapStateToProps = (state) => ({
  loading: getLoading(state),
  clients: getClients(state),
  error: getError(state),
});
const ClientsContainer = compose(connect(mapStateToProps, { setClients }))(
  ({ loading, error, clients,setClients }) => {
    return <ClientsComponent clients={clients} setClients={setClients} />;
  }
);

export default ClientsContainer;
