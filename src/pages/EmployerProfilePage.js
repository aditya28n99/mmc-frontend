import React, { useContext, useEffect, useState } from 'react';
import { fetchEmployerProfile } from '../services/employerService';
import { EmployerContext } from '../context/EmployerContext';

const EmployerProfilePage = ({ match }) => {
  const [employerProfile, setEmployerProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { employerId } = useContext(EmployerContext);

  useEffect(() => {
    const getEmployerProfile = async () => {
      try {
        const data = await fetchEmployerProfile(employerId);
        setEmployerProfile(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getEmployerProfile();
  }, [employerId]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-center mb-6">{employerProfile.companyName}</h1>
      <p className="text-center mb-8">{employerProfile.aboutCompany}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div>
            <strong>Website:</strong> <a href={employerProfile.websiteLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{employerProfile.websiteLink}</a>
          </div>
          <div>
            <strong>Email:</strong> {employerProfile.contact.email}
          </div>
          <div>
            <strong>Mobile:</strong> {employerProfile.contact.mobile}
          </div>
          <div>
            <strong>Address:</strong>
            <p>{employerProfile.officeLocationAddress.address1}</p>
            <p>{employerProfile.officeLocationAddress.address2}</p>
            <p>{employerProfile.officeLocationAddress.city}, {employerProfile.officeLocationAddress.state}, {employerProfile.officeLocationAddress.country}, {employerProfile.officeLocationAddress.pinCode}</p>
          </div>
          <div>
            <strong>Industry Type:</strong> {employerProfile.industryType}
          </div>
          <div>
            <strong>Since:</strong> {employerProfile.since}
          </div>
          <div>
            <strong>Type of Company:</strong> {employerProfile.typeOfCompany}
          </div>
        </div>
        
        {employerProfile.awardsAndAchievements && employerProfile.awardsAndAchievements.length > 0 && (
          <div className="space-y-4">
            <strong>Awards and Achievements:</strong>
            <ul className="list-disc list-inside">
              {employerProfile.awardsAndAchievements.map((award, index) => (
                <li key={index}>
                  {award.name} - {award.issuerOrOrganization} ({award.category})
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="mt-8">
        <strong>Social Media Handles:</strong>
        <ul className="flex space-x-4 mt-2">
          <li><a href={employerProfile.socialMediaHandles.youtube} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">YouTube</a></li>
          <li><a href={employerProfile.socialMediaHandles.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline">Instagram</a></li>
          <li><a href={employerProfile.socialMediaHandles.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Facebook</a></li>
          <li><a href={employerProfile.socialMediaHandles.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Twitter</a></li>
          <li><a href={employerProfile.socialMediaHandles.linkedIn} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a></li>
        </ul>
      </div>

      {employerProfile.companyPhotos && employerProfile.companyPhotos.length > 0 && (
        <div className="mt-8">
          <strong>Company Photos:</strong>
          <div className="flex space-x-4 mt-2">
            {employerProfile.companyPhotos.map((photo, index) => (
              <img key={index} src={photo} alt={`Company photo ${index}`} className="w-32 h-32 object-cover rounded shadow-md" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployerProfilePage;
