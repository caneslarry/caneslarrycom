'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const roles = [
  'Full-Stack Developer',
  'Senior Software Engineer',
  'Web Developer',
  'DevOps Engineer',
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold"
      >
        Hi, I'm <span className="text-blue-500">Larry Hussey</span>
      </motion.h1>
      <motion.h2
        key={index}
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl mt-4"
      >
        {roles[index]}
      </motion.h2>
    </div>
  );
}
