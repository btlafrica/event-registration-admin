import { Divider } from "@mui/material";
import React from "react";
import StatsCard from "../../components/cards/stats-card";
import InputWithIcon from "../../components/InputFields/InputWithIcon";
import EventsTable from "../events/events-table";

function DashboardComponent({ clients, events, handleCreateEvent }) {
  const stats = [
    {
      total: events.length,
      title: "Events",
    },
    {
      total: "21,457",
      title: "Active Events",
    },
    {
      total: "21,457",
      title: "Pending Events",
    },
    {
      total: "247",
      title: "Closed Events",
    },
  ];
  return (
    <div className="flex flex-col  w-full">
      <div className="grid gap-4 grid-cols-12">
        {stats.map((item) => (
          <StatsCard data={item} />
        ))}
      </div>
      <div className=" shadow-md  mt-6">
        <p className="text-xs text-dark font-bold m-3">Search & filter</p>
        <div className="grid grid-cols-3 gap-5 mt-3 p-3">
          <div className="">
            <InputWithIcon
              // onChange={onChange}
              // placeholder="Enter airtime amount"
              className=""
              name="airtimeAmount"
              required
              type="text"
              label="Event name"
            />
          </div>
          <div className="">
            <InputWithIcon
              // onChange={onChange}
              // placeholder="Enter airtime amount"
              className=""
              name="airtimeAmount"
              required
              type="date"
              label="Date"
            />
          </div>
          <div className="">
            <InputWithIcon
              // onChange={onChange}
              // placeholder="Enter airtime amount"
              className=""
              name="airtimeAmount"
              required
              type="number"
              label="Event location"
            />
          </div>
        </div>
        <Divider />
        <div className="p-3">
          <EventsTable
            clients={clients}
            data={events}
            handleCreateEvent={handleCreateEvent}
          />
        </div>
      </div>
    </div>
  );
}

export default DashboardComponent;
