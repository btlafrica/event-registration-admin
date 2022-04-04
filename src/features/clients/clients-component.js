import React from "react";
import ClientsTable from "./clients-table";

function ClientsComponent({ clients, setClients }) {
  return (
    <div>
      <div class="row grid-margin">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <div class="table-responsive">
                <ClientsTable data={clients} setClients={setClients} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientsComponent;
