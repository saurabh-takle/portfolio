'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
}

const projectList: Project[] = [
    { 
        id: 1, 
        title: "Personalized Product Recommendation System", 
        description: "A recommendation system built with collaborative filtering using the Amazon Fine Food Reviews dataset.",
        image: "/images/project1.jpg",
        technologies: ["Python", "Collaborative Filtering", "Pandas", "NumPy", "Scikit-Learn"]
    },
    { 
        id: 2, 
        title: "Finger Joint Detection for Osteoarthritis Analysis", 
        description: "X-ray image processing using YOLO for osteoarthritis analysis.",
        image: "/images/project2.jpg",
        technologies: ["Python", "YOLO", "Image Processing", "MATLAB", "Deep Learning"]
    },
    { 
        id: 3, 
        title: "Data Analysis Pipeline", 
        description: "End-to-end data pipeline for analyzing healthcare datasets.",
        image: "/images/project3.jpg",
        technologies: ["Python", "ETL", "SQL", "Data Visualization", "Pandas"]
    }
];

const Projects: React.FC = () => {
    return (
        <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectList.map((project) => (
                    <motion.div
                        key={project.id}
                        className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <ProjectCard
                            image={project.image}
                            title={project.title}
                            description={project.description}
                            technologies={project.technologies}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
