// app/components/FeedbackForm.tsx

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FeedbackForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        
        // Reset the form
        setFormData({
            name: '',
            email: '',
            message: ''
        });
        
        alert('Feedback submitted successfully!');
    };

    return (
        <motion.div 
            className="p-8 bg-gray-800 rounded-2xl shadow-lg max-w-xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="text-3xl font-bold text-white mb-4">Contact Me</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="p-3 bg-gray-700 text-white rounded-lg focus:outline-none"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="p-3 bg-gray-700 text-white rounded-lg focus:outline-none"
                    required
                />
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    className="p-3 bg-gray-700 text-white rounded-lg focus:outline-none h-32"
                    required
                ></textarea>
                <button 
                    type="submit"
                    className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Submit
                </button>
            </form>
        </motion.div>
    );
};

export default FeedbackForm;
