import { serverURL } from "./baseURL";
import commonApi from "./commonApi";

export const createResume = async (reqbody) => {
  return await commonApi("post", serverURL + "resumeDatas", reqbody);
};

export const getAllResumes = async () => {
  return await commonApi("get", serverURL + "resumeDatas", "");
};

export const deteteResume = async (id) => {
  return await commonApi("delete", `${serverURL}resumeDatas/${id}`, {});
};


export const editResume=async(id,reqbody)=>{
  return await commonApi('put',`${serverURL}resumeDatas/${id}`,reqbody)
}