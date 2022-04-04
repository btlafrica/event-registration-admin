import React from "react";
import ModalBox from "../../components/Modals/ModalBox";
import SpinnerDialogue from "../../components/Spinner/spinner-dialogue";
import AdminsTable from "./admins-table";
import CreateAdminModal from "./create-admin-modal";

function AdminsComponent({
  admins,
  showModal,
  handleShowModal,
  handleCloseModal,
  setAdmins,
  createAdmins,
  loading
  
}) {
  return (
    <div>
      <div class="row grid-margin">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <h6 class="card-title">Order status</h6>
              <div class="d-flex table-responsive">
                <div class="btn-group mr-2">
                  <button class="btn btn-sm btn-info">
                    <i class="mdi mdi-plus-circle-outline"></i> Add
                  </button>
                </div>
                <div class="btn-group mr-2">
                  <button type="button" class="btn btn-light">
                    <i class="mdi mdi-alert-circle-outline"></i>
                  </button>
                  <button type="button" class="btn btn-light">
                    <i class="mdi mdi-delete-empty"></i>
                  </button>
                </div>
                <div class="btn-group mr-2">
                  <button type="button" class="btn btn-light">
                    <i class="mdi mdi-printer"></i>
                  </button>
                </div>
                <div class="btn-group ml-auto mr-2 border-0">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search Here"
                  />
                </div>
                <div class="btn-group">
                  <button type="button" class="btn btn-light">
                    <i class="mdi mdi-cloud"></i>
                  </button>
                  <button type="button" class="btn btn-light">
                    <i class="mdi mdi-dots-vertical"></i>
                  </button>
                </div>
              </div>
              <div class="table-responsive">
                <AdminsTable
                  handleShowModal={handleShowModal}
                  data={admins}
                  setAdmins={setAdmins}
                  createAdmins={createAdmins}
                />
              </div>
              {/* <div class="d-flex align-items-center justify-content-between flex-column flex-sm-row mt-4">
                <p class="mb-3 mb-sm-0">Showing 1 to 20 of 20 entries</p>
                <nav>
                  <ul class="pagination pagination-info mb-0">
                    <li class="page-item">
                      <a href="!#" class="page-link">
                        <i class="mdi mdi-chevron-left"></i>
                      </a>
                    </li>
                    <li class="page-item active">
                      <a href="!#" class="page-link">
                        1
                      </a>
                    </li>
                    <li class="page-item">
                      <a href="!#" class="page-link">
                        2
                      </a>
                    </li>
                    <li class="page-item">
                      <a href="!#" class="page-link">
                        3
                      </a>
                    </li>
                    <li class="page-item">
                      <a href="!#" class="page-link">
                        4
                      </a>
                    </li>
                    <li class="page-item">
                      <a href="!#" class="page-link">
                        <i class="mdi mdi-chevron-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <ModalBox
        open={showModal}
        content={
          <CreateAdminModal
            // onChange={onChange}
            onClose={handleCloseModal}
            // values={values}
            // onSubmit={onSubmitCreateNotification}
            // loading={loading}
          />
        }
      />
      
      <ModalBox content={<SpinnerDialogue />} open={loading} />
    </div>
  );
}

export default AdminsComponent;
