export const projects = [
  {
    title: 'CRM Lite',
    slug: 'crm-lite',
    category: 'Full Stack System',
    group: 'Project',
    image: `${import.meta.env.BASE_URL}images/crm-lite.png`,
    description: 'A CRM dashboard with leads, opportunities, user roles, status tracking, and analytics.',
    longDescription: 'A full-stack CRM case study built to showcase real business workflows. It includes lead management, opportunity conversion, user role handling, dashboard widgets, and structured CRUD screens that make the project feel like a real internal business application.',
    stack: ['Laravel', 'MySQL', 'Bootstrap'],
    metrics: ['Lead Management', 'Opportunity Pipeline', 'Role Access', 'Dashboard Analytics'],
    github: 'https://github.com/cjae-dev/crm-lite'
  },
  {
    title: 'Smart CTA Banner',
    slug: 'smart-cta-banner',
    category: 'WordPress Plugin',
    group: 'Project',
    image: `${import.meta.env.BASE_URL}images/smart-cta-banner.png`,
    description: 'A marketing banner plugin with sticky CTA placement, scroll triggers, and timing controls.',
    longDescription: 'A WordPress plugin created for landing pages and marketing websites. It lets admins configure sticky banners, CTA labels, links, timing rules, and scroll-based display behavior without editing theme files.',
    stack: ['PHP', 'WordPress', 'JavaScript'],
    metrics: ['Sticky Banner', 'CTA Button', 'Trigger Rules', 'Admin Settings'],
    github: 'https://github.com/cjae-dev/smart-cta-banner'
  },
  {
    title: 'Smart Popup Builder',
    slug: 'smart-popup-builder',
    category: 'WordPress Plugin',
    group: 'Project',
    image: `${import.meta.env.BASE_URL}images/smart-popup-builder.png`,
    description: 'A popup management plugin for campaigns, offers, announcements, and lead capture sections.',
    longDescription: 'A lightweight campaign popup plugin for WordPress. It focuses on reusable popup content, frontend display logic, delay triggers, admin form settings, and clean visitor-facing UI.',
    stack: ['PHP', 'WordPress', 'jQuery'],
    metrics: ['Popup Editor', 'Delay Trigger', 'Campaign UI', 'Reusable Settings'],
    github: 'https://github.com/cjae-dev/smart-popup-builder'
  },
  {
    title: 'Smart Testimonial Slider',
    slug: 'smart-testimonial-slider',
    category: 'WordPress Plugin',
    group: 'Project',
    image: `${import.meta.env.BASE_URL}images/smart-testimonial-slider.png`,
    description: 'A testimonial slider plugin with admin-controlled entries, ratings, avatars, and frontend display.',
    longDescription: 'A testimonial slider plugin designed for business websites. It includes admin-controlled testimonial entries, rating display, frontend slider layout, and shortcode-style usage for easy placement.',
    stack: ['PHP', 'WordPress', 'CSS'],
    metrics: ['Slider UI', 'Admin Form', 'Shortcode', 'Ratings'],
    github: 'https://github.com/cjae-dev/smart-testimonial-slider'
  },
  {
    title: 'Smart Dynamic Pricing Rules',
    slug: 'smart-dynamic-pricing',
    category: 'WordPress Plugin',
    group: 'Project',
    image: `${import.meta.env.BASE_URL}images/woocom-dynamic-pricing.png`,
    description: 'A WooCommerce dynamic pricing plugin with bulk discounts, role-based pricing, BOGO rules, cart conditions, and analytics.',
    longDescription: 'A WooCommerce extension for creating flexible pricing rules without editing code. It supports percentage and fixed discounts, fixed product pricing, Buy X Get Y promotions, customer-role pricing, quantity and cart-total conditions, rule priority and stacking, date-based campaigns, admin-side simulation, discount analytics, REST API access, and HPOS compatibility.',
    stack: ['PHP', 'WordPress', 'WooCommerce', 'JavaScript', 'CSS', 'REST API'],
    metrics: ['Dynamic Pricing', 'BOGO Rules', 'Role Pricing', 'Analytics', 'HPOS'],
    github: 'https://github.com/cjae-dev/woocom-dynamic-pricing'
  },
  {
  title: 'Systems Architect WordPress Theme',
  slug: 'systems-architect-theme',
  category: 'WordPress Theme',
  group: 'Project',
  image: `${import.meta.env.BASE_URL}images/systems-architect-theme.png`,
  description: 'A custom WordPress portfolio theme designed with a technical dashboard and IDE-inspired interface for showcasing full-stack development projects.',
  longDescription: 'A fully custom WordPress theme built for developers who want to present projects like technical systems rather than traditional portfolio entries. It includes a dark dashboard-inspired UI, custom project and case study post types, tech stack and project category taxonomies, editable homepage sections, AJAX project filtering, GitHub REST API integration, custom Gutenberg blocks, ACF-ready project fields and theme settings, responsive layouts, SEO-friendly schema markup, and reusable PHP components.',
  stack: ['PHP', 'WordPress', 'JavaScript', 'CSS', 'ACF', 'REST API', 'AJAX', 'Gutenberg'],
  metrics: [
    'Custom Theme',
    'Custom Post Types',
    'AJAX Filtering',
    'GitHub API',
    'Gutenberg Blocks',
    'ACF Integration'
  ],
  github: 'https://github.com/cjae-dev/systems-architect-theme'
},
{
  title: 'Plan This',
  slug: 'plan-this',
  category: 'React Web Application',
  group: 'Project',
  image: `${import.meta.env.BASE_URL}images/plan-this.png`,
  description: 'A recipe discovery and weekly meal-planning application with recipe search, favorites, drag-and-drop planning, and shopping-list generation.',
  longDescription: 'A React and TypeScript meal-planning application built around the Spoonacular API. Users can search and filter recipes, view ingredients and nutrition details, save favorites, and organize meals across a Monday-to-Sunday planner using drag-and-drop. Favorites and meal plans are persisted with localStorage, while TanStack Query manages API caching, loading states, errors, and request cancellation. The application also generates a shopping list by aggregating ingredients from planned meals and includes responsive layouts, dark mode, form validation, reusable components, and unit tests for core planner and data-transformation logic.',
  stack: [
    'React',
    'TypeScript',
    'Vite',
    'Tailwind CSS',
    'TanStack Query',
    'React Router',
    'dnd-kit',
    'Zod',
    'Vitest',
    'Spoonacular API'
  ],
  metrics: [
    'Recipe Search',
    'API Integration',
    'Drag & Drop',
    'Meal Planner',
    'Favorites',
    'Shopping List'
  ],
  github: 'https://github.com/cjae-dev/plan-this'
},
{
  title: 'Ledger',
  slug: 'ledger-expense-tracker',
  category: 'React Web Application',
  group: 'Project',
  image: `${import.meta.env.BASE_URL}images/ledger-expense-tracker.png`,
  description: 'A ledger-inspired expense and budget tracker for managing transactions, monitoring monthly spending, and visualizing financial trends.',
  longDescription: 'A React and TypeScript personal finance application designed around a ledger-style interface. Users can add, edit, delete, search, and filter income and expense transactions, manage spending categories, set monthly category budgets, and review income, expenses, and net balance by month. Financial summaries, category breakdowns, spending trends, and budget progress are derived directly from transaction data and update automatically whenever records change. The application includes interactive Recharts visualizations, localStorage persistence, responsive layouts, reusable components, tabular currency formatting, animated summary values, and unit-tested financial calculation utilities.',
  stack: [
    'React',
    'TypeScript',
    'Vite',
    'Tailwind CSS',
    'Recharts',
    'React Router',
    'Context API',
    'useReducer',
    'date-fns',
    'Vitest'
  ],
  metrics: [
    'Transaction CRUD',
    'Budget Tracking',
    'Data Visualization',
    'Spending Analytics',
    'Category Management',
    'Local Persistence'
  ],
  github: 'https://github.com/cjae-dev/ledger-expense-tracker'
},
{
  title: 'Foreman',
  slug: 'foreman-project-manager',
  category: 'Laravel Web Application',
  group: 'Project',
  image: `${import.meta.env.BASE_URL}images/foreman-project-manager.png`,
  description: 'A multi-tenant project management application for organizations to manage teams, projects, tasks, roles, and workflows with secure data isolation.',
  longDescription: 'A Laravel 12 multi-tenant project management application designed around secure organization-based data isolation. Users can create and switch between organizations, invite team members, assign Admin, Member, and Viewer roles, manage projects, create and assign tasks, track due dates, priorities, and task statuses, and monitor team activity from an organization-specific dashboard. The application uses Laravel Policies and Gates to enforce authorization, global organization scopes to prevent cross-tenant data access, queued notifications for invitations and task assignments, activity logging for important changes, realistic demo data, responsive Blade and Tailwind CSS interfaces, and feature tests covering tenancy isolation and role-based permissions.',
  stack: [
    'Laravel 12',
    'PHP',
    'Blade',
    'Tailwind CSS',
    'Alpine.js',
    'MariaDB',
    'Laravel Policies',
    'Laravel Queues',
    'Eloquent ORM',
    'Pest'
  ],
  metrics: [
    'Multi-Tenancy',
    'Role-Based Access',
    'Project & Task Management',
    'Team Invitations',
    'Activity Logging',
    'Queued Notifications'
  ],
  github: 'YOUR_FOREMAN_GITHUB_URL'
},
  // {
  //   title: 'OOm Institute Workflows',
  //   slug: 'oom-institute-workflows',
  //   category: 'Business Systems',
  //   group: 'Project',
  //   image: `${import.meta.env.BASE_URL}images/oom.png`,
  //   description: 'Workflow-focused interfaces for operational systems, reports, registrations, and tracking.',
  //   longDescription: 'A business workflow showcase based on CRM-style modules such as registrations, attendance, reports, course schedules, and automation. The focus is on complex data handling and practical operational use cases.',
  //   stack: ['PHP', 'MySQL', 'AJAX'],
  //   metrics: ['Reports', 'Automation', 'Dashboards', 'Workflow Tracking'],
  //   github: 'https://github.com/cjae-dev'
  // },
  {
    group: 'Landing Page',
    image: `${import.meta.env.BASE_URL}images/adcos.png`,
    metrics: ['Responsive UI', 'Hover Preview', 'Modern Layout']
  },
  {
    group: 'Landing Page',
    image: `${import.meta.env.BASE_URL}images/curtains.png`,
    metrics: ['Responsive UI', 'Hover Preview', 'Modern Layout']
  },
  {
    group: 'Landing Page',
    image: `${import.meta.env.BASE_URL}images/fionboon.png`,
    metrics: ['Responsive UI', 'Hover Preview', 'Modern Layout']
  },
  {
    group: 'Landing Page',
    image: `${import.meta.env.BASE_URL}images/hertz.png`,
    metrics: ['Responsive UI', 'Hover Preview', 'Modern Layout']
  },
  {
    group: 'Landing Page',
    image: `${import.meta.env.BASE_URL}images/inplex.png`,
    metrics: ['Responsive UI', 'Hover Preview', 'Modern Layout']
  },
  {
    group: 'Landing Page',
    image: `${import.meta.env.BASE_URL}images/little-seeds.png`,
    metrics: ['Responsive UI', 'Hover Preview', 'Modern Layout']
  },
  {
    group: 'Landing Page',
    image: `${import.meta.env.BASE_URL}images/renosdoor.png`,
    metrics: ['Responsive UI', 'Hover Preview', 'Modern Layout']
  },
  {
    group: 'Landing Page',
    image: `${import.meta.env.BASE_URL}images/ridpest.png`,
    metrics: ['Responsive UI', 'Hover Preview', 'Modern Layout']
  },
  {
    group: 'Landing Page',
    image: `${import.meta.env.BASE_URL}images/rs108.png`,
    metrics: ['Responsive UI', 'Hover Preview', 'Modern Layout']
  },
  {
    group: 'Landing Page',
    image: `${import.meta.env.BASE_URL}images/youle.png`,
    metrics: ['Responsive UI', 'Hover Preview', 'Modern Layout']
  },
  {
    title: 'Cozy Corner',
    group: 'Editing',
    image: `${import.meta.env.BASE_URL}images/edit-cozy-corner.png`,
    metrics: ['Responsive UI', 'Hover Preview', 'Modern Layout'],
    link: "https://www.behance.net/gallery/193798805/Cozy-Corner-Furniture-Landing-Page"
  },
  {
    title: 'Power Peak',
    group: 'Editing',
    image: `${import.meta.env.BASE_URL}images/edit-power-peak.png`,
    metrics: ['Responsive UI', 'Hover Preview', 'Modern Layout'],
    link: "https://www.behance.net/gallery/194178985/Power-Peak-Fitness"
  },
  {
    title: 'Coastal Haven',
    group: 'Editing',
    image: `${import.meta.env.BASE_URL}images/edit-coastal-haven.png`,
    metrics: ['Responsive UI', 'Hover Preview', 'Modern Layout'],
    link: "https://www.behance.net/gallery/193798481/Coastal-Haven-Landing-Page"
  },
  {
    title: 'Savory Bites',
    group: 'Editing',
    image: `${import.meta.env.BASE_URL}images/edit-savory-bites.png`,
    metrics: ['Responsive UI', 'Hover Preview', 'Modern Layout'],
    link: "https://www.behance.net/gallery/193798309/Savory-Bites-Landing-Page"
  }
];


export const skills = [
  // Frontend
  {
    name: 'HTML',
    image: 'https://cdn.simpleicons.org/html5'
  },
  {
    name: 'CSS',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
  },
  {
    name: 'JavaScript',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
  },
  {
    name: 'TypeScript',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
  },
  {
    name: 'React',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
  },
  {
    name: 'Next.js',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
  },
  {
    name: 'jQuery',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg'
  },
  {
    name: 'Bootstrap',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'
  },

  // Backend
  {
    name: 'PHP',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'
  },
  {
    name: 'Laravel',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg'
  },
  {
    name: 'FastAPI',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg'
  },
  {
    name: 'MySQL',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
  },
  {
    name: 'REST API',
    image: 'https://cdn-icons-png.flaticon.com/512/2165/2165004.png'
  },
  {
    name: 'AJAX',
    image: 'https://cdn-icons-png.flaticon.com/512/1006/1006363.png'
  },

  // CMS & Website Builders
  {
    name: 'WordPress',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg'
  },
  {
    name: 'WooCommerce',
    image: 'https://cdn.simpleicons.org/woocommerce'
  },
  {
    name: 'Elementor',
    image: 'https://cdn.simpleicons.org/elementor'
  },
  {
    name: 'Shopify',
    image: 'https://cdn.simpleicons.org/shopify'
  },
  {
    name: 'Wix',
    image: 'https://cdn.simpleicons.org/wix'
  },

  // Tools & DevOps
  {
    name: 'Docker',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
  },
  {
    name: 'Git',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
  },
  {
    name: 'Supabase',
    image: 'https://cdn.simpleicons.org/supabase'
  },
  {
    name: 'cPanel',
    image: 'https://cdn.simpleicons.org/cpanel'
  },

  // Design & Analytics
  {
    name: 'Figma',
    image: 'https://cdn.simpleicons.org/figma'
  },
  {
    name: 'Google Analytics',
    image: 'https://cdn.simpleicons.org/googleanalytics'
  },
  {
    name: 'Drupal',
    image: 'https://cdn.simpleicons.org/drupal/0678BE'
  }
];