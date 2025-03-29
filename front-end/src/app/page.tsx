// app/page.tsx

'use client';

import React from 'react';
import { motion } from 'framer-motion';

import AboutMe  from './components/AboutMe';
import Projects from './components/Projects';
import DownloadResume from './components/DownloadResume';
import Navbar from './components/Navbar';
import CanvasBG from './components/CanvasBG';
import FeedbackForm from './components/FeedbackForm';
import TypeAnimation from './components/TypeAnimation';

const Home: React.FC = () => {
    return (
        <div className="relative min-h-screen bg-transparent text-white">
            <CanvasBG/>
            <section className="fixed z-20">
                <DownloadResume />
            </section>

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
                    <h1 className="text-5xl font-bold mb-4">Hello, I&apos;m <span className='text-[#264653] bg-[#fdf6e3] rounded-2xl'>SAURABH TAKLE</span></h1>
                    <div className="text-xl mb-8">
                        <TypeAnimation
                            sentences={["A passionate DATA ENGINEER", "I love Turning Data into Decisions", "Machine Learning Engineer TO BE..."]}
                            colors={["#f5c156", "#e6616b", "#5cd3ad"]}
                            typingSpeed={100}
                            deletingSpeed={50}
                            delay={2000}
                        />
                    </div>
                    <div className="flex items-center justify-center gap-6 my-8">
                        <motion.a
                            href="https://www.linkedin.com/in/saurabhtakle/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            whileHover={{ scale: 1.2 }}
                            className="text-white hover:text-blue-500"
                        >
                            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.27h-3v-5.5c0-1.32-.03-3.02-1.84-3.02-1.84 0-2.12 1.44-2.12 2.92v5.6h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.55 2.84-1.55 3.04 0 3.6 2 3.6 4.6v5.59z"/>
                            </svg>
                        </motion.a>
                        <motion.a
                            href="https://github.com/saurabh-takle"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            whileHover={{ scale: 1.2 }}
                            className="text-white hover:text-gray-500"
                        >
                            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                            <path d="M12 0c-6.63 0-12 5.37-12 12 0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.724-4.033-1.415-4.033-1.415-.546-1.38-1.333-1.75-1.333-1.75-1.089-.745.083-.73.083-.73 1.205.085 1.838 1.235 1.838 1.235 1.07 1.835 2.807 1.305 3.492.997.107-.775.418-1.305.762-1.605-2.665-.3-5.467-1.335-5.467-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.98-.399 3-.405 1.02.006 2.043.139 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.823 1.102.823 2.222v3.293c0 .32.218.694.825.576 4.765-1.585 8.2-6.085 8.2-11.385 0-6.63-5.373-12-12-12z"/>
                            </svg>
                        </motion.a>
                        <motion.a
                            href="mailto:saurabh@example.com"
                            aria-label="Email"
                            whileHover={{ scale: 1.2 }}
                            className="text-white hover:text-red-500"
                        >
                            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                            <path d="M12 12.713l11.985-8.713v17h-23.97v-17l11.985 8.713zm11.985-10.713v.027l-11.985 8.717-11.985-8.717v-.027c0-1.115.892-2 1.985-2h19.99c1.092 0 1.985.885 1.985 2z"/>
                            </svg>
                        </motion.a>
                    </div>
                </motion.div>
            </section>
            

            {/* About Me */}
            <section id="about_me" className="px-8">
                <h2 className="text-4xl font-bold py-5 text-center sticky top-0 text-[#264653] bg-[#fdf6e3]">About Me</h2>
                <AboutMe />
            </section>

            {/* Projects */}
            <section id="projects" className="px-8">
                <h2 className="text-4xl font-bold py-5 text-center sticky top-0 text-[#264653] bg-[#fdf6e3]">Projects</h2>
                <Projects />
            </section>

            {/* Feedback */}
            <section id='feedback' className="px-8">
                <h2 className="text-4xl font-bold py-5 text-center sticky top-0 text-[#264653] bg-[#fdf6e3]">Contact US</h2>
                <FeedbackForm />
            </section>
        </div>
    );
};

export default Home;
