// src/components/Projects.jsx
import React from 'react';
import galaxyRetailersImage from '../assets/Galaxy Retailers.png'; // Importing the image
import dataScienceImage from '../assets/Data Science.png';

const projectData = [
  {
    image: galaxyRetailersImage,  // Using the imported image
    title: 'Galaxy Retailers',
    description:
      'A dynamic ecommerce web project for smartphone retail business. It consisted of stock management, search feature, dynamic product display, add to cart functionality, order history, and many more.',
    link: 'https://github.com/Prajesh-Shrestha-Github/Dynamic-E-commerce-Web-Project-Galaxy-Retailers.git',
  },
  {
    image: dataScienceImage,  // Using the imported image
    title: 'Data Science',
    description:
      'The project utilizes Python in Jupyter Notebook to analyze dataset of salaries. Leveraged Python libraries such as NumPy, pandas, and Matplotlib for data manipulation and visualization tasks.',
    link: 'https://github.com/Prajesh-Shrestha-Github/Data-Science.git',
  },
  
];

const Projects = () => {
  return (
    <section className="p-8 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-8 text-indigo-600">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-2xl font-semibold text-blue-600">{project.title}</h3>
              <p className="text-gray-700 my-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline"
              >
                View More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
