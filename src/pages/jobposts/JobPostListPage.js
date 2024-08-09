import React, { useContext, useEffect, useState } from 'react';
import JobpostListCard from '../../components/JobpostListCard';
import {fetchJobPostList} from '../../services/jobPostServices';
import { EmployerContext } from '../../context/EmployerContext';

const JobPostListPage =() =>  {

    const { employerId } = useContext(EmployerContext);

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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

    return (
        <div className="my-4">
            {isLoading ? (
                <p>Loading...</p>
            ) : posts.length === 0 ? (
                <p>No posts available</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {posts.map(post => (
                        <JobpostListCard key={post.jobId} post={post} employerId={employerId} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default JobPostListPage;