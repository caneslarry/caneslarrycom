import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'LiveBTCNow',
    eyebrow: 'Real-time fintech',
    image: '/livebtcnow.png',
    description:
      'A focused Bitcoin intelligence product combining live market data, interactive price charts, and AI-assisted financial insights.',
    technologies: ['Next.js', 'Market APIs', 'AI'],
    href: 'https://livebtcnow.com',
  },
  {
    title: 'QuickMealPlan',
    eyebrow: 'AI consumer product',
    image: '/quickmealplan.png',
    description:
      'An AI-powered planning experience that turns preferences into practical menus, grocery lists, and nutrition guidance.',
    technologies: ['Generative AI', 'Product UX', 'Automation'],
    href: 'https://quickmealplan.com',
  },
  {
    title: 'Dealer Portal',
    eyebrow: 'Enterprise analytics',
    image: '/A_futuristic_AI-driven_dashboard_with_real-time_da.webp',
    description:
      'An AI-driven dealer workspace that makes complex financial and operational data clear, timely, and actionable.',
    technologies: ['React', 'GraphQL', 'Data Visualization'],
  },
  {
    title: 'Salesforce Learning Platform',
    eyebrow: 'EdTech and CRM',
    image: '/A_modern_learning_management_system_(LMS)_dashboar.webp',
    description:
      'A custom learning platform connecting course delivery, student progress, and Salesforce-powered operations.',
    technologies: ['Salesforce', 'LMS', 'Automation'],
  },
  {
    title: 'AdTech Intelligence',
    eyebrow: 'Marketing automation',
    image: '/A_high-tech_AdTech_platform_dashboard_with_AI-driv.webp',
    description:
      'A campaign intelligence platform connecting analytics, automation, and customer signals for better decisions.',
    technologies: ['Google Analytics', 'AI', 'Cloud'],
  },
  {
    title: 'ApparelMagic ERP',
    eyebrow: 'Commerce infrastructure',
    image: '/An_enterprise_ERP_software_dashboard_with_business.webp',
    description:
      'Enterprise workflows and integrations that help fashion businesses manage products, orders, and operations.',
    technologies: ['ERP', 'AWS', 'API Integrations'],
  },
];

export default function Projects() {
  const featured = projects.slice(0, 3);
  const additional = projects.slice(3);

  return (
    <section id="work" className="section-shell scroll-mt-20">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2 className="section-title">Engineering with business impact.</h2>
        </div>
        <p className="section-intro">
          A selection of products and platforms spanning AI, fintech, analytics,
          learning, and enterprise operations.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {featured.map((project, index) => (
          <article
            key={project.title}
            className={`project-card group ${index === 0 ? 'lg:col-span-2' : ''}`}
          >
            <div
              className={`relative overflow-hidden rounded-2xl bg-slate-900 ${
                index === 0 ? 'aspect-[16/9]' : 'aspect-[4/5]'
              }`}
            >
              <Image
                src={project.image}
                alt={`${project.title} product interface`}
                fill
                priority={index < 2}
                sizes={
                  index === 0
                    ? '(min-width: 1024px) 66vw, 100vw'
                    : '(min-width: 1024px) 33vw, 100vw'
                }
                className="object-cover transition duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="eyebrow mb-2">{project.eyebrow}</p>
                <div className="flex items-end justify-between gap-4">
                  <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                    {project.title}
                  </h3>
                  {project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${project.title}`}
                      className="icon-button shrink-0 bg-white/10"
                    >
                      <ArrowUpRight size={18} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="px-1 pb-2 pt-5">
              <p className="leading-7 text-slate-400">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span key={technology} className="tech-tag">
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {additional.map((project) => (
          <article key={project.title} className="glass-card p-6">
            <p className="eyebrow">{project.eyebrow}</p>
            <h3 className="font-display mt-3 text-xl font-bold text-white">
              {project.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              {project.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span key={technology} className="tech-tag">
                  {technology}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
