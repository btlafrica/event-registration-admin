import dateFormat from "dateformat";
export const eventsTableColumns = (clients) => {
  return [
    {
      title: "Event Name",
      field: "eventName",
    },
    {
      title: "Description",
      field: "description",
    },
    {
      title: "Capacity",
      field: "capacity",
    },

    {
      title: "Event Type",
      field: "eventType",
      lookup: {
        "2": "Open Event",
        "1": "Strictly by invitation",
      },
    },

    {
      title: "Client",
      field: "clientId",
      lookup: clients
        .map((item) => ({ key: item.AdminId, value: item.organisationname }))
        .reduce(
          (obj, item) => Object.assign(obj, { [item.key]: item.value }),
          {}
        ),
    },

    {
      title: "Event Date",
      field: "eventDate",
      editComponent: (props) => (
        <input
          type="date"
          className="form-control"
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
        />
      ),
    },
    {
      title: "Event Time",
      field: "eventTime",
      editComponent: (props) => (
        <input
          type="time"
          className="form-control"
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
        />
      ),
    },
  ];
};
