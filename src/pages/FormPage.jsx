import React, { useState } from "react";
import StepperComponentPage from "../components/StepperComponentPage";
import Preview from "../components/Preview";

const FormPage = () => {
  const [resumeData, setResumeData] = useState({
    fullname: "",
    Jobtitle: "",
    location: "",
    email: "",
    phoneNumber: "",
    github: "",
    linkedin: "",
    portfolio: "",
    courseName: "",
    collegeName: "",
    university: "",
    yearOfPassout: "",
    jobOfWork: "",
    campanyName: "",
    locationOfWork: "",
    durationOfWork: "",
    skills: [],
    summary: "",
  });

const [showButtons,setShowButtons]=useState(false)
  
  return (
    <>
      <div className="row m-5">
        <div className="col-lg-6">
          <StepperComponentPage setResumeData={setResumeData} resumeData={resumeData} setShowButtons={setShowButtons}  />
        </div>
        <div className="col-lg-6">
          <Preview resumeData={resumeData} showButtons={showButtons} />
        </div>
      </div>
    </>
  );
};

export default FormPage;
