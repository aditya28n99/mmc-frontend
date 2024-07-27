import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchJobPost } from '../../services/jobPostServices';

const JobPostDetail = () => {
    const { jobId } = useParams();
    const [jobPost, setJobPost] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const employerId = '068979ad-8d63-41a0-b95c-3d9fcfd1a432';

    useEffect(() => {

        const getJobPostDetails = async ()=>{
            try{
                const data = await fetchJobPost(employerId, jobId);
                setJobPost(data);
                setIsLoading(false);
            }catch(error){
                console.log("Error while loading Job Post :" + error);
            }finally{
                setIsLoading(false);
            }
        };
        getJobPostDetails();
        
        // Replace with your API endpoint
       
    }, [employerId, jobId]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (!jobPost) {
        return <p>Job post not found</p>;
    }

    return (
        <div className="p-4">
            <h1>{jobPost.jobTitle}</h1>
            <p><strong>Position:</strong> {jobPost.position}</p>
            <p><strong>Description:</strong> {jobPost.jobDescription}</p>
            <p><strong>Requirements:</strong> {jobPost.jobRequirements}</p>
            <p><strong>Location:</strong> {jobPost.jobLocation}</p>
            <p><strong>Salary:</strong> {jobPost.salary}</p>
            <p><strong>Employment Type:</strong> {jobPost.employementType}</p>
            <p><strong>Experience:</strong> {jobPost.experience}</p>
            <p><strong>Apply Before:</strong> {jobPost.applyBefore}</p>
            <p><strong>Skills:</strong> {jobPost.skills.join(', ')}</p>
            <p><strong>Benefits:</strong> {jobPost.benefits.join(', ')}</p>
            <p><strong>Education:</strong> {jobPost.education}</p>
        </div>
    );
};

export default JobPostDetail;
