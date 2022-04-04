import React, { useEffect, useState } from "react";
import AdminsComponent from "./admins-component";
import { compose } from "ramda";
import { connect } from "react-redux";
import { createAdmins, fetchAdmins } from "./admins-saga";
import { getAdmins, getError, getLoading, setAdmins } from "./admins-reducer";
const mapStateToProps = (state) => ({
  loading: getLoading(state),
  admins: getAdmins(state),
  error: getError(state),
});

const AdminsContainer = compose(
  connect(mapStateToProps, {
    fetchAdmins,
    setAdmins,
    createAdmins,
  })
)(({ loading, error, fetchAdmins, admins, setAdmins, createAdmins }) => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  useEffect(() => {
    fetchAdmins();
  }, []);

  return (
    <AdminsComponent
      admins={admins}
      showModal={showModal}
      handleShowModal={handleShowModal}
      handleCloseModal={handleCloseModal}
      setAdmins={setAdmins}
      createAdmins={createAdmins}
      loading={loading}
    />
  );
});

export default AdminsContainer;
