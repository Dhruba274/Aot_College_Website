import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
// import axios from 'axios'
import aotLogo from "../assets/aotlogo.png";


function Register() {
    const [val ,setVal] = useState ( {
        name : '',
        email : '',
        password : '',
        phone : '',
        stream : '',
        roll : '',
        registration : '',

    })

    const handleInput = (event) => {
        setVal(prev => ({...prev,[event.target.name]:[event.target.value]}))
        // const name = event.target.name;
        // const value = event.target.value;
        // setVal(values => ({...values, [name]:value}))
    } 
    const navigate = useNavigate();

    // const handleSubmit = async(event) => {
    //     event.preventDefault();
    //     // console.log(val)
    //     axios.post('http://localhost:8081/register', val)
    //     .then(res => 
    //         {
    //             console.log(res);
    //             navigate('/dashboard')
    //         })
    //     .catch(err => console.log(err));
    // }
  return (
    <>
    <div className=' h-screen flex items-center justify-center flex-col'>
    <div className=' flex flex-col gap-5 justify-center items-center border-2 rounded-xl border-black bg-white p-5 mx-1 md:mx-0'>
        <img src={aotLogo} alt="aotlogo"  className='w-1/3'/>
        <div className=' font-semibold text-2xl font-[headline] uppercase'> Registration</div>
        <form onSubmit={handleSubmit} className=' flex flex-col justify-between items-center' >
            <div class="input-container">
              <input placeholder="Enter your Name" className="input-field form-control font-[para]" type="text" onChange={handleInput} required/>
              <label htmlFor="name" for="input-field" class="input-label">
                Name
              </label>
              <span class="input-highlight"></span>
            </div>
            <div class="input-container">
              <input placeholder="Enter your email" className="input-field form-control font-[para]" type="email" onChange={handleInput} required/>
              <label htmlFor="email" for="input-field" class="input-label">
                Email
              </label>
              <span class="input-highlight"></span>
            </div>
            <div class="input-container">
              <input placeholder="Enter your password" className="input-field form-control font-[para]" type="text" onChange={handleInput} required/>
              <label htmlFor="password" for="input-field" class="input-label">
                Your Password
              </label>
              <span class="input-highlight"></span>
            </div>
            <div class="input-container">
              <input placeholder="Enter your phone no." className="input-field form-control font-[para]" type="number" onChange={handleInput} required/>
              <label htmlFor='phone' for="input-field" class="input-label">
                Phone No.
              </label>
              <span class="input-highlight"></span>
            </div>
            <div class="input-container">
              <input placeholder="Enter your stream" className="input-field form-control font-[para]" type="text" onChange={handleInput} required/>
              <label htmlFor='stream' for="input-field" class="input-label">
                Stream
              </label>
              <span class="input-highlight"></span>
            </div>
            <div class="input-container">
              <input placeholder="Enter your roll no." className="input-field form-control font-[para]" type="number" onChange={handleInput} required/>
              <label htmlFor='roll' for="input-field" class="input-label">
                Roll no.
              </label>
              <span class="input-highlight"></span>
            </div>
            <div class="input-container">
              <input placeholder="Enter your registration no." className="input-field form-control font-[para]" type="number" onChange={handleInput} required/>
              <label htmlFor='regostration' for="input-field" class="input-label">
                Registration
              </label>
              <span class="input-highlight"></span>
            </div>
            
            <div className=' flex gap-3'>
        
            </div>

            <div className=' flex gap-3 flex-col'>
            <button type='submit' className='font-[para] border-2 rounded-lg border-black text-lg  px-6 py-2 bg-yellow-500 hover:bg-yellow-400 font-bold uppercase'>register</button>
           
            <h1 className='font-[para]'> Already have an account?<NavLink to={"/Signup"}> <button className='px-1 py-2 underline underline-offset-2 font-bold text-blue-600 hover:text-blue-800 active:text-blue-950 visited:text-violet-800'>LogIn here</button></NavLink> </h1>
   
            </div>
        </form>
        
    </div>
    <NavLink to={"/"}><button className='mt-4 px-6 py-2 bg-blue-900 hover:bg-blue-950 rounded-lg border-2 border-yellow-500 text-white font-[para]'>Go Home</button></NavLink>
    </div>
    </>
  )
}

export default Register




