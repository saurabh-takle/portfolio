// app/components/ProjectCard.tsx

'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
    image: string;
    title: string;
    description: string;
    technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description, technologies }) => {
    return (
        <motion.div 
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg p-4 hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
        >
            {/* Project Image */}
            <div className="w-full h-48 overflow-hidden rounded-xl mb-4">
                <img src={image} alt={title} className="w-full h-full object-cover" />
            </div>

            {/* Project Title */}
            <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>

            {/* Project Description */}
            <p className="text-gray-400 mb-4">{description}</p>

            {/* Technologies Used */}
            <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                    <span key={index} className="text-sm bg-gray-700 text-white px-2 py-1 rounded-lg">
                        {tech}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

export default ProjectCard;
