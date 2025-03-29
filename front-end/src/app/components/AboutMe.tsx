'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gray-800/95 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
            <div className="clearfix">

            </div>
            <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="float-left w-60 rounded-full overflow-hidden mr-4 mb-4 shape-img"
            >
                <Image 
                src="/images/profile.JPEG" 
                alt="Saurabh Takle"
                width={192}
                height={192}
                className="object-cover w-full h-full"
                />
            </motion.div>
            <motion.div 
            className="text-lg leading-relaxed mx-15 text-justify"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            >
                <p>
                    From the bustling streets of Mumbai to the vibrant tech scene in New York, my journey in technology has been both diverse and dynamic. I earned my Bachelor&apos;s in Computer Science from Mumbai University, where I laid the foundation for a career driven by curiosity and problem-solving. Early on, I dipped my toes into the professional world through two enriching internships—first as a Software Developer Intern, where I immersed myself in coding for 3 months, and then as a Data Analyst Intern for 9 months, unraveling the power of data to inform smart decisions.
                </p>
                <p className='mt-4'>
                    Eager to expand my horizons, I immediately pursued a Master&apos;s degree at Pace University in New York, where I delved deeper into advanced technologies and innovative methodologies. My passion for transforming raw data into actionable insights led me to a contract role as a Data Engineer, a position I held for 1 year and 5 months. In this role, I engineered robust data pipelines, streamlined ETL processes, and turned complex datasets into clear, impactful solutions.
                </p>
                <p className='mt-4'>
                    I&apos;m driven by a love for learning and a commitment to building technology that makes a difference. Whether I&apos;m writing code or exploring new tech trends, I&apos;m always looking for the next challenge to conquer.
                </p>
                
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
