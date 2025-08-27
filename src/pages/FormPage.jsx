import React from 'react'
import StepperComponentPage from '../components/StepperComponentPage'
import Preview from '../components/Preview'


const FormPage = () => {
  return (
    <>
  
      <div className="row m-5">
        <div className="col-lg-6">
          <StepperComponentPage/>
        </div>
        <div className="col-lg-6">
          <Preview/>
        </div>
      </div>
     </>
  )
}

export default FormPage