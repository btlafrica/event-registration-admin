import dateFormat from "dateformat";
export const adminsTableColumns = [
  {
    title: "ID",
    field: "id",
    filtering: false,
    editable: 'never'
  },
  {
    title: "First Name",
    field: "firstname",
    filtering: false,
    
  },
  {
    title: "Last Name",
    field: "lastname",
    filtering: false,
    
  },
  {
    title: "Email",
    field: "email",
    filtering: false,
  },
  // {
  //   title: "Username",
  //   field: "username",
  //   filtering: false,
  // },
  {
    title: "Phone",
    field: "phoneNumber",
    filtering: false,
  },
 
  {
    title: "Date Added",
    editable: 'never',
    field: "datecreated",
    filtering: false,
    render: (rowData) => (
      <p>{dateFormat(rowData.datecreated, "dS mmmm, yyyy h:MMTT")}</p>
    ),
  },
];
