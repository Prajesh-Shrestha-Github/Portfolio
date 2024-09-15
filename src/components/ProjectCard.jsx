import React from 'react';

function ProjectCard({ image, title, description, link }) {
    return (
        <div className="bg-black shadow-md p-4 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <img
                src={image}
                alt={title}
                className="rounded-t-lg w-full h-48 object-cover transition-transform duration-300"
            />
            <h3 className="mt-2 text-xl font-semibold">{title}</h3>
            <p className="mt-1 text-gray-600">{description}</p>
            <a href={link} className="mt-3 inline-block text-blue-500 hover:underline">View More</a>
        </div>
    );
}

export default ProjectCard;
