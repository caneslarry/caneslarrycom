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
    slug: 'live-btc-now',
    title: 'LiveBTCNow',
    eyebrow: 'Real-time fintech',
    image: '/livebtcnow.png',
    description:
      'A focused Bitcoin intelligence product combining live market data, interactive price charts, and AI-assisted financial insights.',
    technologies: ['Next.js', 'Market APIs', 'AI'],
    href: 'http://ai-tools-dusky.vercel.app/btc-price',
    role: 'Product strategy · Architecture · Full-stack engineering',
    challenge:
      'Market data is abundant but fragmented. The product needed to turn constantly changing signals into an interface that feels immediate, trustworthy, and easy to scan.',
    decision:
      'Separate the live market-data layer from AI interpretation, then design the interface around progressive disclosure: price first, context second, deeper analysis on demand.',
    outcome:
      'A fast, focused decision-support experience that makes live conditions and longer-term signals readable in one place.',
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
    eyebrow: 'AI consumer product',
    image: '/quickmealplan.png',
    description:
      'An AI-powered planning experience that turns preferences into practical menus, grocery lists, and nutrition guidance.',
    technologies: ['Generative AI', 'Product UX', 'Automation'],
    href: 'https://ai-tools-dusky.vercel.app/meal-plan',
    role: 'Product design · AI workflow · Full-stack engineering',
    challenge:
      'Meal planning has a deceptively large input space. The experience had to capture real preferences without becoming a long form or producing generic, impractical output.',
    decision:
      'Translate a small set of human-friendly choices into structured AI context, then return the plan, shopping needs, and nutrition guidance as one coherent workflow.',
    outcome:
      'A useful consumer experience that turns a vague intention—eat better this week—into a concrete plan someone can act on.',
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
    slug: 'dealer-portal',
    title: 'Dealer Portal',
    eyebrow: 'Enterprise analytics',
    image: '/A_futuristic_AI-driven_dashboard_with_real-time_da.webp',
    description:
      'An AI-driven dealer workspace that makes complex financial and operational data clear, timely, and actionable.',
    technologies: ['React', 'GraphQL', 'Data visualization'],
    role: 'Technical leadership · Front-end architecture · Data experience',
    challenge:
      'Operational and financial signals arrived from multiple systems, forcing dealers to reconcile context before they could make a useful decision.',
    decision:
      'Design a GraphQL-backed experience around dealer decisions rather than source systems, with a consistent visual language for health, risk, and opportunity.',
    outcome:
      'A unified workspace designed to reduce cognitive overhead and move teams from data collection toward timely action.',
    signals: [
      { value: 'Unified', label: 'Operational view' },
      { value: 'GraphQL', label: 'Data contract' },
      { value: 'AI', label: 'Decision support' },
    ],
    architecture: [
      { label: 'Source systems', detail: 'Financial and operational data' },
      { label: 'GraphQL', detail: 'Unified domain contract' },
      { label: 'React', detail: 'Decision-oriented workspace' },
      { label: 'Dealer', detail: 'Risk and opportunity in context' },
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
    slug: 'adtech-intelligence',
    title: 'AdTech Intelligence',
    eyebrow: 'Marketing automation',
    image: '/A_high-tech_AdTech_platform_dashboard_with_AI-driv.webp',
    description:
      'A campaign intelligence platform connecting analytics, automation, and customer signals for better decisions.',
    technologies: ['Google Analytics', 'AI', 'Cloud'],
    role: 'Engineering lead',
    challenge: 'Connect fragmented campaign signals.',
    decision:
      'Create a shared intelligence layer across analytics and automation.',
    outcome: 'A clearer view of campaign performance.',
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

export const featuredProjects = projects.slice(0, 3);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
