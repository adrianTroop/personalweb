import React, { useState } from 'react';
import { Mail, Linkedin, ExternalLink } from 'lucide-react';

const PersonalWebpage = () => {
  const [activeTab, setActiveTab] = useState('Web3');
  const email = process.env.REACT_APP_EMAIL 
  
  const projects = {
    Web3: [
      { name: 'Hi.com', description: 'A cutting-edge fintech platform focused on developing innovative trading solutions, including a Telegram app for in-app trading with up to 1000x leveraged futures trading.', link: 'https://hi.com' },
      { name: 'Everything.co', description: 'A Proof of balance trading platform that aims to make Institutional trading more transparent', link: 'https://everything.co' }
    ],
    Hospitality: [
      { name: 'Machri Group', description: 'Exclusive concierge service catering to high-net-worth individuals. Specializes in bespoke experiences and personalized services for discerning clientele.', link: 'https://machrigroup.com/' },
      { name: 'Scandal Club London', description: 'Premier nightlife venue in London until 2019. Known for its exclusive clientele and trend-setting atmosphere in the competitive London entertainment scene.', link: 'http://www.scandallondon.com/' },
    ],
    Beverage: [
      { name: 'Xandomel Albariño', description: 'Premium Albariño wine brand with presence in 6 international markets. Distinctive packaging designed by Rhed studio, enhancing brand recognition and market positioning.', link: 'https://xandomel.com' },
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="w-full max-w-6xl bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left side - Personal Info */}
          <div className="md:w-1/3 bg-black bg-opacity-50 p-10 text-white flex flex-col justify-center">
            <div className="text-left mb-10">
              <h1 className="text-4xl font-bold text-gold mb-2">Adrian T. Troop</h1>
              <p className="text-xl text-gray-300 mb-6">London / Barcelona / Bangkok</p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-gold" />
                  <a href={`mailto:${email}`} className="text-lg hover:text-gold transition-colors">Get in touch</a>
                </div>
                <div className="flex items-center">
                  <Linkedin className="h-5 w-5 mr-3 text-gold" />
                  <a href="https://www.linkedin.com/in/adriantroop/" className="text-lg hover:text-gold transition-colors">LinkedIn Profile</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Projects */}
          <div className="md:w-2/3 p-10">
            <div className="mb-8">
              <div className="flex border-b border-gray-600">
                {Object.keys(projects).map((tab) => (
                  <button
                    key={tab}
                    className={`py-3 px-6 text-lg font-medium ${
                      activeTab === tab ? 'border-b-2 border-gold text-gold' : 'text-gray-400 hover:text-gray-200'
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-6 text-gold">{activeTab} Ventures</h2>
              <div className="grid grid-cols-1 gap-6">
                {projects[activeTab].map((project, index) => (
                  <div key={index} className="border border-gray-600 rounded-lg p-4 hover:bg-black hover:bg-opacity-20 transition-all duration-300">
                    <h3 className="text-xl font-medium text-white">{project.name}</h3>
                    <p className="text-gray-400 mt-2">{project.description}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center text-gold hover:underline">
                      WebPage <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
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
