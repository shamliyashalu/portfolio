import React, { useState, useEffect } from 'react';
import './typing.css'; 

const Home = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prevStep) => (prevStep + 1) % 3); 
    }, 7000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <section id='home'>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12">
      <img 
        src="/Profile.jpeg"
        alt="Your Name"
        className="w-32 h-32 sm:w-40 sm:h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 rounded-full object-cover mb-6"
      />
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center">
        Welcome to My Portfolio
      </h1>
      <div className="text-center">
        <p className={`text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-4 ${step === 0 ? 'typing-container' : 'hidden'}`}>
          Hi, I'm <span className="font-bold text-white">Midhun T</span>.
        </p>
        <p className={`text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-4 ${step === 1 ? 'typing-container' : 'hidden'}`}>
          I'm a passionate Frontend Developer with experience in React, Redux, and Tailwind CSS.
        </p>
        <p className={`text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-4 ${step === 2 ? 'typing-container' : 'hidden'}`}>
          I'm a Freelancer.
        </p>
      </div>
      <a
        href="#projects"
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base md:text-lg transition duration-300"
      >
        View My Projects
      </a>
    </div>
    </section>
  );
};

export default Home;
