import React, { useState } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

function Home() {
  const[inputValue, setInputValue] = useState('');
  const[resources, setResources] = useState([]);

  const handleAddResource = () => {
    if (inputValue.trim() !== '') {
      axios.post('http://localhost:3000/api/resources', { title: inputValue })
        .then(res => {
          setResources(prev => [...prev, res.data]); // Add new resource to state
          setInputValue('');
        })
        .catch(err => console.log(err));
    }
  };
   useEffect(() => {
    axios.get('http://localhost:3000/api/resources')
      .then(res => setResources(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <div className='bg-gray-900 '>
        <h2 className='text-2xl text-white mb-6 text-center py-6'>Resources</h2>
        <div className='min-h-screen flex items-center flex-col w-fully'>
            <div className='flex items-start justify-between bg-gray-900 p-8 m-4 rounded-lg shadow-md w-full max-w-lg border-amber-950'>
              <input type="text"
               placeholder='Enter Resource' 
               value={inputValue}
               onChange={handleInputChange}
               className='w-full mb-4 px-3 py-2 border border-gray-600 rounded bg-gray-800 text-white hover:bg-gray-700 focus:outline-none mx-5' 
               />
              <button 
              onClick={handleAddResource}
              className='bg-gray-800 hover:bg-gray-700 cursor-pointer text-white font-bold py-2 px-4 rounded'>Add</button>
            </div>
            <div className='mt-4 flex items-center justify-between'>
                {resources.map((resources) => (
                    <Link to={`/resource/${resources.title}`}
                    key = {resources.id}
                    className='bg-gray-800 hover:bg-gray-700 shadow-md mb-4 rounded-lg border-0 p-4 w-full mx-3'>
                      <h3 className='text-white'>{resources.title}</h3>
                    </Link>
                ))}
            </div>
        </div>
    </div>
    
  );
}

export default Home;