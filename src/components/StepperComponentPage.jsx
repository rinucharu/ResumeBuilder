import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/material";
import { createResume } from "../services/allApi";
import Swal from "sweetalert2";

const StepperComponentPage = ({
  resumeData,
  setResumeData,
  setShowButtons,
}) => {
  const steps = [
    "Basic Information",
    "Contact Details",
    "Education details",
    "Work Experience",
    "Skills & Certifications",
    "Review & Submit",
  ];

  const [loading, setloading] = React.useState(false);

  const [inputSkill, setInputSkill] = React.useState("");

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const addSkill = (skill) => {
    if (resumeData.skills.includes(skill)) {
      alert("skill is already exist");
    } else {
      setResumeData({ ...resumeData, skills: [...resumeData.skills, skill] });
    }
  };

  const displayFormDetails = (step) => {
    switch (step) {
      case 0:
        return (
          <>
            <h3>Personal Information</h3>
            <TextField
              onChange={(e) =>
                setResumeData({ ...resumeData, fullName: e.target.value })
              }
              name="fullName"
              className="w-100"
              label="Full Name"
              variant="standard"
              value={resumeData.fullName}
            />

            <TextField
              onChange={(e) =>
                setResumeData({ ...resumeData, Jobtitle: e.target.value })
              }
              name="jobTitle"
              className="w-100"
              label="Job Title"
              variant="standard"
              value={resumeData.Jobtitle}
            />

            <TextField
              onChange={(e) =>
                setResumeData({ ...resumeData, location: e.target.value })
              }
              name="location"
              className="w-100"
              label="Location"
              variant="standard"
              value={resumeData.location}
            />
          </>
        );

      case 1:
        return (
          <>
            <h3>Contact Details</h3>
            <TextField
              onChange={(e) =>
                setResumeData({ ...resumeData, email: e.target.value })
              }
              name="email"
              className="w-100"
              label="Email"
              variant="standard"
              value={resumeData.email}
            />

            <TextField
              onChange={(e) =>
                setResumeData({ ...resumeData, phoneNumber: e.target.value })
              }
              name="phoneNumber"
              className="w-100"
              label="Phone Number"
              variant="standard"
              value={resumeData.phoneNumber}
            />

            <TextField
              onChange={(e) =>
                setResumeData({ ...resumeData, github: e.target.value })
              }
              name="github"
              className="w-100"
              label="Github Profile Link"
              variant="standard"
              value={resumeData.github}
            />

            <TextField
              onChange={(e) =>
                setResumeData({ ...resumeData, linkedin: e.target.value })
              }
              name="linkedin"
              className="w-100"
              label="LinkedIn Profile Link"
              variant="standard"
              value={resumeData.linkedin}
            />

            <TextField
              onChange={(e) =>
                setResumeData({ ...resumeData, portfolio: e.target.value })
              }
              name="portfolio"
              className="w-100"
              label="Portfolio Link"
              variant="standard"
              value={resumeData.portfolio}
            />
          </>
        );

      case 2:
        return (
          <>
            <h3>Education Details</h3>
            <TextField
              onChange={(e) =>
                setResumeData({ ...resumeData, courseName: e.target.value })
              }
              name="courseName"
              className="w-100"
              label="Course Name"
              variant="standard"
              value={resumeData.courseName}
            />

            <TextField
              onChange={(e) =>
                setResumeData({ ...resumeData, collegeName: e.target.value })
              }
              name="collegeName"
              className="w-100"
              label="College Name"
              variant="standard"
              value={resumeData.collegeName}
            />

            <TextField
              onChange={(e) =>
                setResumeData({ ...resumeData, university: e.target.value })
              }
              name="university"
              className="w-100"
              label="University"
              variant="standard"
              value={resumeData.university}
            />

            <TextField
              onChange={(e) =>
                setResumeData({ ...resumeData, yearOfPassout: e.target.value })
              }
              name="yearOfPassout"
              className="w-100"
              label="Year of Passout"
              variant="standard"
              value={resumeData.yearOfPassout}
            />
          </>
        );

      case 3:
        return (
          <>
            <h3>Professional Details</h3>

            <TextField
              onChange={(e) =>
                setResumeData({ ...resumeData, jobOfWork: e.target.value })
              }
              name="jobOfWork"
              className="w-100"
              label="Job or Internship"
              variant="standard"
              value={resumeData.jobOfWork}
            />

            <TextField
              onChange={(e) =>
                setResumeData({ ...resumeData, campanyName: e.target.value })
              }
              name="companyName"
              className="w-100"
              label="Company Name"
              variant="standard"
              value={resumeData.campanyName}
            />

            <TextField
              onChange={(e) =>
                setResumeData({ ...resumeData, locationOfWork: e.target.value })
              }
              name="locationOfWork"
              className="w-100"
              label="Location"
              variant="standard"
              value={resumeData.locationOfWork}
            />

            <TextField
              onChange={(e) =>
                setResumeData({ ...resumeData, durationOfWork: e.target.value })
              }
              name="durationOfWork"
              className="w-100"
              label="Duration"
              variant="standard"
              value={resumeData.durationOfWork}
            />
          </>
        );

      case 4:
        return (
          <>
            {" "}
            <h3>Skills</h3>{" "}
            <TextField
              onChange={(e) => setInputSkill(e.target.value)}
              className="w-100"
              label="Add Skill"
              variant="standard"
              value={resumeData.skill || ""}
            />{" "}
            <Button
              variant="text"
              className="mt-3"
              onClick={() => addSkill(inputSkill)}
            >
              {" "}
              ADD{" "}
            </Button>{" "}
            <h5>Suggestions :</h5>{" "}
            <Stack direction="row" spacing={2}>
              {" "}
              <Button onClick={() => addSkill("React")} variant="outlined">
                {" "}
                React{" "}
              </Button>{" "}
              <Button onClick={() => addSkill("Node")} variant="outlined">
                {" "}
                Node{" "}
              </Button>{" "}
              <Button onClick={() => addSkill("Angular")} variant="outlined">
                {" "}
                Angular{" "}
              </Button>{" "}
              <Button onClick={() => addSkill("Express")} variant="outlined">
                {" "}
                Express{" "}
              </Button>{" "}
              <Button onClick={() => addSkill("Mongo DB")} variant="outlined">
                {" "}
                Mongo DB{" "}
              </Button>{" "}
              <Button onClick={() => addSkill("Bootstrap")} variant="outlined">
                {" "}
                Bootstrap{" "}
              </Button>{" "}
            </Stack>{" "}
            <h5 className="mt-3">Added Skills :</h5>{" "}
          </>
        );

      case 5:
        return (
          <>
            <h3>Professional Summary</h3>
            <TextField
              onChange={(e) =>
                setResumeData({ ...resumeData, summary: e.target.value })
              }
              name="summary"
              id="standard-multiline-static"
              label="Write a short summary of yourself"
              multiline
              defaultValue="I'm a passinate full-stack developer with hands-on experience in React,Node..."
              rows={4}
              className="w-100"
              variant="standard"
            />
          </>
        );

      default:
        break;
    }
  };

  const handleFinish = async () => {
    setloading(true);

    if (
      resumeData.fullName == "" ||
      resumeData.Jobtitle == "" ||
      resumeData.location == "" ||
      resumeData.email == "" ||
      resumeData.phoneNumber == "" ||
      resumeData.github == "" ||
      resumeData.linkedin == "" ||
      resumeData.portfolio == "" ||
      resumeData.courseName == "" ||
      resumeData.collegeName == "" ||
      resumeData.university == "" ||
      resumeData.yearOfPassout == "" ||
      resumeData.jobOfWork == "" ||
      resumeData.campanyName == "" ||
      resumeData.locationOfWork == "" ||
      resumeData.durationOfWor == "" ||
      resumeData.skills == [] ||
      resumeData.summary == ""
    ) {
      alert("please fill the form");
    } else {
      try {
        let apiResult = await createResume(resumeData);
        if (apiResult) {
          setShowButtons(true);
          Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
          });
        }
      } catch (error) {
        alert("error Occured");
      }
    }

    setloading(false);
  };

  return (
    <>
      {loading ? (
        <h1>loading....</h1>
      ) : (
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              // if (isStepOptional(index)) {
              //   labelProps.optional = (
              //     <Typography variant="caption">Optional</Typography>
              //   );
              // }
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                Step {activeStep + 1}
              </Typography>

              <Box>{displayFormDetails(activeStep)}</Box>

              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />
                {/* {isStepOptional(activeStep) && (
              // <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
              //   Skip
              // </Button>
            )} */}

                {activeStep === steps.length - 1 ? (
                  <Button onClick={handleFinish}>Finish</Button>
                ) : (
                  <Button onClick={handleNext}>Next</Button>
                )}
              </Box>
            </React.Fragment>
          )}
        </Box>
      )}
    </>
  );
};

export default StepperComponentPage;
