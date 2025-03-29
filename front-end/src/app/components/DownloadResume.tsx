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
            <motion.a 
                href="/SaurabhTakle.pdf" 
                download="Saurabh_Takle_Resume.pdf"
                className="pointer-events-auto bg-[url('/brush.svg')] text-[#171717] py-2 px-4 rounded-full flex items-center"
                whileHover={{ scale: 1.15 }}
            >
                <AiOutlineDownload className="mr-2" size={20} />
                Resume
            </motion.a>
            
        </motion.div>
        
    );
};

export default DownloadResume;
