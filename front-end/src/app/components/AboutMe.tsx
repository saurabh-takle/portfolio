'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Highlight: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <span
        className="font-medium text-sky-300"
        style={{ textShadow: '0 0 10px rgba(56, 189, 248, 0.35)' }}
    >
        {children}
    </span>
);

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
                    I&apos;m a <Highlight>Data Engineer</Highlight> with 3+ years of experience building ETL pipelines and cloud data solutions across AWS, Azure, and GCP. My journey started in Mumbai, where I earned my Bachelor&apos;s in Computer Science from Vidyalankar Institute of Technology, and continued in New York, where I completed my Master&apos;s in Computer Science (Data Science concentration) at Pace University.
                </p>
                <p className='mt-4'>
                    Since then, I&apos;ve worked as a Data Engineer at AVSI Systems and The Home Depot, where I&apos;ve built data pipelines feeding NLP models, stood up a centralized <Highlight>MLflow</Highlight> model registry with drift detection using Evidently AI, automated end-to-end ML pipelines with Airflow and Kubernetes, and architected a <Highlight>Medallion-based data lake</Highlight> on AWS (Glue, S3) alongside automated BigQuery reporting on GCP. I&apos;m equally comfortable writing production-grade Python and SQL as I am designing the pipelines and infrastructure that keep data flowing reliably at scale.
                </p>
                <p className='mt-4'>
                    I&apos;m now based back in Mumbai, driven by a love for learning and a commitment to building technology that makes a difference. Whether I&apos;m writing code or exploring new tech trends, I&apos;m always looking for the next challenge to conquer.
                </p>
                
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
