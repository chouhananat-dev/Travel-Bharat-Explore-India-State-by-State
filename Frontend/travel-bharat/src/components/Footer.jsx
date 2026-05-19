import React from 'react'
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from 'react-router-dom';
export const Footer = () => {
  return (
    <div id='footer' className='bg-cover bg-center w-full lg:h-140' style={{backgroundImage:"url('https://res.cloudinary.com/degxzalkz/image/upload/v1778934050/photo-1602491453318-dcdf64966d7d_g4ssqa.jpg')"}}>
        <div className='w-full h-full bg-red-950/50 flex flex-row items-center'>
        <div className='h-full flex flex-col gap-5 p-5 md:gap-8'>
            <div>
                <h1 class='text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-[#FF9933] via-white to-[#138808]  inline-block md:text-4xl'>Travel</h1>
                <h1 class='text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-[#FF9933] via-white to-[#138808] inline-block ml-2 md:ml-4 md:text-4xl italic'>Bharat</h1>
            </div>
            <p className='text-gray-300 italic'>"Discover the soul of India, from historic marvels to modern pathways."</p>
            <p class='text-gray-400 text-sm mt-2'>© 2026 TravelBharat. All rights reserved.</p>
            <div>
                <GitHubIcon className='text-gray-400 hover:text-gray-200 transition duration-300 cursor-pointer w-10'/>
                <XIcon className='text-gray-400 hover:text-gray-200 transition duration-300 cursor-pointer ml-5' fontSize='large'/>  
                <LinkedInIcon className='text-gray-400 hover:text-gray-200 transition duration-300 cursor-pointer ml-5' fontSize='large'/>
            </div>
            <h1 className='text-xl text-white'>Contact us</h1>
            <p className='text-gray-300'>Email: info@travelbharat.com</p>
            <p className='text-gray-300'>Phone: +91 12345 67890</p>
            <p className='text-gray-300'>Address: 123, Main Street, New Delhi, India</p>
        </div>
        <div className='flex flex-col md:flex-row gap-10 md:gap-20 lg:gap-40 mt-10 mr-10 ml-auto mb-auto'>
        <div>
            <h1 className='text-2xl text-white mb-5'>Explore States</h1>
            <Link to='/states' state='Madhya Pradesh' className='text-gray-300 hover:text-white transition duration-300 hover:underline'>Madhya Pradesh</Link>
            <br/>
            <Link to='/states' state='Rajasthan' className='text-gray-300 hover:text-white transition duration-300 hover:underline'>Rajasthan</Link>
            <br/>
            <Link to='/states' state='Delhi' className='text-gray-300 hover:text-white transition duration-300 hover:underline'>Delhi</Link>
            <br/>
            <Link to='/states' state='Uttar Pradesh' className='text-gray-300 hover:text-white transition duration-300 hover:underline'>Uttar Pradesh</Link>
            <br/>
            <Link to='/states' state='Tamil Nadu' className='text-gray-300 hover:text-white transition duration-300 hover:underline'>Tamil Nadu</Link>
        </div>
        <div>
            <Link to='/states' className='text-gray-300 hover:text-white transition duration-300 hover:underline mb-5'><TravelExploreIcon /> Explore India</Link>
            <br/>
            <Link to='/admin/login' className='text-gray-300 hover:text-white transition duration-300 hover:underline'><LoginIcon /> Admin Login</Link>
        </div>
        </div>
    </div>
    </div>
  )
}
