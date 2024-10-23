import React, { useEffect, useState } from 'react';
import discordIcon from '../assets/discord.png';
import linkedinIcon from '../assets/linkedin-logo.png';
import instagramIcon from '../assets/instagram.png';
import { motion } from 'framer-motion';

const greetings = ["Hola", "Hello", "Konichiwa | こんにちは", "Namaste | नमस्ते",];
const HeroSection: React.FC = () => {
    const [displayedGreeting, setDisplayedGreeting] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);
    const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);

    useEffect(() => {
        const currentGreeting = greetings[currentGreetingIndex];
        const timeoutDuration = isDeleting ? 150 : 300;
        if (currentGreetingIndex === greetings.length - 1 && !isDeleting && charIndex === currentGreeting.length) {
            return;
        }

        const interval = setTimeout(() => {
            if (isDeleting) {
                setDisplayedGreeting(currentGreeting.substring(0, charIndex - 1));
                setCharIndex((prevIndex) => prevIndex - 1);

                if (charIndex === 0) {
                    setIsDeleting(false);
                    if (currentGreetingIndex < greetings.length - 1) {
                        setCurrentGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
                    }
                }
            } else {
                setDisplayedGreeting(currentGreeting.substring(0, charIndex + 1))
                setCharIndex((prevIndex) => prevIndex + 1);
                if (charIndex === currentGreeting.length) {
                    setIsDeleting(true);
                }
            }
        }, timeoutDuration);

        return () => clearTimeout(interval);
    }, [charIndex, isDeleting, currentGreetingIndex]);


    return (
        <section className="flex flex-col md:flex-row items-center justify-between py-10 px-4 md:px-32">
            <motion.div
            className='flex-1 mb-8 md:mb-0'
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <img
                    src="https://my-portfolio-rho-six-35.vercel.app/assets/profile.png"
                    alt="Vivek Paswan"
                    className="rounded-full w-48 md:w-64 h-auto object-cover mx-auto"
                />
            </motion.div>

            <div className="flex-1 text-center md:text-left">
                <motion.h1
                    className="text-4xl font-bold mb-4 h-12 text-lime-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {displayedGreeting}
                </motion.h1>
                <motion.h2
                    className="text-2xl font-semibold mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    My name is Vivek Paswan
                </motion.h2>
                <motion.p
                    className="px-8 md:px-0 md:text-lg text-gray-700"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                >
                    As a professional video editor, I specialize in crafting compelling visual narratives. With experience collaborating with clients across the globe, I deliver high-quality content tailored to enhance their unique stories
                </motion.p>
                <div className="mt-3 space-x-4">
                    <a className="inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" href="#">
                        <img className='shrink-0 size-6' src={instagramIcon} alt="Linkedin" />
                    </a>
                    <a className="inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" href="https://www.linkedin.com/in/vivek-paswan-433694289">
                        <img className='shrink-0 size-6' src={linkedinIcon} alt="Instagram" />
                    </a>
                    <a className="inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" href="#">
                        <img className='shrink-0 size-7' src={discordIcon} alt="Discord" />
                    </a>
                </div>
            </div>

        </section>
    );
};

export default HeroSection;