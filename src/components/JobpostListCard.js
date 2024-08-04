import React from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom'; // Import Link for navigation

const statuses = {
  Active: 'text-green-700 bg-green-50 ring-green-600/20',
  Expired: 'text-red-700 bg-red-50 ring-red-600/10',
}

const JobpostListCard = ({ post, employerId }) => { // Added employerId prop
    const { jobTitle, position, applyBefore, numberOfApplicants, jobLocation, salary, jobId } = post; // Destructure jobId

    const calculateStatus = (applyBefore) => {
        const applyDate = new Date(applyBefore);
        const currentDate = new Date();
        return applyDate >= currentDate ? 'Active' : 'Expired';
    };

    return (
        <li className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg list-none"> {/* Removed unwanted dot with list-none */}
            <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
                {/* Replace this with an actual image once we get it. */}
                <div className="h-12 w-12 flex-none rounded-lg bg-gray-200"></div>
                <div className="text-sm font-medium leading-6 text-gray-900">
                    {jobTitle}
                    {/* Added location below title */}
                    <div className="text-sm text-gray-500">{jobLocation}</div>
                </div>
                <Menu as="div" className="relative ml-auto">
                    <MenuButton className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Open options</span>
                        <EllipsisHorizontalIcon aria-hidden="true" className="h-5 w-5" />
                    </MenuButton>
                    <MenuItems
                        transition
                        className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                        <MenuItem>
                            {/* Updated link to view post details */}
                            <Link to={`/job-post/${employerId}/${jobId}`} className="block px-3 py-1 text-sm leading-6 text-gray-900 data-[focus]:bg-gray-50">
                                View<span className="sr-only">, {jobTitle}</span>
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            {/* Updated link to edit post */}
                            <Link to={`/job-post/${employerId}/${jobId}/edit`} className="block px-3 py-1 text-sm leading-6 text-gray-900 data-[focus]:bg-gray-50">
                                Edit<span className="sr-only">, {jobTitle}</span>
                            </Link>
                        </MenuItem>
                    </MenuItems>
                </Menu>
            </div>
            <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
                {/* Removed location section */}
                <div className="flex justify-between gap-x-4 py-3">
                    <dt className="text-gray-500">Apply Before</dt>
                    <div className='flex'>
                    <dd className="text-gray-700">
                        <time dateTime={applyBefore}>{applyBefore}</time> 
                    </dd>
                    <div className="ml-2 flex items-center">
                    <div
                        className={`rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${statuses[calculateStatus(applyBefore)]}`}
                        >
                        {calculateStatus(applyBefore)}
                    </div>
                        </div>
                </div>
                </div>
                <div className="flex justify-between gap-x-4 py-3">
                    <dt className="text-gray-500">Salary</dt>
                    <dd className="text-gray-700">{salary}</dd>
                </div>
                <div className="flex justify-between gap-x-4 py-3">
                    <dt className="text-gray-500">Applications Received</dt>
                    <dd className="font-medium text-gray-900">{numberOfApplicants}</dd>
                </div>
            </dl>
        </li>
    );
};

export default JobpostListCard;
