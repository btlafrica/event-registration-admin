import React from "react";
import ModalBox from "../../components/Modals/ModalBox";
import SpinnerDialogue from "../../components/Spinner/spinner-dialogue";
import ClientsTable from "./clients-table";

function ClientsComponent({ clients, setClients, createClient,loading }) {
  return (
    <div>
      <div class="row grid-margin">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <div class="table-responsive">
                <ClientsTable
                  data={clients}
                  createClient={createClient}
                  setClients={setClients}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalBox content={<SpinnerDialogue />} open={loading} />
    </div>
  );
}

export default ClientsComponent;
