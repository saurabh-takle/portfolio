// app/page.tsx

'use client';

import React from 'react';
import { motion } from 'framer-motion';

import Projects from './components/Projects';
import DownloadResume from './components/DownloadResume';
import Navbar from './components/Navbar';
import CanvasBG from './components/CanvasBG';
import FeedbackForm from './components/FeedbackForm';

const Home: React.FC = () => {
    return (
        <div className="relative min-h-screen bg-transparent text-white">
            <CanvasBG/>
            <DownloadResume />

            <section className="fixed z-20">
                <Navbar />
            </section>

            {/* Viewing Area - Introduction */}
            <section id='home' className=" min-h-screen flex flex-col items-center justify-center">

                <motion.div
                    className="bg-gr sticky top-0"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl font-bold mb-4">Hello, I'm Saurabh Takle</h1>
                    <p className="text-xl mb-8">Machine Learning | Data Engineering | Data Analysis</p>
                </motion.div>
            </section>

            {/* Projects */}
            <section id="projects" className="p-8">
                <h2 className="text-4xl font-bold mb-6 text-center">Projects</h2>
                <Projects />
            </section>

            {/* Feedback */}
            <section id='feedback' className="p-8">
                <h2 className="text-4xl font-bold mb-6 text-center">Contact US</h2>
                <FeedbackForm />
            </section>
        </div>
    );
};

export default Home;
