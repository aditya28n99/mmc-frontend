import React, { useState } from 'react';
import { createEmployerProfile } from '../services/employerService';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

const EmployerProfile = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    aboutCompany: '',
    websiteLink: '',
    contact: {
      email: '',
      mobile: ''
    },
    officeLocationAddress: {
      address1: '',
      address2: '',
      pinCode: '',
      city: '',
      state: '',
      country: ''
    },
    industryType: '',
    since: '',
    typeOfCompany: '',
    awardsAndAchievements: [
      {
        name: '',
        issuerOrOrganization: '',
        category: '',
        uploadImage: ''
      }
    ],
    socialMediaHandles: {
      youtube: '',
      instagram: '',
      facebook: '',
      twitter: '',
      linkedIn: ''
    },
    companyPhotos: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleNestedChange = (e, nestedField) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [nestedField]: {
        ...prevData[nestedField],
        [name]: value
      }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createEmployerProfile(formData);
      console.log('Employer profile created:', response);
    } catch (error) {
      console.error('Error creating employer profile:', error);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <form onSubmit={handleSubmit} className="mx-40">
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Create Employer Profile</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This information will be displayed publicly so be careful what you share.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-full">
                <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                  Photo
                </label>
                <div className="mt-2 flex items-center gap-x-3">
                  <UserCircleIcon aria-hidden="true" className="h-12 w-12 text-gray-300" />
                  <button
                    type="button"
                    className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    Change
                  </button>
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="companyName" className="block text-sm font-medium leading-6 text-gray-900">
                  Company Name
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      id="companyName"
                      name="companyName"
                      type="text"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Organization Name"
                      autoComplete="organization"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="aboutCompany" className="block text-sm font-medium leading-6 text-gray-900">
                  About
                </label>
                <div className="mt-2">
                  <textarea
                    id="aboutCompany"
                    name="aboutCompany"
                    value={formData.aboutCompany}
                    onChange={handleChange}
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about your organization.</p>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="websiteLink" className="block text-sm font-medium leading-6 text-gray-900">
                  Website Link
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      id="websiteLink"
                      name="websiteLink"
                      type="text"
                      value={formData.websiteLink}
                      onChange={handleChange}
                      placeholder="https://crewhire.com"
                      autoComplete="url"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="contact.email" className="block text-sm font-medium leading-6 text-gray-900">
                  Contact Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.contact.email}
                    onChange={(e) => handleNestedChange(e, 'contact')}
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="contact.mobile" className="block text-sm font-medium leading-6 text-gray-900">
                  Contact Mobile
                </label>
                <div className="mt-2">
                  <input
                    id="mobile"
                    name="mobile"
                    type="text"
                    value={formData.contact.mobile}
                    onChange={(e) => handleNestedChange(e, 'contact')}
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <label htmlFor="address1" className="block text-sm font-medium leading-6 text-gray-900">
                  Address Line 1
                </label>
                <div className="mt-2">
                  <input
                    id="address1"
                    name="address1"
                    type="text"
                    value={formData.officeLocationAddress.address1}
                    onChange={(e) => handleNestedChange(e, 'officeLocationAddress')}
                    autoComplete="address-line1"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <label htmlFor="address2" className="block text-sm font-medium leading-6 text-gray-900">
                  Address Line 2
                </label>
                <div className="mt-2">
                  <input
                    id="address2"
                    name="address2"
                    type="text"
                    value={formData.officeLocationAddress.address2}
                    onChange={(e) => handleNestedChange(e, 'officeLocationAddress')}
                    autoComplete="address-line2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="pinCode" className="block text-sm font-medium leading-6 text-gray-900">
                  Pin Code
                </label>
                <div className="mt-2">
                  <input
                    id="pinCode"
                    name="pinCode"
                    type="text"
                    value={formData.officeLocationAddress.pinCode}
                    onChange={(e) => handleNestedChange(e, 'officeLocationAddress')}
                    autoComplete="postal-code"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                  City
                </label>
                <div className="mt-2">
                  <input
                    id="city"
                    name="city"
                    type="text"
                    value={formData.officeLocationAddress.city}
                    onChange={(e) => handleNestedChange(e, 'officeLocationAddress')}
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="state" className="block text-sm font-medium leading-6 text-gray-900">
                  State
                </label>
                <div className="mt-2">
                  <input
                    id="state"
                    name="state"
                    type="text"
                    value={formData.officeLocationAddress.state}
                    onChange={(e) => handleNestedChange(e, 'officeLocationAddress')}
                    autoComplete="address-level1"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                  Country
                </label>
                <div className="mt-2">
                  <input
                    id="country"
                    name="country"
                    type="text"
                    value={formData.officeLocationAddress.country}
                    onChange={(e) => handleNestedChange(e, 'officeLocationAddress')}
                    autoComplete="country"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="industryType" className="block text-sm font-medium leading-6 text-gray-900">
                  Industry Type
                </label>
                <div className="mt-2">
                  <input
                    id="industryType"
                    name="industryType"
                    type="text"
                    value={formData.industryType}
                    onChange={handleChange}
                    autoComplete="industry"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="since" className="block text-sm font-medium leading-6 text-gray-900">
                  Since
                </label>
                <div className="mt-2">
                  <input
                    id="since"
                    name="since"
                    type="text"
                    value={formData.since}
                    onChange={handleChange}
                    autoComplete="since"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="typeOfCompany" className="block text-sm font-medium leading-6 text-gray-900">
                  Type of Company
                </label>
                <div className="mt-2">
                  <input
                    id="typeOfCompany"
                    name="typeOfCompany"
                    type="text"
                    value={formData.typeOfCompany}
                    onChange={handleChange}
                    autoComplete="typeOfCompany"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

               <div className="sm:col-span-4">
                <label htmlFor="socialMediaHandles.youtube" className="block text-sm font-medium leading-6 text-gray-900">
                  Awards And Achievements
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.awardsAndAchievements.name}
                    onChange={(e) => handleNestedChange(e, 'awardsAndAchievements')}
                    autoComplete="url"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/* Add fields for socialMediaHandles here */}
              <div className="sm:col-span-4">
                <label htmlFor="socialMediaHandles.youtube" className="block text-sm font-medium leading-6 text-gray-900">
                  YouTube Link
                </label>
                <div className="mt-2">
                  <input
                    id="youtube"
                    name="youtube"
                    type="text"
                    value={formData.socialMediaHandles.youtube}
                    onChange={(e) => handleNestedChange(e, 'socialMediaHandles')}
                    autoComplete="url"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label htmlFor="socialMediaHandles.youtube" className="block text-sm font-medium leading-6 text-gray-900">
                  Instagram Link
                </label>
                <div className="mt-2">
                  <input
                    id="Instagram"
                    name="instagram"
                    type="text"
                    value={formData.socialMediaHandles.instagram}
                    onChange={(e) => handleNestedChange(e, 'socialMediaHandles')}
                    autoComplete="url"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label htmlFor="socialMediaHandles.youtube" className="block text-sm font-medium leading-6 text-gray-900">
                Facebook Link
                </label>
                <div className="mt-2">
                  <input
                    id="facebook"
                    name="facebook"
                    type="text"
                    value={formData.socialMediaHandles.facebook}
                    onChange={(e) => handleNestedChange(e, 'socialMediaHandles')}
                    autoComplete="url"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label htmlFor="socialMediaHandles.youtube" className="block text-sm font-medium leading-6 text-gray-900">
                Twitter Link
                </label>
                <div className="mt-2">
                  <input
                    id="twitter"
                    name="twitter"
                    type="text"
                    value={formData.socialMediaHandles.twitter}
                    onChange={(e) => handleNestedChange(e, 'socialMediaHandles')}
                    autoComplete="url"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/* Repeat above block for Instagram, Facebook, Twitter, and LinkedIn */}

              {/* Add companyPhotos field here */}
              <div className="sm:col-span-4">
                <label htmlFor="companyPhotos" className="block text-sm font-medium leading-6 text-gray-900">
                  Company Photos
                </label>
                <div className="mt-2">
                  <input
                    id="companyPhotos"
                    name="companyPhotos"
                    type="file"
                    multiple
                    onChange={(e) => {
                      const files = Array.from(e.target.files);
                      setFormData((prevData) => ({
                        ...prevData,
                        companyPhotos: files
                      }));
                    }}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full flex justify-end gap-x-6">
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-sm font-semibold text-white shadow-sm ring-1 ring-indigo-600 hover:ring-indigo-700 focus:ring-2 focus:ring-indigo-600"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setFormData('')}
                  className="rounded-md bg-gray-100 px-3.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-300 hover:ring-gray-400 focus:ring-2 focus:ring-gray-400"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EmployerProfile;
