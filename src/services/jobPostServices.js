import axios from 'axios';

const BASE_URL = 'http://13.201.62.223:8000';

export const fetchJobPostList = async (employerId) => {
  try {
    const response = await axios.get(`${BASE_URL}/jobPosting/getAllJobs/${employerId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchJobPost = async (employerId, jobID) => {
  try {
    const response = await axios.get(`${BASE_URL}/jobPosting/getJob/${employerId}/${jobID}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createJobPost = async (employerId, jobPostData) => {
  console.log("JP data :", jobPostData);
  try {
    const response = await axios.post(`${BASE_URL}/jobPosting/createJobPost/${employerId}`, jobPostData);
    console.log("The response we got is the: ", response.data);
    return response.data;

  } catch (error) {
    console.log("This is error we get: ", error);
    throw error;
  }
};

export const updateJobPost = async (employerId, jobId, jobPostData) => {
  try {
    const response = await axios.put(`${BASE_URL}/jobPosting/updateJobPost/${employerId}/${jobId}`, jobPostData);
    return response.data;
  } catch (error) {
    console.log("This is error we get while updating the jobpost: ", error);
    throw error;
  }
};
