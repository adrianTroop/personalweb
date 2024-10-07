import React, { useState } from 'react';
import { User, Briefcase, Mail, Linkedin, Phone } from 'lucide-react';

const PersonalWebpage = () => {
  const [activeTab, setActiveTab] = useState('Web3');

  const projects = {
    Web3: [
      { name: 'DeFi Platform', description: 'Developed a decentralized finance platform' },
      { name: 'NFT Marketplace', description: 'Created an NFT trading platform' },
    ],
    Hospitality: [
      { name: 'Hotel Management System', description: 'Implemented a comprehensive hotel management solution' },
      { name: 'Restaurant Booking App', description: 'Designed a user-friendly restaurant reservation app' },
    ],
    Others: [
      { name: 'E-commerce Website', description: 'Built a scalable e-commerce platform' },
      { name: 'Mobile Game', description: 'Developed a popular mobile game' },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3 bg-gray-800 p-8 text-white">
            <div className="text-center mb-8">
              <User className="mx-auto h-24 w-24 text-gray-300 mb-4" />
              <h1 className="text-2xl font-bold">Your Name</h1>
              <p className="text-gray-400">Professional Title</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>your.email@example.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+1 (123) 456-7890</span>
              </div>
              <div className="flex items-center">
                <Linkedin className="h-5 w-5 mr-2" />
                <span>linkedin.com/in/yourusername</span>
              </div>
            </div>
          </div>
          <div className="md:w-2/3 p-8">
            <div className="mb-6">
              <div className="flex border-b">
                {Object.keys(projects).map((tab) => (
                  <button
                    key={tab}
                    className={`py-2 px-4 ${
                      activeTab === tab ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">{activeTab} Projects</h2>
              <div className="space-y-4">
                {projects[activeTab].map((project, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <h3 className="text-lg font-medium">{project.name}</h3>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalWebpage;