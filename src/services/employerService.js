import axios from 'axios';

const BASE_URL = 'http://45.64.105.171:8000';

export const createEmployerProfile = async (formData) => {
  try {
    const response = await axios.post(`${BASE_URL}/employerProfile/create`, formData, {
      headers: {
        'Content-Type': 'application/json' // Add appropriate headers if necessary
      }
    });
    return response.data;
  } catch (error) {
    // Handle and log the error
    console.error('Error creating employer profile:', error);
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
