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
    employementType: '',
    experience: '',
    applyBefore: '',
    skills: [],
    workType: '',
    benefits: [],
    education: '',
    noOfPositions: ''
  });

  const [errors, setErrors] = useState({});
  const [submissionMessage, setSubmissionMessage] = useState('');

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

  const validateForm = () => {
    const newErrors = {};
    if (!formData.jobTitle.trim()) newErrors.jobTitle = 'Job Title is required';
    if (!formData.position.trim()) newErrors.position = 'Position is required';
    if (!formData.jobDescription.trim()) newErrors.jobDescription = 'Job Description is required';
    if (!formData.jobRequirements.trim()) newErrors.jobRequirements = 'Job Requirements are required';
    if (!formData.jobLocation.trim()) newErrors.jobLocation = 'Job Location is required';
    if (!formData.salary.trim() || isNaN(formData.salary)) newErrors.salary = 'Valid Salary is required';
    if (!formData.employementType.trim()) newErrors.employementType = 'Employment Type is required';
    if (!formData.experience.trim()) newErrors.experience = 'Experience is required';
    if (!formData.applyBefore) newErrors.applyBefore = 'Apply Before date is required';
    if (!formData.skills.length) newErrors.skills = 'At least one skill is required';
    if (!formData.workType.trim()) newErrors.workType = 'Work Type is required';
    if (!formData.benefits.length) newErrors.benefits = 'At least one benefit is required';
    if (!formData.education.trim()) newErrors.education = 'Education is required';
    if (!formData.noOfPositions.trim()) newErrors.noOfPositions = 'Enter Number of Positions';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await createJobPost(employerId, formData);
      console.log('Job post created:', response.formData);
      setSubmissionMessage('Job post created successfully!');
      setFormData({
        jobTitle: '',
        position: '',
        jobDescription: '',
        jobRequirements: '',
        jobLocation: '',
        salary: '',
        employementType: '',
        experience: '',
        applyBefore: '',
        skills: [],
        workType: '',
        benefits: [],
        education: '',
        noOfPositions: ''
      });
    } catch (error) {
      console.error('Error creating job post:', error);
      setSubmissionMessage('Error creating job post. Please try again.');
    }
  };

  return (
    <div className="container mx-auto py-8 px-4 max-w-3xl">
      <h1 className="text-4xl font-extrabold mb-8 text-gray-900">Create Job Post</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Job Title</label>
          <input
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            className={`block w-full px-3 py-2 border rounded-md shadow-sm ${errors.jobTitle ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.jobTitle && <p className="text-red-500 text-sm">{errors.jobTitle}</p>}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Position</label>
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            className={`block w-full px-3 py-2 border rounded-md shadow-sm ${errors.position ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.position && <p className="text-red-500 text-sm">{errors.position}</p>}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Job Description</label>
          <textarea
            name="jobDescription"
            value={formData.jobDescription}
            onChange={handleChange}
            className={`block w-full px-3 py-2 border rounded-md shadow-sm ${errors.jobDescription ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
            rows="4"
          />
          {errors.jobDescription && <p className="text-red-500 text-sm">{errors.jobDescription}</p>}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Job Requirements</label>
          <textarea
            name="jobRequirements"
            value={formData.jobRequirements}
            onChange={handleChange}
            className={`block w-full px-3 py-2 border rounded-md shadow-sm ${errors.jobRequirements ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
            rows="4"
          />
          {errors.jobRequirements && <p className="text-red-500 text-sm">{errors.jobRequirements}</p>}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Job Location</label>
          <input
            type="text"
            name="jobLocation"
            value={formData.jobLocation}
            onChange={handleChange}
            className={`block w-full px-3 py-2 border rounded-md shadow-sm ${errors.jobLocation ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.jobLocation && <p className="text-red-500 text-sm">{errors.jobLocation}</p>}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Salary</label>
          <input
            type="text"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            className={`block w-full px-3 py-2 border rounded-md shadow-sm ${errors.salary ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.salary && <p className="text-red-500 text-sm">{errors.salary}</p>}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Employment Type</label>
          <input
            type="text"
            name="employementType"
            value={formData.employementType}
            onChange={handleChange}
            className={`block w-full px-3 py-2 border rounded-md shadow-sm ${errors.employementType ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.employementType && <p className="text-red-500 text-sm">{errors.employementType}</p>}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Experience</label>
          <input
            type="text"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className={`block w-full px-3 py-2 border rounded-md shadow-sm ${errors.experience ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.experience && <p className="text-red-500 text-sm">{errors.experience}</p>}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Apply Before</label>
          <input
            type="date"
            name="applyBefore"
            value={formData.applyBefore}
            onChange={handleChange}
            className={`block w-full px-3 py-2 border rounded-md shadow-sm ${errors.applyBefore ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.applyBefore && <p className="text-red-500 text-sm">{errors.applyBefore}</p>}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Skills (comma-separated)</label>
          <input
            type="text"
            name="skills"
            value={formData.skills.join(', ')}
            onChange={(e) => handleArrayChange(e, 'skills')}
            className={`block w-full px-3 py-2 border rounded-md shadow-sm ${errors.skills ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.skills && <p className="text-red-500 text-sm">{errors.skills}</p>}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Work Type</label>
          <input
            type="text"
            name="workType"
            value={formData.workType}
            onChange={handleChange}
            className={`block w-full px-3 py-2 border rounded-md shadow-sm ${errors.workType ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.workType && <p className="text-red-500 text-sm">{errors.workType}</p>}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Benefits (comma-separated)</label>
          <input
            type="text"
            name="benefits"
            value={formData.benefits.join(', ')}
            onChange={(e) => handleArrayChange(e, 'benefits')}
            className={`block w-full px-3 py-2 border rounded-md shadow-sm ${errors.benefits ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.benefits && <p className="text-red-500 text-sm">{errors.benefits}</p>}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Education</label>
          <input
            type="text"
            name="education"
            value={formData.education}
            onChange={handleChange}
            className={`block w-full px-3 py-2 border rounded-md shadow-sm ${errors.education ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.education && <p className="text-red-500 text-sm">{errors.education}</p>}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">No of Positions</label>
          <input
            type="text"
            name="noOfPositions"
            value={formData.noOfPositions}
            onChange={handleChange}
            className={`block w-full px-3 py-2 border rounded-md shadow-sm ${errors.noOfPositions ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.noOfPositions && <p className="text-red-500 text-sm">{errors.noOfPositions}</p>}
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>

        {submissionMessage && (
          <p className={`mt-4 text-sm ${submissionMessage.includes('Error') ? 'text-red-500' : 'text-green-500'}`}>
            {submissionMessage}
          </p>
        )}
      </form>
    </div>
  );
};

export default JobPostForm;
