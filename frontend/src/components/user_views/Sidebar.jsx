import React, { useState, useEffect } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaHome, FaHamburger, FaCocktail, FaIceCream, FaCog, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Hook pour obtenir l'URL actuelle
  const [active, setActive] = useState('');

  // Mettre à jour l'état "active" en fonction de l'URL actuelle
  useEffect(() => {
    const path = location.pathname; // Obtenir le chemin de l'URL actuelle
    if (path === '/food') {
      setActive('Food');
    } else if (path === '/drink') {
      setActive('Drink');
    } else if (path === '/dessert') {
      setActive('Dessert');
    } else if (path === '/') {
      setActive('Home');
    }
  }, [location]); // Dépend de "location" pour se mettre à jour lorsque l'URL change

  const handlePageClick = (page, path) => {
    setActive(page);
    navigate(path);
  };

  return (
    <div className="fixed h-screen w-[200px] bg-gray-100 shadow-2xl mt-6">
      <div
        className="flex flex-row items-center cursor-pointer space-x-1"
        onClick={() => handlePageClick('Home', '/')}
      >
        <div className="bg-pink-600 p-1 rounded-full mt-6 ml-8">
          <Bars3Icon className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-black mt-6">4FAST</h1>
      </div>
      <hr className="w-full h-[2px] mt-3 bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
      
      <ul className="space-y-4 mt-10 pl-6">
        <li
          className={`flex items-center space-x-2 cursor-pointer transform transition-all duration-300 ${active === 'Home' ? 'text-gray-900 bg-white rounded-lg px-2 py-2 shadow-lg font-bold scale-105' : 'hover:text-gray-400 hover:scale-105'}`}
          onClick={() => handlePageClick('Home', '/')}
        >
          <div className="bg-white p-2 rounded-lg shadow-md">
            <FaHome className={active === 'Home' ? 'text-pink-600 text-4xl' : 'text-gray-600 text-4xl'} />
          </div>
          <span className={active === 'Home' ? 'font-bold' : ''}>Home</span>
        </li>
        {/* Food */}
        <li
          className={`flex items-center space-x-2 cursor-pointer transform transition-all duration-300 ${active === 'Food' ? 'text-gray-900 bg-white rounded-lg px-2 py-2 shadow-lg font-bold scale-105' : 'hover:text-gray-400 hover:scale-105'}`}
          onClick={() => handlePageClick('Food', '/food')}
        >
          <div className="bg-white p-2 rounded-lg shadow-md">
            <FaHamburger className={active === 'Food' ? 'text-pink-600 text-4xl' : 'text-gray-600 text-4xl'} />
          </div>
          <span className={active === 'Food' ? 'font-bold' : ''}>Food</span>
        </li>
        {/* Drink */}
        <li
          className={`flex items-center space-x-2 cursor-pointer transform transition-all duration-300 ${active === 'Drink' ? 'text-gray-900 bg-white rounded-lg px-2 py-2 shadow-lg font-bold scale-105' : 'hover:text-gray-400 hover:scale-105'}`}
          onClick={() => handlePageClick('Drink', '/drink')}
        >
          <div className="bg-white p-2 rounded-lg shadow-md">
            <FaCocktail className={active === 'Drink' ? 'text-pink-600 text-4xl' : 'text-gray-600 text-4xl'} />
          </div>
          <span className={active === 'Drink' ? 'font-bold' : ''}>Drink</span>
        </li>
        {/* Dessert */}
        <li
          className={`flex items-center space-x-2 cursor-pointer transform transition-all duration-300 ${active === 'Dessert' ? 'text-gray-900 bg-white rounded-lg px-2 py-2 shadow-lg font-bold scale-105' : 'hover:text-gray-400 hover:scale-105'}`}
          onClick={() => handlePageClick('Dessert', '/dessert')}
        >
          <div className="bg-white p-2 rounded-lg shadow-md">
            <FaIceCream className={active === 'Dessert' ? 'text-pink-600 text-4xl' : 'text-gray-600 text-4xl'} />
          </div>
          <span className={active === 'Dessert' ? 'font-bold' : ''}>Dessert</span>
        </li>
      </ul>

      <div className="absolute bottom-10 w-full pl-6">
        <ul className="space-y-4">
          <li
            className={`flex items-center space-x-2 cursor-pointer transform transition-all duration-300 ${active === 'Settings' ? 'text-gray-900 bg-white rounded-lg px-2 py-2 shadow-lg font-bold scale-105' : 'hover:text-gray-400 hover:scale-105'}`}
            onClick={() => handlePageClick('Settings', '/settings')}
          >
            <div className="bg-white p-2 rounded-lg shadow-md">
              <FaCog className={active === 'Settings' ? 'text-pink-600 text-4xl' : 'text-gray-600 text-4xl'} />
            </div>
            <span className={active === 'Settings' ? 'font-bold' : ''}>Settings</span>
          </li>
          <li
            className={`flex items-center space-x-2 cursor-pointer transform transition-all duration-300 ${active === 'Logout' ? 'text-gray-900 bg-white rounded-lg px-2 py-2 shadow-lg font-bold scale-105' : 'hover:text-gray-400 hover:scale-105'}`}
            onClick={() => {
              setActive('Logout');
              console.log("User logged out.");
            }}
          >
            <div className="bg-white p-2 rounded-lg shadow-md">
              <FaSignOutAlt className={active === 'Logout' ? 'text-pink-600 text-4xl' : 'text-gray-600 text-4xl'} />
            </div>
            <span className={active === 'Logout' ? 'font-bold' : ''}>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
