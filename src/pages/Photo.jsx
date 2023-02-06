import { Box, Button, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DashboardNav from "../components/DashboardNav";

const Photo = () => {
  const [photoData, setPhotoData] = useState([]);
  const [rows, setRows] = useState(photoData);
  const [photo, setPhoto] = useState({});
  const [photoName, setPhotoName] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then((data) => data.json())
      .then((data) => {
        setPhotoData(data);
        // setPhoto(data);
      });
  }, []);

  return (
    <>
      <DashboardNav />
      <Container
        sx={{
          padding: "5px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Link
          to={`/dashboard/user/${id}/album/${id}`}
          className="text-blue-600 text-sm text-center mt-2 mb-2 no-underline"
        >
          <Typography>Back to Album Page</Typography>
        </Link>
        <Box
          sx={{
            padding: "5px",
            width: "80%",
            maxWidth: "400px",
            border: "1px dashed grey",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "15px",
            marginBottom: "10px",
          }}
        >
          <img src={photoData.url} alt="" />
          <Typography>{photoData.title}</Typography>
        </Box>
        <Button>Edit Photo Title</Button>
      </Container>
    </>
  );
};

export default Photo;
