import React, { useState } from 'react';
import { FaSearch, FaCog, FaBell, FaUser } from 'react-icons/fa';

const Navbar = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className='flex justify-end mt-3'>
      <div className={`flex items-center rounded-[8px] border ${isFocused ? 'border-pink-600' : 'border-gray-400'} w-[330px]`}>
        <div className='flex items-center rounded-[8px] bg-[#F8F9FC] px-3 h-[40px]'>
          <FaSearch className='text-gray-600' />
        </div>
        <input 
          type='text' 
          className='bg-[#F8F9FC] h-[40px] outline-none pl-[10px] w-[300px] rounded-r-[8px] placeholder:text-[14px] leading-[20px] font-normal' 
          placeholder='Search for ...'
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>

      <div className='flex items-center space-x-8 ml-[50px] mr-[80px]'>
        <div className='cursor-pointer'>
          <FaUser className='text-gray-600 text-xl hover:text-pink-600 ' />
        </div>
        <div className='cursor-pointer'>
          <FaCog className='text-gray-600 text-xl hover:text-pink-600' />
        </div>
        <div className='cursor-pointer'>
          <FaBell className='text-gray-600 text-xl hover:text-pink-600' />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
