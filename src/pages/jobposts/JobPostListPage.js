import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import JobpostListCard from '../../components/JobpostListCard';
import {fetchJobPost} from '../../services/jobPostServices';

function JobPostListPage() {

    const employerId = '068979ad-8d63-41a0-b95c-3d9fcfd1a432';

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const getJobPostList = async () => {
        try {
          const data = await fetchJobPost(employerId);
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
                        <JobpostListCard key={post.id} post={post} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default JobPostListPage;