import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import DashboardNav from "../components/DashboardNav";
import { useParams, Link } from "react-router-dom";

const Album = () => {
  const [tableData, setTableData] = useState([]);
  const [rows, setRows] = useState(tableData);
  const [photos, setPhotos] = useState([]);
  const [photo, setPhoto] = useState({});
  const [album, setAlbum] = useState({});
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}/`)
      .then((data) => data.json())
      .then((data) => {
        setAlbum(data);
      });
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
      .then((data) => data.json())
      .then((data) => {
        setPhotos(data);
        setAlbum(data);
        setPhoto(data);
      });
  }, []);

  return (
    <>
      <DashboardNav />
      <Container sx={{ padding: "5px", alignItems: "center" }}>
        <Box
          sx={{
            padding: "5px",
            width: "100%",
            border: "1px dashed grey",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "15px",
            marginBottom: "10px",
          }}
        >
          <h4 className="font-bold">Title:</h4>
          <h4 className="text-blue-700"> {album.title}</h4>
        </Box>
        <Link
          to={`/dashboard/user/${id}`}
          className="text-blue-600 text-sm text-center mt-2 no-underline"
        >
          <Typography>Back to User Page</Typography>
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
          <Container
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "10px",
              width: "100%",
            }}
          >
            {photos.map((photo) => {
              return (
                <Box sx={{ width: "200px" }} key={photo.id}>
                  <Link
                    to={`/dashboard/user/${user.id}/album/${album.id}/photo/${photo.id}`}
                    style={{ cursor: "pointer" }}
                  >
                    <img src={photo.url} alt="" />
                    <Typography variant="p">{photo.title}</Typography>
                  </Link>
                </Box>
              );
            })}
          </Container>
        </Box>
      </Container>
    </>
  );
};

export default Album;
