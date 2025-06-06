import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ResourcesList() {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/resources')
      .then(res => setResources(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center">
      <h2 className="text-2xl text-white mb-6 text-center py-6">All Resources</h2>
      <div className="w-full max-w-lg">
        {resources.map(resource => (
          <Link
            to={`/resource/${resource.title}`}
            key={resource._id}
            className="block bg-gray-800 hover:bg-gray-700 shadow-md mb-4 rounded-lg border-0 p-4 w-full mx-3"
          >
            <h3 className="text-white">{resource.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ResourcesList;