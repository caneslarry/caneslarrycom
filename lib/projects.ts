export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  image: string;
  description: string;
  technologies: string[];
  href?: string;
  role: string;
  challenge: string;
  decision: string;
  outcome: string;
  signals: { value: string; label: string }[];
  architecture: { label: string; detail: string }[];
};

export const projects: Project[] = [
  {
    slug: 'john-maxwell-platform',
    title: 'John Maxwell Digital Platform',
    eyebrow: 'Enterprise platform and growth',
    image: '/A_leadership_training_and_coaching_dashboard_featu.webp',
    description:
      'A multi-year platform transformation connecting 20,000+ personalized client sites, learning experiences, marketing attribution, and Salesforce-powered operations.',
    technologies: ['C# / .NET', 'PHP', 'Salesforce', 'Cloud'],
    role: 'Lead applications architect · Director of technology',
    challenge:
      'A global leadership organization needed to serve thousands of independent professionals while connecting personalized web experiences, learning content, marketing journeys, and internal sales operations.',
    decision:
      'Build a replicated website and CMS platform around shared services, connect the customer journey to Salesforce, and progressively move infrastructure from physical servers to cloud-hosted systems.',
    outcome:
      'The platform supported more than 20,000 client sites, while the connected marketing system helped grow the opt-in audience from roughly 90,000 to more than 800,000.',
    signals: [
      { value: '20K+', label: 'Client sites supported' },
      { value: '8.9×', label: 'Audience growth' },
      { value: '8+ yrs', label: 'Platform leadership' },
    ],
    architecture: [
      { label: 'Audience', detail: 'Leadership professionals and prospects' },
      {
        label: 'Web + LMS',
        detail: 'Personalized sites, content, and learning',
      },
      {
        label: 'Attribution',
        detail: 'Email, social, and paid campaign journeys',
      },
      {
        label: 'Salesforce',
        detail: 'Connected sales and customer operations',
      },
    ],
  },
  {
    slug: 'agora-data-platform',
    title: 'Agora Data Dealer Platform',
    eyebrow: 'Fintech · Enterprise analytics',
    image: '/A_futuristic_AI-driven_dashboard_with_real-time_da.webp',
    description:
      'An AI-assisted dealer experience that turns complex financial and operational data into clear workflows, timely signals, and actionable decisions.',
    technologies: ['React', 'Next.js', 'GraphQL', 'AI'],
    role: 'Senior software engineer · Team lead',
    challenge:
      'Dealers needed to act on financial and operational information distributed across complex systems, while the engineering team needed a front-end foundation that could support a growing product surface.',
    decision:
      'Organize the experience around dealer decisions instead of source systems, establish GraphQL as the product-facing data contract, and build reusable Next.js patterns for dashboards and AI-assisted workflows.',
    outcome:
      'A more coherent dealer workspace and a stronger delivery foundation for expanding data-heavy product capabilities across the team.',
    signals: [
      { value: 'Lead', label: 'Engineering role' },
      { value: 'GraphQL', label: 'Product data layer' },
      { value: 'AI', label: 'Decision support' },
    ],
    architecture: [
      { label: 'Data sources', detail: 'Financial and operational systems' },
      { label: 'GraphQL', detail: 'Unified product-facing contracts' },
      { label: 'Next.js', detail: 'Reusable dealer workflows and dashboards' },
      { label: 'Decision layer', detail: 'AI-assisted context and action' },
    ],
  },
  {
    slug: 'model-b-platform',
    title: 'Model B Marketing Platform',
    eyebrow: 'Marketing technology · Product leadership',
    image: '/A_high-tech_AdTech_platform_dashboard_with_AI-driv.webp',
    description:
      'A connected marketing technology platform bringing analytics, customer engagement, automation, and cloud services into a clearer product and delivery system.',
    technologies: ['React', 'Analytics', 'AWS', 'Google Cloud'],
    role: 'Senior software engineer · Team lead',
    challenge:
      'Campaign performance and customer signals were spread across analytics, engagement, and cloud platforms, creating both product complexity and delivery friction for the team.',
    decision:
      'Treat integrations as a shared product capability, align the engineering team around reusable workflows, and connect customer signals through a consistent automation and analytics layer.',
    outcome:
      'A more connected marketing platform and an engineering practice better equipped to deliver cross-system product work with clarity.',
    signals: [
      { value: 'Lead', label: 'Engineering role' },
      { value: 'Multi-cloud', label: 'Delivery environment' },
      { value: '360°', label: 'Customer signals' },
    ],
    architecture: [
      { label: 'Signals', detail: 'Campaign and customer activity' },
      { label: 'Integrations', detail: 'Analytics and engagement platforms' },
      { label: 'Automation', detail: 'Shared marketing workflows' },
      { label: 'Product view', detail: 'Connected performance context' },
    ],
  },
  {
    slug: 'live-btc-now',
    title: 'LiveBTCNow',
    eyebrow: 'Side project · Real-time fintech',
    image: '/livebtcnow.png',
    description:
      'A focused Bitcoin intelligence product combining live market data, interactive price charts, and AI-assisted financial insights.',
    technologies: ['Next.js', 'Market APIs', 'AI'],
    href: 'http://ai-tools-dusky.vercel.app/btc-price',
    role: 'Independent product · Full-stack engineering',
    challenge:
      'Market data is abundant but fragmented. The product needed to turn constantly changing signals into an interface that feels immediate, trustworthy, and easy to scan.',
    decision:
      'Separate the live market-data layer from AI interpretation, then design around progressive disclosure.',
    outcome:
      'A focused decision-support experiment that makes live conditions and longer-term signals readable in one place.',
    signals: [
      { value: 'Live', label: 'Market data' },
      { value: 'AI', label: 'Context layer' },
      { value: '1 view', label: 'Decision surface' },
    ],
    architecture: [
      { label: 'Market APIs', detail: 'Normalized price and trend data' },
      { label: 'Next.js', detail: 'Rendering, orchestration, and UI' },
      { label: 'AI layer', detail: 'Contextual interpretation' },
      { label: 'Investor', detail: 'Clear, actionable market view' },
    ],
  },
  {
    slug: 'quick-meal-plan',
    title: 'QuickMealPlan',
    eyebrow: 'Side project · AI consumer product',
    image: '/quickmealplan.png',
    description:
      'An AI-powered planning experience that turns preferences into practical menus, grocery lists, and nutrition guidance.',
    technologies: ['Generative AI', 'Product UX', 'Automation'],
    href: 'https://ai-tools-dusky.vercel.app/meal-plan',
    role: 'Independent product · AI workflow · Full-stack engineering',
    challenge:
      'Capture real meal preferences without creating a long form or producing generic output.',
    decision:
      'Translate a small set of human-friendly choices into structured AI context and one coherent workflow.',
    outcome:
      'A consumer product experiment that turns an intention into a practical weekly plan.',
    signals: [
      { value: 'One flow', label: 'Plan to grocery list' },
      { value: 'Personal', label: 'Preference-aware' },
      { value: 'Useful', label: 'Actionable output' },
    ],
    architecture: [
      { label: 'Preferences', detail: 'Goals, tastes, and constraints' },
      { label: 'Prompt system', detail: 'Structured product context' },
      { label: 'Generation', detail: 'Meals, nutrition, and shopping' },
      { label: 'Household', detail: 'A plan ready to use' },
    ],
  },
  {
    slug: 'salesforce-learning-platform',
    title: 'Salesforce Learning Platform',
    eyebrow: 'EdTech and CRM',
    image: '/A_modern_learning_management_system_(LMS)_dashboar.webp',
    description:
      'A custom learning platform connecting course delivery, student progress, and Salesforce-powered operations.',
    technologies: ['Salesforce', 'LMS', 'Automation'],
    role: 'Technical lead',
    challenge: 'Connect learning delivery with CRM operations.',
    decision:
      'Treat Salesforce as an operational backbone while keeping the student experience focused.',
    outcome: 'Connected course progress and organizational workflows.',
    signals: [],
    architecture: [],
  },
  {
    slug: 'apparelmagic-erp',
    title: 'ApparelMagic ERP',
    eyebrow: 'Commerce infrastructure',
    image: '/An_enterprise_ERP_software_dashboard_with_business.webp',
    description:
      'Enterprise workflows and integrations that help fashion businesses manage products, orders, and operations.',
    technologies: ['ERP', 'AWS', 'API integrations'],
    role: 'Senior software engineer',
    challenge: 'Support interconnected commerce operations.',
    decision: 'Build dependable integrations around core ERP workflows.',
    outcome: 'More connected product, order, and operational systems.',
    signals: [],
    architecture: [],
  },
];

const bySlug = (slug: string) =>
  projects.find((project) => project.slug === slug)!;

export const featuredProjects = [
  bySlug('john-maxwell-platform'),
  bySlug('agora-data-platform'),
  bySlug('model-b-platform'),
];

export const sideProjects = [bySlug('live-btc-now'), bySlug('quick-meal-plan')];

export const additionalCareerProjects = projects.filter(
  (project) =>
    !featuredProjects.includes(project) && !sideProjects.includes(project)
);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
