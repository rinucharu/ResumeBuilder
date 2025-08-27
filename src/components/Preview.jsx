import React from "react";
import Paper from "@mui/material/Paper";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Divider from "@mui/material/Divider";
import { FaHistory } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import Edit from "./Edit";


const Preview = () => {
  return (
    <div>
      <Box className="mt-3 mb-3">
        <Stack direction={"row"} spacing={1} className="justify-content-end">
          <Button className="fs-3" variant="text">
            <FaDownload />
          </Button>
          <Button className="fs-3" variant="text">
            <FaHistory />
          </Button>

         <Edit/>
          <Button variant="text">Back</Button>
        </Stack>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "700px",
          display: "flex",
          flexWrap: "wrap",
          p: "5",
          borderRadius: "15px",
        }}
      >
        <Paper elevation={10} className="w-100 p-4">
          {" "}
          <Typography variant="h4" align="center" component={"h1"}>
            Full Name
          </Typography>
          <Typography variant="subtitle2" align="center" color="info">
            Job Title
          </Typography>
          <Typography variant="subtitle2" align="center">
            Location | Eamil | Phone
          </Typography>
          <Typography variant="body2" align="center" mb={3}>
            <Link>Gitub</Link> | <Link>Linkedin</Link> | <Link>Portfolio</Link>
          </Typography>
          <Divider>Summary</Divider>
          <Typography>summary content</Typography>
          <Divider>Education</Divider>
          <Typography variant="h5" align="center">
            Course Name
          </Typography>
          <Typography variant="body1" align="center" mb={4}>
            collegeName | University | Year
          </Typography>
          <Divider>Professional Experience</Divider>
          <Typography variant="h5" align="center">
            Job Name
          </Typography>
          <Typography variant="body1" align="center" mb={4}>
            Comapny Name | Loacation | duration
          </Typography>
          <Divider>Skills</Divider>
          <Stack direction={"row"} spacing={2}>
            <Button variant="outlined">React JS</Button>
            <Button variant="outlined">Angular</Button>
          </Stack>
        </Paper>
      </Box>
    </div>
  );
};

export default Preview;
