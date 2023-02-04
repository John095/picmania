import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 250 },
  { field: "username", headerName: "Username", width: 160 },
  { field: "email", headerName: "Email Address", width: 250 },
  { field: "phone", headerName: "Phone Number", width: 200 },
  {
    field: "actions",
    headerName: "Actions",
    type: "actions",
    renderCell: (params) => {
      return (
        <Link to={`/dashboard/user/${params.row.id}`}>
          <Button variant="contained">View User</Button>
        </Link>
      );
    },
    width: 160,
  },
];

const UsersTable = () => {
  const [tableData, setTableData] = useState([]);
  const [rows, setRows] = useState(tableData);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((data) => setTableData(data));
  }, []);

  console.log(tableData);

  return (
    <Box
      sx={{ height: 500, width: "100%", paddingLeft: "5%", paddingRight: "5%" }}
    >
      <Typography
        variant="h4"
        component="h4"
        sx={{ textAlign: "center", mt: 2, mb: 2 }}
      >
        View Users
      </Typography>
      <DataGrid
        rows={tableData}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5, 10]}
        onSelectionModelChange={({ selectionModel }) => {
          const rowIds = selectionModel.map((rowId) =>
            parseInt(String(rowId), 10)
          );
        }}
      />
    </Box>
  );
};

export default UsersTable;
