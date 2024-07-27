import React, { useState } from 'react';
import { createEmployerProfile } from '../services/employerService';

const EmployerProfile = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    aboutCompany: '',
    websiteLink: '',
    contact: {
      email: '',
      mobile: ''
    },
    officeLocationAddress: {
      address1: '',
      address2: '',
      pinCode: '',
      city: '',
      state: '',
      country: ''
    },
    industryType: '',
    since: '',
    typeOfCompany: '',
    awardsAndAchievements: [
      {
        name: '',
        issuerOrOrganization: '',
        category: '',
        uploadImage: ''
      }
    ],
    socialMediaHandles: {
      youtube: '',
      instagram: '',
      facebook: '',
      twitter: '',
      linkedIn: ''
    },
    companyPhotos: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createEmployerProfile(formData);
      console.log('Employer profile created:', response);
    } catch (error) {
      console.error('Error creating employer profile:', error);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-4">Create Employer Profile</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="companyName">Company Name</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="aboutCompany">About Company</label>
          <textarea
            id="aboutCompany"
            name="aboutCompany"
            value={formData.aboutCompany}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="websiteLink">Website Link</label>
          <input
            type="text"
            id="websiteLink"
            name="websiteLink"
            value={formData.websiteLink}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        {/* Add more fields for contact, officeLocationAddress, industryType, since, typeOfCompany, awardsAndAchievements, socialMediaHandles, and companyPhotos */}
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default EmployerProfile;
