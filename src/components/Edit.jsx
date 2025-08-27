import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { FaRegEdit } from "react-icons/fa";
import { CgOverflow } from "react-icons/cg";

const Edit = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 750,
    bgcolor: "background.paper",
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    maxHeight: "80vh",
    overflowY: "auto",
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen} variant="text" className="fs-2">
        <FaRegEdit />
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Details
          </Typography>
          <Typography variant="h4" className="fw-blod" sx={{ mt: 2 }}>
            Personal Details
          </Typography>
          <TextField
            id="standard-basic"
            className="w-100"
            label="Full Name"
            variant="standard"
          />

          <TextField
            id="standard-basic"
            className="w-100"
            label="Job Title"
            variant="standard"
          />

          <TextField
            id="standard-basic"
            className="w-100"
            label="Location"
            variant="standard"
          />

          <Typography variant="h4" className="fw-blod" sx={{ mt: 2 }}>
            Contact Details
          </Typography>

          <TextField
            id="standard-basic"
            className="w-100"
            label="Email"
            variant="standard"
          />

          <TextField
            id="standard-basic"
            className="w-100"
            label="Phone Number"
            variant="standard"
          />

          <TextField
            id="standard-basic"
            className="w-100"
            label="Github Profile Link"
            variant="standard"
          />

          <TextField
            id="standard-basic"
            className="w-100"
            label="LinkedIn Profile Link"
            variant="standard"
          />

          <TextField
            id="standard-basic"
            className="w-100"
            label="Portfolio Link"
            variant="standard"
          />

          <Typography variant="h4" className="fw-blod" sx={{ mt: 2 }}>
            Education Details
          </Typography>

          <TextField
            id="standard-basic"
            className="w-100"
            label="Course Name"
            variant="standard"
          />

          <TextField
            id="standard-basic"
            className="w-100"
            label="College Name"
            variant="standard"
          />

          <TextField
            id="standard-basic"
            className="w-100"
            label="University"
            variant="standard"
          />

          <TextField
            id="standard-basic"
            className="w-100"
            label="Year of Passout"
            variant="standard"
          />

          <Typography variant="h4" className="fw-blod" sx={{ mt: 2 }}>
            Professional Details
          </Typography>

          <TextField
            id="standard-basic"
            className="w-100"
            label="Job or Internship"
            variant="standard"
          />

          <TextField
            id="standard-basic"
            className="w-100"
            label="Company Name"
            variant="standard"
          />

          <TextField
            id="standard-basic"
            className="w-100"
            label="Location"
            variant="standard"
          />

          <TextField
            id="standard-basic"
            className="w-100"
            label="Duration"
            variant="standard"
          />

          <Typography variant="h4" className="fw-blod" sx={{ mt: 2 }}>
            Skills
          </Typography>

          <TextField
            id="standard-basic"
            className="w-100"
            label="Add Skill"
            variant="standard"
          />

          <Button variant="text" alig className="me-auto ms-auto mt-2 w-100">
            ADD
          </Button>

          <Typography variant="h6" className="fw-blod" sx={{ mt: 2 }}>
            Selected Skills:
          </Typography>

          <Typography variant="h4" className="fw-blod" sx={{ mt: 2 }}>
            Professional Summary
          </Typography>

          <TextField
            id="standard-multiline-static"
            label="Write a short summary of yourself"
            multiline
            rows={4}
            className="w-100"
            variant="standard"
          />

          <Button variant="text" alig className="mt-3">
            UPDATE
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default Edit;
