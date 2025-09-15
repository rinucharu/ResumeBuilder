import React, { useEffect, useState } from "react";
import { deteteResume, getAllResumes } from "../services/allApi";
import Preview from "../components/Preview";
import Edit from "../components/Edit";



const HistoryPage = () => {
  const [resumeData, setResumeData] = useState([]);

  useEffect(() => {
    getResumeDatas();
  }, []);

  const getResumeDatas = async () => {
    let apiResult = await getAllResumes();
    setResumeData(apiResult["data"]);
  };


  const deleteR=async(id)=>{
try {
  let apiResult=await deteteResume(id)
  if (apiResult.status>=200 && apiResult.status<=300) {
    alert('successfully deleted')
    getResumeDatas()
  }
} catch (error) {
  console.log(error)
}
  }

  return (
    <>
      <div className="container">
        <h1 className="text-center">History</h1>
        {resumeData?.length > 0 ? (
          <div className="row">
            {resumeData?.map((eachResume) => (
              <div className="col-lg-6 mb-3">
                <button onClick={()=>deleteR(eachResume.id)} className="btn btn-danger">Delete Resume</button>
                <Edit resumeData={eachResume}/>
                <Preview resumeData={eachResume} isFromHistoryPage={true} />
              </div>
            ))}
          </div>
        ) : (
          <h1>no History found</h1>
        )}
      </div>
    </>
  );
};

export default HistoryPage;
