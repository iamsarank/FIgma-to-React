import React from 'react'
import LeftImage from '../assets/images/lg-page-left.png';
import RightBg from '../assets/images/transparent-bg.png';

function Login() {
  return (
    <div className='flex h-screen '>
        <div className='flex'> 
            <img src={LeftImage} alt="Left Background" className='w-full h-full object-contain'/>
        </div>
        <div className='flex-1 bg-grey-50 flex items-center justify-center p-8'>
           {/* <img src={RightBg} alt="Right Background" className='w-full h-full object-contain'/> */}
           <div className='w-full max-w-md'>
            <div className='text-center mb-8'>
                <p className='text-sm mb-2 text-gray-600 tracking-widest'>WELCOME BACK TO</p>
                <h1 className='text-4xl font-bold text-gray-900 tracking-widest'>GOLDIONAIRE</h1>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Login