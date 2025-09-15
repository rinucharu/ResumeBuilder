import React from "react";
import Paper from "@mui/material/Paper";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Divider from "@mui/material/Divider";
import { FaHistory } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import Edit from "./Edit";
import html2canvas from "html2canvas";
import { Scale } from "@mui/icons-material";
import jsPDF from "jspdf";

const Preview = ({ resumeData, showButtons, isFromHistoryPage }) => {
  console.log(resumeData);

  const downloadClick = async () => {
    // to create a image
    let input = document.getElementById("result");
    let canvas = await html2canvas(input, { Scale: 2 });

    let imgData = canvas.toDataURL("image/png");

    // to crate a pdf on taht img
    const pdf = new jsPDF();

    const width = pdf.internal.pageSize.getWidth();
    const height = (canvas.height * width) / canvas.width;
    pdf.addImage(imgData, "PNG", 0, 0, width, height);
    pdf.save("resume.pdf");
  };

  return (
    <div>
      <Box className="mt-3 mb-3">
        {showButtons ? (
          <Stack direction={"row"} spacing={1} className="justify-content-end">
            <Button onClick={downloadClick} className="fs-3" variant="text">
              <FaDownload />
            </Button>
            <Link to={"/history"} className="fs-3" variant="text">
              <FaHistory />
            </Link>

            <Edit resumeData={resumeData} />
            <Button variant="text">Back</Button>
          </Stack>
        ) : (
          ""
        )}
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
        {isFromHistoryPage ? (
          <Button onClick={downloadClick} className="fs-3" variant="text">
            <FaDownload />
          </Button>
        ) : (
          ""
        )}
        <Paper id="result" elevation={10} className="w-100 p-4">
          {" "}
          <Typography variant="h4" align="center" component={"h1"}>
            {resumeData?.fullName}
          </Typography>
          <Typography variant="subtitle2" align="center" color="info">
            {resumeData?.Jobtitle}
          </Typography>
          <Typography variant="subtitle2" align="center">
            {resumeData?.location} | {resumeData?.email} |{" "}
            {resumeData?.phoneNumber}
          </Typography>
          <Typography variant="body2" align="center" mb={3}>
            <Link>{resumeData?.github}</Link> |{" "}
            <Link>{resumeData?.linkedin}</Link> |{" "}
            <Link>{resumeData?.portfolio}</Link>
          </Typography>
          <Divider>Summary</Divider>
          <Typography>{resumeData?.summary}</Typography>
          <Divider>Education</Divider>
          <Typography variant="h5" align="center">
            {resumeData?.courseName}
          </Typography>
          <Typography variant="body1" align="center" mb={4}>
            {resumeData?.collegeName} | {resumeData?.university} |{" "}
            {resumeData?.yearOfPassout}
          </Typography>
          <Divider>Professional Experience</Divider>
          <Typography variant="h5" align="center">
            {resumeData?.jobOfWork}
          </Typography>
          <Typography variant="body1" align="center" mb={4}>
            {resumeData?.campanyName} | {resumeData?.locationOfWork} |{" "}
            {resumeData?.durationOfWork}
          </Typography>
          <Divider>Skills</Divider>
          <Stack className="mt-4" direction={"row"} spacing={2}>
            {resumeData?.skills?.map((eachSkill) => (
              <Button variant="outlined">{eachSkill}</Button>
            ))}
          </Stack>
        </Paper>
      </Box>
    </div>
  );
};

export default Preview;
