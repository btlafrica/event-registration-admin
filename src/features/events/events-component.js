import React from "react";
import ModalBox from "../../components/Modals/ModalBox";
import SpinnerDialogue from "../../components/Spinner/spinner-dialogue";
import EventsTable from "./events-table";
import { womanHD } from "../../assets";
import { Divider } from "@mui/material";

function EventsComponent({
  loading,
  clients,
  handleCreateEvent,
  events,
  tabs,
  handleSelectedTab,
  selectedTab,
}) {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-4 shadow-md rounded-5 py-8 px-3 max-h-screen overflow-y-auto">
        <div className="flex flex-col  items-center">
          <img src={womanHD} className="rounded-8" width={160} />
          <p className="text-sm text-dark my-2">Gertrude Barton</p>
          <div className="bg-dark rounded-5 px-3">
            <p className="text-white text-sm">Administrator</p>
          </div>
        </div>
        <div className="mt-5">
          <p className="text-dark font-bold">Details</p>
          <Divider />
          <div className="mt-2 space-y-4">
            <div className="flex items-center space-x-3">
              <p className="text-dark font-bold">Username:</p>
              <p className="text-dark ">Deedat5</p>
            </div>
            <div className="flex items-center space-x-3">
              <p className="text-dark font-bold">Email:</p>
              <p className="text-dark ">deedat5@gmail.com</p>
            </div>
            <div className="flex items-center space-x-3">
              <p className="text-dark font-bold">Status:</p>
              <div className=" bg-greenLight  px-3 py-1 rounded-16">
                <p className="text-green text-xxs ">Deedat5</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <p className="text-dark font-bold">Role</p>
              <p className="text-dark ">Administrator</p>
            </div>
            <div className="flex items-center space-x-3">
              <p className="text-dark font-bold">Contact:</p>
              <p className="text-dark ">+233 (054) 933-44-22</p>
            </div>
            <div className="flex items-center space-x-3">
              <p className="text-dark font-bold">Language:</p>
              <p className="text-dark ">English</p>
            </div>

            <div className="flex items-center space-x-3">
              <p className="text-dark font-bold">Country:</p>
              <p className="text-dark ">Ghana</p>
            </div>
            <button className="w-full bg-primary-900 py-3 rounded-5">
              <p className="text-white text-center">Edit Details</p>
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-8">
        <div className="flex items-center my-2">
          {tabs.map((item) => (
            <button
              onClick={() => handleSelectedTab(item)}
              className={`flex items-center px-3 space-x-3 py-2 rounded-8 ${
                selectedTab.title === item.title ? "bg-primary-900" : "bg-white"
              }`}
            >
              {selectedTab.title === item.title
                ? item.iconLight
                : item.iconDark}

              <p
                className={`text-sm  ${
                  selectedTab.title === item.title ? "text-white" : ""
                } `}
              >
                {item.title}
              </p>
            </button>
          ))}
        </div>
        <div className="my-2">
          <p className="my-3 text-xl text-dark font-bold">Event list</p>
          <EventsTable
            clients={clients}
            data={events}
            showToolbar={false}
            handleCreateEvent={handleCreateEvent}
            // createClient={createClient}
            // setClients={setClients}
          />
        </div>

        <div className="my-2">
          <p className="my-3 text-xl text-dark font-bold">Payment list</p>
          <EventsTable
            clients={clients}
            data={events}
            showToolbar={false}
            handleCreateEvent={handleCreateEvent}
            // createClient={createClient}
            // setClients={setClients}
          />
        </div>
      </div>

      <ModalBox content={<SpinnerDialogue />} open={loading} />
    </div>
  );
}

export default EventsComponent;
