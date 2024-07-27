import axios from 'axios';

const BASE_URL = 'http://13.201.62.223:8000';

export const fetchJobPost = async (employerId) => {
    try {
      const response = await axios.get(`${BASE_URL}/jobPosting/getAllJobs/${employerId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };