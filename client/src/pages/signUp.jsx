import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-toastify'


function SignUp() {
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(name, email, password);
        axios.post('http://localhost:3000/signup' , {name,email,password})
        .then(() => {toast.success('Form submitted successfully!');
          navigate('/login')
        })
        .catch(err => console.log(err));
    }

    return (
        <div className='min-h-screen flex items-center justify-center bg-black'>

      <form className='bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-xs' onSubmit={handleSubmit}>
        <h2 className='text-2xl text-white mb-6 text-center'>
          Sign-Up
        </h2>
        <input 
          type="name"
          placeholder="Name"
          className='w-full mb-4 px-3 py-2 border border-gray-600 rounded bg-gray-800 text-white focus:outline-none' 
          required
          onChange={(e) => setName(e.target.value)}
          />

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

          <button type="submit" className='w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none'>
            Sign Up
          </button>

          <p className="text-white mt-4 text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-500 hover:underline">
            Log In
          </Link>
          </p>

           {/* <Link to="/login"className="block mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded text-center focus:outline-none transition">
          Log In
        </Link>
           */}
      </form>
       

    </div>
    );
}

export default SignUp;
