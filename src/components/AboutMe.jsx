// src/components/AboutMe.jsx
import React from 'react';
import { motion } from 'framer-motion';
import profilePhoto from '../assets/profile.jpg';
import reactIcon from '../assets/react-icon.png'; 
import tailwindIcon from '../assets/tailwind-icon.png';
import githubIcon from '../assets/github-icon.png';

function AboutMe() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="bg-white p-10 md:p-16 rounded-2xl shadow-2xl max-w-4xl mx-4 flex flex-col md:flex-row items-center text-center md:text-left"
      >
        {/* Photo Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full md:w-1/3 mb-6 md:mb-0 md:mr-10 flex-shrink-0"
        >
          <img
            src={profilePhoto}
            alt="Prajesh"
            className="w-full h-full max-h-64 md:max-h-80 rounded-xl object-cover shadow-lg"
          />
        </motion.div>

        {/* Description Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-xl"
        >
          <h2 className="text-5xl font-extrabold mb-6 text-gray-800">About Me</h2>
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            Hi, I’m <span className="text-4xl font-bold text-gray-800">Prajesh</span>! I am a passionate frontend developer with experience in <span className="text-2xl font-semibold text-green-600">React, Tailwind CSS</span>, and modern web development tools. I love creating visually appealing, user-friendly websites and applications. I am constantly learning and eager to take on new challenges.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed">
            My goal is to build accessible and performant web experiences that make a difference. Let’s connect and create something amazing together!
          </p>
        </motion.div>
      </motion.div>

        
    </section>
    
    
  );
}

export default AboutMe;
