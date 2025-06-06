import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
import axios from 'axios';

function LogIn() {
    // const[name, setName] = useState('');
        const[email, setEmail] = useState('');
        const[password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(name, email, password);
        axios.post('http://localhost:3000/login' , {email,password})
        .then((result ) => {console.log(result);
          if(result.data === "Success"){
            navigate('/home')
          }
            
        })
        .catch(err => console.log(err));
    }

    return (
        <div className='min-h-screen flex items-center justify-center bg-black'>
      <form className='bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-xs' onSubmit={handleSubmit}>
        <h2 className='text-2xl text-white mb-6 text-center'>
          Log-In
        </h2>
        {/* <input 
          type="text"
          placeholder="Name"
          className='w-full mb-4 px-3 py-2 border border-gray-600 rounded bg-gray-800 text-white focus:outline-none' 
          required
          /> */}

          <input 
          type="email"
          placeholder="Email"
          className='w-full mb-4 px-3 py-2 border border-gray-600 rounded bg-gray-800 text-white focus:outline-none' 
          required
          onChange={(e) => setEmail(e.target.value)}
          />

          <input 
          type="password"
          placeholder="Password"
          className='w-full mb-4 px-3 py-2 border border-gray-600 rounded bg-gray-800 text-white focus:outline-none' 
          required
          onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className='w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none' >
            Log-In
          </button>

          
      </form>

    </div>
    );
}

export default LogIn;
