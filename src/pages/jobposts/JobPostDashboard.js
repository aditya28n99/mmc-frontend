import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import JobpostListCard from '../../components/JobpostListCard';
import {fetchJobPostList} from '../../services/jobPostServices'

const JobPostDashboard = () => {

    const employerId = '068979ad-8d63-41a0-b95c-3d9fcfd1a432';

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
        <div className="p-4">
            <h1>Welcome, Employer!</h1>
            <div className="my-4">
                <button className="btn btn-primary mr-2">Buy Posts</button>
                <button className="btn btn-secondary">Make a Post</button>
            </div>
            <div className="my-4">
                <div className="flex justify-between items-center">
                    <h2>Your Recent Posts</h2>
                    <Link to="/job-posts-list" className="btn btn-link">View All</Link>
                </div>
                {isLoading ? (
                    <p>Loading...</p>
                ) : posts.length === 0 ? (
                    <p>No posts available</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {posts.slice(0,5).map(post => (
                            <JobpostListCard key={post.id} post={post} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default JobPostDashboard;
