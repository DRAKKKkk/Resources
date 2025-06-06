import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function ResourceDetail() {
  const { name } = useParams();
  const [resource, setResource] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/api/resources?name=${name}`)
      .then(res => setResource(res.data))
      .catch(err => console.log(err));
  }, [name]);

  const handleAddResource = () => {
    if (inputValue.trim() !== '') {
      axios.post('http://localhost:3000/api/resources', { title: inputValue })
        .then(res => {
          setInputValue('');
          // Optionally, redirect to the new resource's detail page:
          navigate(`/resource/${res.data.title}`);
        })
        .catch(err => console.log(err));
    }
  };

  if (!resource) return <div className="text-white text-center mt-10">Loading...</div>;

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-lg">
        <div className="bg-gray-800 shadow-md rounded-lg border-0 p-8 mt-10">
          <h2 className="text-3xl text-white mb-4 text-center">{resource.title}</h2>
          {/* Add more resource details here if you have them */}
          <div className="flex items-center mt-6">
            <input
              type="text"
              placeholder="Enter Resource"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              className="w-full px-3 py-2 border border-gray-600 rounded bg-gray-800 text-white focus:outline-none mr-4"
            />
            <button
              onClick={handleAddResource}
              className='bg-gray-600 hover:bg-gray-700 cursor-pointer text-white font-bold py-2 px-4 rounded'
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResourceDetail;