import {
  Box,
  Button,
  Container,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DashboardNav from "../components/DashboardNav";

const Photo = () => {
  const [photoData, setPhotoData] = useState({});
  const [photo, setPhoto] = useState({});
  const [rows, setRows] = useState(photoData);
  const [photoTitle, setPhotoTitle] = useState("");
  const { id } = useParams();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then((data) => data.json())
      .then((data) => {
        setPhotoData(data);
      });
  }, []);

  const handleChangeTitle = (e) => {
    e.preventDefault();

    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: `${photoTitle}` }),
    })
      .then((data) => data.json())
      .then((data) => setPhotoTitle(data))
      .catch((err) => console.error(err));

    setOpen(false);
  };

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
        <Button onClick={handleOpen}>Edit Photo Title</Button>
        {/* modal */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            className="flex flex-col items-center justify-center gap-4"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              backgroundColor: "#fff",
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography
              id="modal-modal-title"
              className=" text-blue-500 text-2xl"
              variant="h6"
              component="h2"
            >
              Change title name
            </Typography>
            <form onSubmit={handleChangeTitle}>
              <TextField
                style={{ width: "100%", marginBottom: "10px" }}
                id="outlined-basic"
                label="Enter new title"
                variant="outlined"
                onChange={(e) => setPhotoTitle(e.target.value)}
              />
              <div className="w-full flex items-center justify-between">
                <Button onClick={handleClose} variant="primary">
                  Cancel
                </Button>
                <Button variant="contained" type="submit">
                  Submit
                </Button>
              </div>
            </form>
          </Box>
        </Modal>
      </Container>
    </>
  );
};

export default Photo;
