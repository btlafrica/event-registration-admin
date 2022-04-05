import dateFormat from "dateformat";
export const adminsTableColumns = [
  
  {
    title: "First Name",
    field: "firstname",
  
    
  },
  {
    title: "Last Name",
    field: "lastname",
   
    
  },
  {
    title: "Email",
    field: "email",
   
  },
  {
    title: "Phone",
    field: "phoneNumber",
  
  },
 
  {
    title: "Date Added",
    editable: 'never',
    field: "datecreated",
    render: (rowData) => (
      <p>{dateFormat(rowData.datecreated, "dS mmmm, yyyy h:MMTT")}</p>
    ),
  },
];
