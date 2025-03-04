'use client';

const skills = [
  'Python',
  'PHP',
  'JavaScript',
  'React',
  'MySQL',
  'Node.js',
  'C#',
  'Vue.js',
  'Angular',
  'Symfony',
  'Laravel',
  'PHP 8+',
  'Composer',
  'Postgres',
  'NoSQL',
  'CI/CD',
  'GitHub Actions',
  'CircleCI',
  'AWS',
  'Google Cloud',
  'Azure',
  'GraphQL',
  'RabbitMQ',
  'Jest',
  'Playwright',
  'SCSS',
  'TailwindCSS',
  'TypeScript',
  'Agile',
  'Scrum',
  'A/B Testing',
  'Unit Testing',
  'API Integrations',
  'System Architecture',
  'Debugging',
  'Performance Optimization',
  'Web Security',
  'Full-Stack Development',
  'UI/UX',
  'DevOps',
  'Docker',
  'Cloud Computing',
  'Microservices',
  'Next.js',
  'WordPress',
  'Salesforce Integration',
  'Vercel',
];

export default function Skills() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-4xl font-bold text-center m-8">My Skills</h2>
      <div className="flex flex-wrap justify-center gap-3 max-w-4xl">
        {skills.map((skill) => (
          <div
            key={skill}
            className="relative px-4 py-2 rounded-full text-sm font-semibold
                       bg-gray-800 text-white transition-all duration-300
                       hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500
                       hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
