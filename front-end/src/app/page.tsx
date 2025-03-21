'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-5xl font-bold mb-4">Hello, I'm Saurabh Takle</h1>
                <p className="text-xl">Machine Learning | Data Engineering | Data Analysis</p>
            </motion.div>
        </div>
    );
};

export default Home;
