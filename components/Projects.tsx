'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: 'Dealer Portal - AI Dashboard',
    category: 'AI & Data Visualization',
    image: '/A_futuristic_AI-driven_dashboard_with_real-time_da.webp',
    description:
      'An AI-driven dashboard with real-time data visualizations, financial graphs, and interactive analytics.',
  },
  {
    title: 'WDG - LMS with Salesforce',
    category: 'EdTech & CRM',
    image: '/A_modern_learning_management_system_(LMS)_dashboar.webp',
    description:
      'A custom LMS integrated with Salesforce, enabling course management, student tracking, and automation.',
  },
  {
    title: 'Model B - AdTech AI',
    category: 'Marketing & Automation',
    image: '/A_high-tech_AdTech_platform_dashboard_with_AI-driv.webp',
    description:
      'An AI-powered AdTech platform integrating marketing automation, Google Analytics, and campaign tracking.',
  },
  {
    title: 'ApparelMagic - ERP System',
    category: 'E-Commerce & Cloud',
    image: '/An_enterprise_ERP_software_dashboard_with_business.webp',
    description:
      'An enterprise ERP solution integrating Amazon S3, Google Calendar, and automation tools for business management.',
  },
  {
    title: 'John Maxwell Team - Leadership LMS',
    category: 'Coaching & CRM',
    image: '/A_leadership_training_and_coaching_dashboard_featu.webp',
    description:
      'A leadership training and coaching platform with CMS, Salesforce CRM, and email marketing automation.',
  },
  {
    title: 'NewsMax - E-Commerce & Marketing',
    category: 'E-Commerce & Customer Engagement',
    image: '/A_dynamic_eCommerce_and_marketing_platform_with_in.webp',
    description:
      'An eCommerce and marketing analytics platform integrating customer insights and sales tracking.',
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  return (
    <div className="p-6">
      <h2 className="text-4xl font-bold text-center m-8">My Experience</h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            whileHover={{ scale: 1.05 }}
            className="relative p-6 bg-gray-200 dark:bg-gray-800 rounded-lg text-center overflow-hidden"
            onMouseEnter={() => setActiveProject(project.title)}
            onMouseLeave={() => setActiveProject(null)}
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg w-full h-40 object-cover"
            />

            {/* Project Title */}
            <h3 className="mt-3 text-xl font-semibold">{project.title}</h3>

            {/* Hover Modal */}
            <AnimatePresence>
              {activeProject === project.title && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-90 text-white p-4 transition-all duration-300 rounded-lg"
                >
                  <p className="text-sm">{project.description}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
