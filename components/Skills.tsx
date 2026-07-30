import { Blocks, Cloud, Database, Users } from 'lucide-react';

const expertise = [
  {
    title: 'Product engineering',
    description:
      'End-to-end development for dependable, maintainable customer experiences.',
    icon: Blocks,
    skills: ['TypeScript', 'React', 'Next.js', 'Node.js', 'PHP', 'Python'],
  },
  {
    title: 'Cloud and delivery',
    description:
      'Infrastructure and delivery systems designed for speed without sacrificing stability.',
    icon: Cloud,
    skills: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'CI/CD', 'CircleCI'],
  },
  {
    title: 'Data and integrations',
    description:
      'APIs, event systems, and data layers that keep complex businesses connected.',
    icon: Database,
    skills: [
      'GraphQL',
      'Postgres',
      'MySQL',
      'RabbitMQ',
      'Salesforce',
      'REST APIs',
    ],
  },
  {
    title: 'Technical leadership',
    description:
      'Practical leadership that aligns architecture, delivery, and team growth.',
    icon: Users,
    skills: [
      'System Design',
      'Agile',
      'Mentoring',
      'Architecture',
      'Security',
      'Scrum',
    ],
  },
];

export default function Skills() {
  return (
    <section id="expertise" className="section-shell scroll-mt-20">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Core expertise</p>
          <h2 className="section-title">Broad range. Clear focus.</h2>
        </div>
        <p className="section-intro">
          I work across the stack, but the objective stays consistent: turn
          difficult technical problems into durable business outcomes.
        </p>
      </div>

      <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2">
        {expertise.map(({ title, description, icon: Icon, skills }) => (
          <article key={title} className="bg-slate-950/95 p-7 sm:p-9">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
              <Icon size={21} aria-hidden="true" />
            </div>
            <h3 className="font-display mt-6 text-2xl font-bold text-white">
              {title}
            </h3>
            <p className="mt-3 max-w-md leading-7 text-slate-400">
              {description}
            </p>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm font-medium text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
