import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"
import JobpostListCard from '../../components/JobpostListCard';
import {fetchJobPostList} from '../../services/jobPostServices';
import { EmployerContext } from '../../context/EmployerContext';

const JobPostListPage =() =>  {

    const { employerId } = useContext(EmployerContext);

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
      const getJobPostList = async () => {
        try {
          const data = await fetchJobPostList(employerId);
          setPosts(data);
          setIsLoading(false);
        } catch (error) {
          console.error('Error fetching posts:', error);
        } finally {
          setIsLoading(false);
        }
      };
      getJobPostList();
    }, [employerId]);

    const handlePostClick = (jobId) => {
        navigate(`/job-post/${employerId}/${jobId}`);
    };

    return (
        <div className="my-4">
            {isLoading ? (
                <p>Loading...</p>
            ) : posts.length === 0 ? (
                <p>No posts available</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {posts.map(post => (
                        <div  key={post.jobId} onClick={() => handlePostClick(post.jobId)}>
                        <JobpostListCard key={post.id} post={post} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default JobPostListPage;