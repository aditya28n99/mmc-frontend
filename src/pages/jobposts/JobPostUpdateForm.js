import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { EmployerContext } from '../../context/EmployerContext';
import { fetchJobPost, updateJobPost } from '../../services/jobPostServices'; // Add updateJobPost to services

const JobPostUpdateForm = () => {
  const { employerId } = useContext(EmployerContext);
  const { jobId } = useParams(); // Get jobId from URL
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
    education: ''
  });
  const [errors, setErrors] = useState({});
  const [submissionMessage, setSubmissionMessage] = useState('');
  const navigate = useNavigate(); // For navigation

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchJobPost(employerId, jobId);
        setFormData(data);
      } catch (error) {
        console.error('Error fetching job post:', error);
      }
    };
    fetchData();
  }, [employerId, jobId]);

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

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const updatedData = { ...formData };
    delete updatedData.jobTitle; // Exclude jobTitle from update

    try {
      const response = await updateJobPost(employerId, jobId, updatedData);
      console.log('Job post updated:', response);
      setSubmissionMessage('Job post updated successfully!');
      alert('Job post updated successfully!')
      setTimeout(() => {
        navigate(-1); // Go back to the previous pagem using -1
      }, 500);
    } catch (error) {
      console.error('Error updating job post:', error);
      setSubmissionMessage('Error updating job post. Please try again.');
    }
  };

  const handleCancel = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="container mx-auto py-8 px-4 max-w-3xl">
      <h1 className="text-4xl font-extrabold mb-8 text-gray-900">Update Job Post</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Job Title</label>
          <input
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            readOnly
            className="block w-full px-3 py-2 border rounded-md shadow-sm border-gray-300 bg-gray-100 cursor-not-allowed"
          />
        </div>
        {/* Repeat similar fields as in JobPostForm, excluding jobTitle */}
        {/* Add validation error messages where necessary */}
         <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Position</label>
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            className={`block w-full px-3 py-2 border rounded-md shadow-sm ${
              errors.position ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.position && <p className="text-sm text-red-500">{errors.position}</p>}
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Job Description</label>
          <textarea
            name="jobDescription"
            value={formData.jobDescription}
            onChange={handleChange}
            rows="4"
            className={`block w-full px-3 py-2 border rounded-md shadow-sm ${
              errors.jobDescription ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.jobDescription && <p className="text-sm text-red-500">{errors.jobDescription}</p>}
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Job Requirements</label>
          <textarea
            name="jobRequirements"
            value={formData.jobRequirements}
            onChange={handleChange}
            rows="4"
            className={`block w-full px-3 py-2 border rounded-md shadow-sm ${
              errors.jobRequirements ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.jobRequirements && <p className="text-sm text-red-500">{errors.jobRequirements}</p>}
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Job Location</label>
          <input
            type="text"
            name="jobLocation"
            value={formData.jobLocation}
            onChange={handleChange}
            className={`block w-full px-3 py-2 border rounded-md shadow-sm ${
              errors.jobLocation ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.jobLocation && <p className="text-sm text-red-500">{errors.jobLocation}</p>}
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Salary</label>
          <input
            type="text"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            className={`block w-full px-3 py-2 border rounded-md shadow-sm ${
              errors.salary ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.salary && <p className="text-sm text-red-500">{errors.salary}</p>}
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Employment Type</label>
          <input
            type="text"
            name="employementType"
            value={formData.employementType}
            onChange={handleChange}
            className={`block w-full px-3 py-2 border rounded-md shadow-sm ${
              errors.employementType ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.employementType && <p className="text-sm text-red-500">{errors.employementType}</p>}
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Experience</label>
          <input
            type="text"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className={`block w-full px-3 py-2 border rounded-md shadow-sm ${
              errors.experience ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.experience && <p className="text-sm text-red-500">{errors.experience}</p>}
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Apply Before</label>
          <input
            type="date"
            name="applyBefore"
            value={formData.applyBefore}
            onChange={handleChange}
            className={`block w-full px-3 py-2 border rounded-md shadow-sm ${
              errors.applyBefore ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.applyBefore && <p className="text-sm text-red-500">{errors.applyBefore}</p>}
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Skills (comma separated)</label>
          <input
            type="text"
            name="skills"
            value={formData.skills.join(', ')}
            onChange={(e) => handleArrayChange(e, 'skills')}
            className={`block w-full px-3 py-2 border rounded-md shadow-sm ${
              errors.skills ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.skills && <p className="text-sm text-red-500">{errors.skills}</p>}
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Work Type</label>
          <input
            type="text"
            name="workType"
            value={formData.workType}
            onChange={handleChange}
            className={`block w-full px-3 py-2 border rounded-md shadow-sm ${
              errors.workType ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.workType && <p className="text-sm text-red-500">{errors.workType}</p>}
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Benefits (comma separated)</label>
          <input
            type="text"
            name="benefits"
            value={formData.benefits.join(', ')}
            onChange={(e) => handleArrayChange(e, 'benefits')}
            className={`block w-full px-3 py-2 border rounded-md shadow-sm ${
              errors.benefits ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.benefits && <p className="text-sm text-red-500">{errors.benefits}</p>}
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Education</label>
          <input
            type="text"
            name="education"
            value={formData.education}
            onChange={handleChange}
            className={`block w-full px-3 py-2 border rounded-md shadow-sm ${
              errors.education ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.education && <p className="text-sm text-red-500">{errors.education}</p>}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm"
        >
          Update Post
        </button>
        <button
          type="button"
          onClick={handleCancel}
          className="bg-gray-500 text-white px-4 py-2 rounded-md shadow-sm ml-4"
        >
          Cancel
        </button>
        {submissionMessage && (
          <div className="mt-4 p-2 text-green-700 bg-green-100 border border-green-200 rounded-md">
            {submissionMessage}
          </div>
        )}
      </form>
    </div>
  );
};

export default JobPostUpdateForm;

