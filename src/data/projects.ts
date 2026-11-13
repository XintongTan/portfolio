export interface Project {
  slug: string;
  title: string;
  category: string;
  summary: string;
  theme: 'system' | 'tower' | 'portal';
  image: string;
  imageAlt: string;
  headline: string;
  role: string;
  focus: string;
  tools: string;
  overview: string;
  challenge: string;
  approach: { title: string; description: string }[];
  reflection: string;
}

// Placeholder case studies: replace with verified project details before using as final work samples.
export const projects: Project[] = [
  {
    slug: 'enterprise-design-system',
    title: 'Enterprise Design System',
    category: 'Design systems · UI engineering',
    summary: 'A shared visual language for complex products, built one thoughtful component at a time.',
    theme: 'system',
    image: 'design-system.svg',
    imageAlt: 'Illustrative design system board showing typography, color tokens, buttons, and a reusable form component.',
    headline: 'Consistency at every scale.',
    role: 'UI/UX Developer & UI Engineer',
    focus: 'Components, tokens, documentation',
    tools: 'React, TypeScript, CSS',
    overview: 'A concept for a practical design system that connects interface decisions with reusable React components. The goal is a cohesive foundation for enterprise applications, from everyday forms to dense data views.',
    challenge: 'Enterprise interfaces often evolve screen by screen. Small differences in spacing, inputs, and interaction patterns can add up to an inconsistent experience. This concept explores how a common foundation could make those decisions clearer.',
    approach: [
      { title: 'Start with the foundations', description: 'Define a small set of color, type, and spacing tokens with clear roles. Use semantic names so the intent stays understandable across screens.' },
      { title: 'Build for real UI states', description: 'Explore reusable inputs, buttons, and data patterns with loading, empty, error, and keyboard states considered alongside the default view.' },
      { title: 'Make the system usable', description: 'Pair components with concise usage guidance and examples so design and engineering can work from the same reference.' },
    ],
    reflection: 'The next step would be to validate the component patterns in real product workflows and document the tradeoffs. Final screenshots, implementation details, and measured outcomes will replace this sample narrative.',
  },
  {
    slug: 'wip-control-tower',
    title: 'WIP Control Tower',
    category: 'Enterprise SaaS · Workflow design',
    summary: 'Bringing clarity to work in progress with a focused, connected view of production.',
    theme: 'tower',
    image: 'control-tower.svg',
    imageAlt: 'Illustrative production dashboard with stage filters, a work-in-progress chart, and an order table.',
    headline: 'Complex workflows. A clearer view.',
    role: 'UI/UX Developer & UI Engineer',
    focus: 'Information architecture, workflows',
    tools: 'React, TypeScript, CSS',
    overview: 'A concept for a central workspace that helps teams understand work in progress. It brings production stages, order details, and next actions into a single interface designed for everyday operational decisions.',
    challenge: 'When production information is spread across screens, it becomes difficult to identify what needs attention. The design challenge is to surface the right context while keeping the interface readable and actionable.',
    approach: [
      { title: 'Understand the decision', description: 'Frame the page around practical questions: what is in progress, where is it now, and what needs attention next?' },
      { title: 'Create a useful hierarchy', description: 'Use a concise overview for orientation, filters for narrowing the scope, and a consistent table for deeper comparison.' },
      { title: 'Keep actions contextual', description: 'Explore stage changes and order details close to the relevant item, with clear feedback and recoverable states.' },
    ],
    reflection: 'A real case study would add workflow research, interaction examples, and validation with operations teams. The current dashboard is an illustrative placeholder, with no live production data or claimed results.',
  },
  {
    slug: 'b2b-customer-portal',
    title: 'B2B Customer Portal',
    category: 'Product design · Frontend development',
    summary: 'A considered self-service experience that makes business purchasing feel effortless.',
    theme: 'portal',
    image: 'customer-portal.svg',
    imageAlt: 'Illustrative customer portal with product photography placeholders, an order overview, and a product catalog.',
    headline: 'Business purchasing, made human.',
    role: 'UI/UX Developer & UI Engineer',
    focus: 'Self-service, responsive interfaces',
    tools: 'React, TypeScript, CSS',
    overview: 'A concept for a B2B customer portal that helps customers browse products and understand their orders. It explores how familiar shopping patterns can work alongside the practical needs of business purchasing.',
    challenge: 'Business customers need useful product information and clear order status without navigating a crowded interface. The challenge is to bring those needs together in a calm, approachable experience across screen sizes.',
    approach: [
      { title: 'Organize around customer tasks', description: 'Prioritize browsing, checking an order, and finding account information. Give each task a clear starting point.' },
      { title: 'Balance content and utility', description: 'Use a restrained visual system and readable product cards, with essential purchasing details available where they matter.' },
      { title: 'Design across screen sizes', description: 'Explore responsive navigation, adaptable product grids, and order summaries that remain understandable on smaller screens.' },
    ],
    reflection: 'Next steps would include customer feedback, accessibility checks on purchasing flows, and verified examples from the final product. All products and order details in this preview are fictional sample content.',
  },
];
