import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import DashboardNav from "../components/DashboardNav";
import { useParams, Link } from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "title", headerName: "Title", width: 400 },
  {
    field: "actions",
    headerName: "Actions",
    type: "actions",
    renderCell: (params) => {
      return (
        <Link
          to={`/dashboard/user/${params.row.userId}/album/${params.row.id}`}
        >
          <Button variant="contained">View Album</Button>
        </Link>
      );
    },
    width: 160,
  },
];

const UserPage = () => {
  const [tableData, setTableData] = useState([]);
  const [rows, setRows] = useState(tableData);
  const [user, setUser] = useState({});
  const [albums, setAlbums] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/`)
      .then((data) => data.json())
      .then((data) => {
        setUser(data);
      });
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
      .then((data) => data.json())
      .then((data) => {
        setTableData(data);
        setAlbums(data);
      });
  }, []);

  return (
    <>
      <DashboardNav />
      <Container sx={{ padding: "5px", alignItems: "center" }}>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", paddingBottom: "10px" }}
        >
          {user.name}
        </Typography>
        <Box
          sx={{
            padding: "5px",
            width: "100%",
            border: "1px dashed grey",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "15px",
            marginBottom: "10px",
          }}
        >
          <Typography variant="p" sx={{ fontWeight: "600" }}>
            Email: &nbsp;
            <span className="font-normal">{user.email}</span>
          </Typography>
          <Typography variant="p" sx={{ fontWeight: "600" }}>
            Username: &nbsp;
            <span className="font-normal">{user.username}</span>
          </Typography>
          <Typography variant="p" sx={{ fontWeight: "600" }}>
            Phone Number: &nbsp;
            <span className="font-normal">{user.phone}</span>
          </Typography>
          <Typography variant="p" sx={{ fontWeight: "600" }}>
            No. of Albums:&nbsp;
            <span className="font-normal">{albums.length}</span>
          </Typography>
        </Box>
        <Link
          to="/dashboard"
          className="text-blue-600 text-sm text-center mt-2 no-underline"
        >
          <Typography>Back to Dashboard</Typography>
        </Link>
        <Box
          sx={{
            height: 370,
            width: "100%",
          }}
        >
          <Typography
            variant="h6"
            component="h6"
            sx={{ textAlign: "center", mt: 2, mb: 2, fontWeight: "600" }}
          >
            Albums
          </Typography>
          <DataGrid
            rows={tableData}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5, 10]}
            onSelectionModelChange={({ selectionModel }) => {
              const rowIds = selectionModel.map((rowId) =>
                parseInt(String(rowId), 10)
              );
            }}
          />
        </Box>
      </Container>
    </>
  );
};

export default UserPage;
