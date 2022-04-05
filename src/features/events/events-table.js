import React from "react";
import { forwardRef } from "react";
import MaterialTable from "@material-table/core";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import { eventsTableColumns } from "./events-data";
import { createTheme, MuiThemeProvider } from "@material-ui/core";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),

  //   Check: forwardRef((props, ref) => <CheckBox {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

function EventsTable({ data, handleRowClick, clients, handleCreateEvent }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#274ffe",
      },
      secondary: {
        main: "#26facb",
      },
    },
  });
  return (
    <MuiThemeProvider theme={theme}>
      <MaterialTable
        data={data}
        icons={tableIcons}
        columns={eventsTableColumns(clients)}
        title={<p className="font-bold">{`${data?.length} clients`}</p>}
        options={{
          search: true,
          selection: false,
          exportButton: true,
          pageSize: 20,
          rowStyle: {
            backgroundColor: "#fff",
          },
          headerStyle: {
            backgroundColor: "#F4F4F4",
            color: "#666666",
            border: 0,
            fontWeight: "600",
          },
        }}
        editable={{
          onRowAdd: async(newData) => {
            handleCreateEvent(newData);
          },
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                // setClients([...dataUpdate]);

                resolve();
              }, 1000);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                // setClients([...dataDelete]);

                resolve();
              }, 1000);
            }),
        }}
        // actions={[
        //   {
        //     icon: tableIcons.Add,
        //     tooltip: "Add User",
        //     isFreeAction: true,
        //     onClick: handleShowModal,
        //   },
        // ]}
        onRowClick={handleRowClick}
        localization={{
          toolbar: { nRowsSelected: "{0} Clients selected" },
        }}
      />
    </MuiThemeProvider>
  );
}

export default EventsTable;
