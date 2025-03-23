// app/components/DownloadResume.tsx

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AiOutlineDownload } from 'react-icons/ai';

const DownloadResume: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-4 right-4"
        >
            <a 
                href="/SaurabhTakle.pdf" 
                download="Saurabh_Takle_Resume.pdf"
                className="pointer-events-auto bg-transparent hover:bg-blue-600 text-white py-2 px-4 rounded-full flex items-center shadow-lg"
            >
                <AiOutlineDownload className="mr-2" size={20} />
                Resume
            </a>
        </motion.div>
    );
};

export default DownloadResume;
