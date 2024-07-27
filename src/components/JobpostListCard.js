import React from 'react';

const JobpostListCard = ({ post }) => {
    const { jobTitle, position, applyBefore, numberOfApplicants } = post;

    const calculateDaysRemaining = (applyBefore) => {
        const applyDate = new Date(applyBefore);
        const currentDate = new Date();
        const timeDiff = applyDate - currentDate;
        const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        return daysRemaining > 0 ? `${daysRemaining} days remaining` : 'Expired';
    };

    return (
        <div className="bg-white shadow-md p-4 rounded-md">
            <h3 className="text-lg font-bold">{jobTitle}</h3>
            <p className="text-sm">{position}</p>
            <p className="text-sm">Apply Before: {applyBefore}</p>
            <p className="text-sm">Days Remaining: {calculateDaysRemaining(applyBefore)}</p>
            <p className="text-sm">No of Applicants: {numberOfApplicants}</p>
        </div>
    );
};

export default JobpostListCard;
