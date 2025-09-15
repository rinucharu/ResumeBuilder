import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { FaRegEdit } from "react-icons/fa";
import { Stack } from "@mui/material";
import { editResume } from "../services/allApi";



const Edit = ({ resumeData }) => {
  const [formData,setFormData]=React.useState(resumeData)
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

   const addSkill = (skill) => {
    if (formData.skills.includes(skill)) {
      alert("skill is already exist");
    } else {
      setFormData({ ...formData, skills: [...formData.skills, skill] });
    }
  };


  const editClick=async(id)=>{
    try {
      let apiResponse=await editResume(id,formData)
      if (apiResponse) {
        alert('successfully edited')
        window.location.reload()
      }
    } catch (error) {
      console.log(error)
    }
  }

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
            value={formData?.fullName}
            id="standard-basic"
            className="w-100"
            label="Full Name"
            variant="standard"
            onChange={(e)=>setFormData({...formData,fullName:e.target.value})}
          />

          <TextField
            value={formData?.Jobtitle}
            id="standard-basic"
            className="w-100"
            label="Job Title"
            variant="standard"
            onChange={(e)=>setFormData({...formData,Jobtitle:e.target.value})}
          />

          <TextField
            value={formData?.location}
            id="standard-basic"
            className="w-100"
            label="Location"
            variant="standard"
            onChange={(e)=>setFormData({...formData,location:e.target.value})}
          />

          <Typography variant="h4" className="fw-blod" sx={{ mt: 2 }}>
            Contact Details
          </Typography>

          <TextField
            value={formData?.email}
            id="standard-basic"
            className="w-100"
            label="Email"
            variant="standard"
            onChange={(e)=>setFormData({...formData,email:e.target.value})}
          />

          <TextField
            value={formData?.phoneNumber}
            id="standard-basic"
            className="w-100"
            label="Phone Number"
            variant="standard"
            onChange={(e)=>setFormData({...formData,phoneNumber:e.target.value})}
          />

          <TextField
            value={formData?.github}
            id="standard-basic"
            className="w-100"
            label="Github Profile Link"
            variant="standard"
            onChange={(e)=>setFormData({...formData,github:e.target.value})}
          />

          <TextField
            value={formData?.linkedin}
            id="standard-basic"
            className="w-100"
            label="LinkedIn Profile Link"
            variant="standard"
            onChange={(e)=>setFormData({...formData,linkedin:e.target.value})}
          />

          <TextField
            value={formData?.portfolio}
            id="standard-basic"
            className="w-100"
            label="Portfolio Link"
            variant="standard"
            onChange={(e)=>setFormData({...formData,portfolio:e.target.value})}
          />

          <Typography variant="h4" className="fw-blod" sx={{ mt: 2 }}>
            Education Details
          </Typography>

          <TextField
            value={formData?.courseName}
            id="standard-basic"
            className="w-100"
            label="Course Name"
            variant="standard"
            onChange={(e)=>setFormData({...formData,courseName:e.target.value})}
          />

          <TextField
            value={formData?.collegeName}
            id="standard-basic"
            className="w-100"
            label="College Name"
            variant="standard"
            onChange={(e)=>setFormData({...formData,collegeName:e.target.value})}
          />

          <TextField
            value={formData?.university}
            id="standard-basic"
            className="w-100"
            label="University"
            variant="standard"
            onChange={(e)=>setFormData({...formData,university:e.target.value})}
          />

          <TextField
            value={formData?.yearOfPassout}
            id="standard-basic"
            className="w-100"
            label="Year of Passout"
            variant="standard"
            onChange={(e)=>setFormData({...formData,yearOfPassout:e.target.value})}
          />

          <Typography variant="h4" className="fw-blod" sx={{ mt: 2 }}>
            Professional Details
          </Typography>

          <TextField
            value={formData?.jobOfWork}
            id="standard-basic"
            className="w-100"
            label="Job or Internship"
            variant="standard"
            onChange={(e)=>setFormData({...formData,jobOfWork:e.target.value})}
          />

          <TextField
            value={formData?.campanyName}
            id="standard-basic"
            className="w-100"
            label="Company Name"
            variant="standard"
            onChange={(e)=>setFormData({...formData,campanyName:e.target.value})}
          />

          <TextField
            value={formData?.durationOfWork}
            id="standard-basic"
            className="w-100"
            label="Location"
            variant="standard"
            onChange={(e)=>setFormData({...formData,durationOfWork:e.target.value})}
          />

          <TextField
            value={formData?.locationOfWork}
            id="standard-basic"
            className="w-100"
            label="Duration"
            variant="standard"
            onChange={(e)=>setFormData({...formData,locationOfWork:e.target.value})}
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
            <Stack direction="row" spacing={2}>
              <Button onClick={() => addSkill("React")} variant="outlined">
                React
              </Button>
              <Button onClick={() => addSkill("Node")} variant="outlined">
                Node
              </Button>
              <Button onClick={() => addSkill("Angular")} variant="outlined">
                Angular
              </Button>
              <Button onClick={() => addSkill("Express")} variant="outlined">
                Express
              </Button>
              <Button onClick={() => addSkill("Mongo DB")} variant="outlined">
                Mongo DB
              </Button>
              <Button onClick={() => addSkill("Bootstrap")} variant="outlined">
                Bootstrap
              </Button>
            </Stack>

          <Typography variant="h6" className="fw-blod" sx={{ mt: 2 }}>
            Selected Skills:{formData?.skills?.map((eachSkill) => (
              <Button variant="outlined" className="ms-3">{eachSkill}</Button>
            ))}
          </Typography>

          <Typography variant="h4" className="fw-blod" sx={{ mt: 2 }}>
            Professional Summary
          </Typography>

          <TextField
            value={formData?.summary}
            id="standard-multiline-static"
            label="Write a short summary of yourself"
            multiline
            rows={4}
            className="w-100"
            variant="standard"
            onChange={(e)=>setFormData({...formData,summary:e.target.value})}
          />

          <Button onClick={()=>editClick(formData.id)} variant="text" alig className="mt-3">
            UPDATE
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default Edit;
