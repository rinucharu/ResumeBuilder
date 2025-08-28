import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/material";

const StepperComponentPage = () => {
  const steps = [
    "Basic Information",
    "Contact Details",
    "Education details",
    "Work Experience",
    "Skills & Certifications",
    "Review & Submit",
  ];

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

  const displayFormDetails = (step) => {
    switch (step) {
      case 0:
        return (
          <>
            <h3>Personal Information</h3>
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
          </>
        );
      case 1:
        return (
          <>
            <h3>Contact Details</h3>
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
          </>
        );
      case 2:
        return (
          <>
            <h3>Education Details</h3>
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
          </>
        );
      case 3:
        return (
          <>
            <h3>Professional Details</h3>

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
          </>
        );

      case 4:
        return (
          <>
            <h3>Skills</h3>

            <TextField
              id="standard-basic"
              className="w-100"
              label="Add Skill"
              variant="standard"
            />

            <Button variant="text" className="mt-3">
              ADD
            </Button>

            <h5>Suggestions :</h5>
            <Stack direction="row" spacing={2}>
             <Button variant="outlined">React</Button>
             <Button variant="outlined">Node</Button>
             <Button variant="outlined">Angular</Button>
             <Button variant="outlined">Express</Button>
             <Button variant="outlined">Mongo DB</Button>
             <Button variant="outlined">Bootstrap</Button>
            </Stack>

            <h5 className="mt-3">Added Skills :</h5>
          </>
        );

      case 5:
        return (
          <>
            <h3>Professional Summary</h3>
            <TextField
              id="standard-multiline-static"
              label="Write a short summary of yourself"
              multiline
              rows={4}
              className="w-100"
              variant="standard"
              defaultValue="I'm a passinate full-stack developer with hands-on experience in React,Node..."
            />
          </>
        );
      default:
        break;
    }
  };

  return (
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
          // if (isStepSkipped(index)) {
          //   stepProps.completed = false;
          // }
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
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>

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
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
};

export default StepperComponentPage;
