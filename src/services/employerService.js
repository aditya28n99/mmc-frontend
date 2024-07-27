import axios from 'axios';

const BASE_URL = 'http://13.201.62.223:8000';

export const createEmployerProfile = async (formData) => {
  try {
    const response = await axios.post(`${BASE_URL}`, formData);
    return response.data;
  } catch (error) {
    throw error;
  } 
};


export const fetchEmployerProfile = async (employerId) => {
  try {
    const response = await axios.get(`${BASE_URL}/employerProfile/get/${employerId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Add more functions as needed
