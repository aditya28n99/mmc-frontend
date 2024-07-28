import React, { useState, useContext } from 'react';
import { EmployerContext } from '../../context/EmployerContext';
import { createJobPost } from '../../services/jobPostServices';

const JobPostForm = () => {
    const { employerId } = useContext(EmployerContext);
    const [formData, setFormData] = useState({
      jobTitle: '',
      position: '',
      jobDescription: '',
      jobRequirements: '',
      jobLocation: '',
      salary: '',
      employmentType: '',
      experience: '',
      applyBefore: '',
      skills: [],
      workType: '',
      benefits: [],
      education: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleArrayChange = (e, key) => {
      const { value } = e.target;
      setFormData({
        ...formData,
        [key]: value.split(',').map(item => item.trim()),
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          console.log("this is the form data we filled: "+ JSON.stringify({ employerId, ...formData }));
          const response = await createJobPost(employerId, formData);
          console.log("this is the responce we passing: "+ response);
          console.log('Job post created:', response.formData);
        // Need to Handle success with reset form or alert - show success message)
      } catch (error) {
        console.error('Error creating job post:', error);
        // Handle error message with alert - error message)
      }
    };
  
    return (
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6">Create Job Post</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Job Title</label>
            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Position</label>
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Job Description</label>
            <textarea
              name="jobDescription"
              value={formData.jobDescription}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Job Requirements</label>
            <textarea
              name="jobRequirements"
              value={formData.jobRequirements}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Job Location</label>
            <input
              type="text"
              name="jobLocation"
              value={formData.jobLocation}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Salary</label>
            <input
              type="text"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Employment Type</label>
            <input
              type="text"
              name="employmentType"
              value={formData.employmentType}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Experience</label>
            <input
              type="text"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Apply Before</label>
            <input
              type="date"
              name="applyBefore"
              value={formData.applyBefore}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Skills (comma-separated)</label>
            <input
              type="text"
              name="skills"
              value={formData.skills.join(', ')}
              onChange={(e) => handleArrayChange(e, 'skills')}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Work Type</label>
            <input
              type="text"
              name="workType"
              value={formData.workType}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Benefits (comma-separated)</label>
            <input
              type="text"
              name="benefits"
              value={formData.benefits.join(', ')}
              onChange={(e) => handleArrayChange(e, 'benefits')}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Education</label>
            <input
              type="text"
              name="education"
              value={formData.education}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Create Job Post
          </button>
        </form>
      </div>
    );
  };
  
  export default JobPostForm;
