import React from 'react'
import { FaFileDownload } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';


const ResumeGenarator = () => {
  return (
 
<div className="container my-5">
  <h3 className='text-center mb-4 fw-bold'>Create a job-winning Resume in minutes</h3>

  <div className="d-flex justify-content-evenly mt-5">
<div className="information rounded shadow p-5 text-center w-25">
<h4 className='text-primary fs-1 mb-3'><FaFileAlt /></h4>
  <h4 className='fs-4 fw-semibold'>Add your information</h4>
  <p className='text-justify'>Add pre-written examples to each section</p>
  <h4 className='fw-semibold'>Step 1</h4>

  </div>

  <div className="download rounded shadow p-5 text-center w-25">
    <h4 className='text-danger fs-1 mb-3'><FaFileDownload /></h4>
    <h4 className='fs-4 fw-semibold'>Download your Resume</h4>
    <p className='text-justify'>Download and start applying</p>
    <h4 className='fw-semibold'>Step 2</h4>

  </div>
  </div>

  <div className="text-center mt-5">
    <Link to={'/form'} className='btn btn-outline-primary w-25'>Let's Start</Link>
  </div>
  
</div>
    
  )
}

export default ResumeGenarator