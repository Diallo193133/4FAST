import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import acceuil from '../assets/acceuil.jpg'; // Assurez-vous que ce chemin est correct

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/food'); // Navigue vers la page Food
  };

  // Désactiver le défilement au chargement de la page
  useEffect(() => {
    // Empêche le scroll
    document.body.style.overflow = 'hidden';
    
    // Réactive le scroll si on quitte cette page
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="relative w-full h-screen">
      {/* Image en fond */}
      <img src={acceuil} alt="Acceuil" className="object-cover w-full h-full" />
      
      {/* Demi-cercle avec dégradé linéaire */}
      <div className="absolute bottom-0 left-0 w-full h-[800px] bg-gradient-to-t from-[#953F3F] to-[#2F1414] rounded-t-full transform translate-y-[500px]"></div>
      
      {/* Conteneur pour centrer le texte et le bouton */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-4xl font-bold mb-4 mt-[350px]">Are you hungry?</h1>
        
        {/* Lignes sous le texte */}
        <div className="flex justify-center items-center gap-4 mb-6">
          <div className="w-1/2 h-[5px] bg-white opacity-80"></div>
          <div className="w-10 h-[5px] bg-white opacity-40"></div>
          <div className="w-10 h-[5px] bg-white opacity-40"></div>
          <div className="w-10 h-[5px] bg-white opacity-40"></div>
        </div>

        {/* Bouton "Get Started" */}
        <div className="inline-block bg-black rounded-[25px] p-[2px]">
          <button
            onClick={handleGetStarted}
            className="px-6 py-2 text-black bg-white rounded-[25px] font-bold transition-colors duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#953F3F] hover:to-[#2F1414] hover:text-white"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
