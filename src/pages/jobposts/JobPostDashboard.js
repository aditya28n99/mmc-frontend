import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import JobpostListCard from '../../components/JobpostListCard';
import { fetchJobPostList } from '../../services/jobPostServices'
import { EmployerContext } from '../../context/EmployerContext';

const JobPostDashboard = () => {

    const {employerId} = useContext(EmployerContext);

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const Navigate = useNavigate();

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

    const handleMakeAPost = () =>{
        Navigate('/');
    }
    return (
        <div className="p-4">
            <h1>Welcome, Employer!</h1>
            <div className="my-4">
                <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 mr-5">Buy Posts</button>
                <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 mr-5" onClick={handleMakeAPost}>
                    Make a Post
                </button>
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
                        {posts.slice(0, 5).map(post => (
                            <JobpostListCard key={post.jobId} post={post} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default JobPostDashboard;
