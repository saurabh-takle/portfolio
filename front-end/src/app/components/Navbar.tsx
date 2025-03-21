// app/components/VerticalNavbar.tsx

'use client';

import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import { Link, Events } from 'react-scroll';

const Navbar: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>('home');

    const links = [
        { name: 'Home', href: 'home' },
        { name: 'Projects', href: 'projects' },
        { name: 'Feedback', href: 'feedback' }
    ];

    useEffect(() => {
        Events.scrollEvent.register('begin', () => {});
        Events.scrollEvent.register('end', () => {});

        const handleScroll = () => {
            const sections = links.map(link => document.getElementById(link.href));
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            sections.forEach((section, index) => {
                if (section) {
                    const rect = section.getBoundingClientRect();
                    const top = rect.top + window.scrollY;

                    if (scrollPosition >= top) {
                        setActiveSection(links[index].href);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-4 z-20"
        >
            {links.map((link) => (
                <Link
                    key={link.name}
                    to={link.href}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-100}
                    onSetActive={() => setActiveSection(link.href)}
                    className={`relative text-sm text-white cursor-pointer py-2 px-4 transition-all duration-300 
                        ${activeSection === link.href ? "text-blue-500 font-bold" : "hover:text-blue-400"}`}
                >
                    {activeSection === link.href && (
                        <motion.div
                            className="absolute inset-0 bg-blue-500 rounded-full blur-lg opacity-60"
                            layoutId="activeHighlight"
                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        />
                    )}
                    <span className="relative z-10">{link.name}</span>
                </Link>
            ))}
        </motion.div>
    );
};

export default Navbar;
