import React from "react";
import Button from "../../../components/buttons/button";
import InputWithIcon from "../../../components/InputFields/InputWithIcon";

function AddEventComponent() {
  return (
    <div className="flex flex-col">
      <div className="w-8/12 shadow-md px-3 py-4">
        <p className="text-dark text-xl font-bold">Add Event</p>
        <p>Add event to be displayed on homepage</p>
        <form>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <InputWithIcon
                // onChange={onChange}
                // placeholder="Enter airtime amount"
                className="py-3"
                name="airtimeAmount"
                required
                type="text"
                label="Event name"
              />
            </div>
            <div>
              <InputWithIcon
                className="py-3"
                name="airtimeAmount"
                required
                type="text"
                label="Description"
              />
            </div>
            <div>
              <InputWithIcon
                className="py-3"
                name="airtimeAmount"
                required
                type="date"
                label="Event Date"
              />
            </div>

            <div>
              <InputWithIcon
                className="py-3"
                name="airtimeAmount"
                required
                type="text"
                label="Event price"
              />
            </div>

            <div>
              <InputWithIcon
                className="py-3"
                name="airtimeAmount"
                required
                type="text"
                label="Event organizer"
              />
            </div>

            <div>
              <InputWithIcon
                className="py-3"
                name="airtimeAmount"
                required
                type="text"
                label="Event type"
              />
            </div>
            <div>
              <InputWithIcon
                className="py-3"
                name="airtimeAmount"
                required
                type="text"
                label="Event location"
              />
            </div>
          </div>
          <Button color="primary" className="mt-4 md:w-5/12 w-full">
            <p className="text-white">Add event</p>
          </Button>
        </form>
      </div>
    </div>
  );
}

export default AddEventComponent;
