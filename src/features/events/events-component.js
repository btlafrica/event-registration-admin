import React from "react";
import ModalBox from "../../components/Modals/ModalBox";
import SpinnerDialogue from "../../components/Spinner/spinner-dialogue";
import EventsTable from "./events-table";

function EventsComponent({ loading, clients,handleCreateEvent,events }) {
  return (
    <div>
      <div class="row grid-margin">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <div class="table-responsive">
                <EventsTable
                  clients={clients}
                  data={events}
                  handleCreateEvent={handleCreateEvent}
                  // createClient={createClient}
                  // setClients={setClients}
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

export default EventsComponent;
