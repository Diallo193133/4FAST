import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar'; 

const Drink = () => {
  return (
    <div className="flex min-h-screen">
      <div className="w-[200px]">
        <Sidebar />
      </div>

      <div className="flex-1 p-6">
        <Navbar /> 
        <h1 className="text-2xl font-bold">Drink Page</h1>
      </div>
    </div>
  );
};

export default Drink;
