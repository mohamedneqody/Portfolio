// ──────────────────────────────────────────────
// Portfolio – Site Constants & Arabic Data
// ──────────────────────────────────────────────
import type {
  NavItem,
  Project,
  Skill,
  SocialLink,
  Stat,
  Certificate,
  Experience,
  Service,
  Outcome,
  ProcessStep,
} from '@/types';

// ─── Color Palette (White / Gray theme) ───────
export const colors = {
  deepPurple: '#7C3AED',
  royalPurple: '#A855F7',
  crimson: '#ffffff', // changed to white
  flame: '#888888',   // changed to gray
} as const;

// ─── Site Config ─────────────────────────────
export const siteConfig = {
  name: 'Algorithm Cities',
  title: 'AI Automation Engineer | مهندس أتمتة الذكاء الاصطناعي',
  description:
    'أبني أنظمة ذكاء اصطناعي جاهزة للإنتاج، وكلاء ذكيين (AI Agents)، وأتمتة سير العمل باستخدام Python و FastAPI و n8n.',
  url: 'https://example.com',
  ogImage: '/og.png',
  locale: 'ar',
} as const;

// ─── Navigation (Storytelling Flow) ──────────
export const navItems: NavItem[] = [
  { label: 'الرئيسية', href: '#hero' },
  { label: 'من أنا', href: '#about' },
  { label: 'خدماتي', href: '#services' },
  { label: 'أهم المشاريع', href: '#projects' },
  { label: 'أدواتي التقنية', href: '#skills' },
  { label: 'منهجيتي', href: '#process' },
  { label: 'أبرز النتائج', href: '#outcomes' },
  { label: 'تواصل معي', href: '#contact' },
];

// ─── Services (What I Build) ─────────────────
export const services: Service[] = [
  {
    title: 'AI Automation & Agents',
    description: 'بناء وكلاء ذكيين (AI Agents) ونظم أتمتة متقدمة باستخدام LangChain و n8n وبوتات تليجرام وواتساب للشركات، مع أنظمة Multi-Agent قادرة على التعامل مع المهام المعقدة.',
    icon: 'brain',
  },
  {
    title: 'LLM Engineering & RAG',
    description: 'تصميم وتطوير أنظمة RAG (Retrieval-Augmented Generation) وهندسة البرمبتات (Prompt Engineering) وبناء تطبيقات متكاملة تعتمد على النماذج اللغوية الكبيرة مثل Gemini و GPT.',
    icon: 'cpu',
  },
  {
    title: 'Backend & Infrastructure',
    description: 'بناء خوادم خلفية عالية الأداء باستخدام FastAPI و Python، مع قواعد بيانات PostgreSQL و Redis، وإدارة البنية التحتية عبر Docker للتشغيل السلس في بيئات الإنتاج.',
    icon: 'database',
  },
];

// ─── Projects ────────────────────────────────
export const projects: Project[] = [
  {
    id: 4,
    title: 'نظام Multi-Agent AI للمؤسسات (تليجرام)',
    description:
      'مساعد ذكاء اصطناعي متعدد الوكلاء مصمم للشركات، مبني على بنية Router-Agent مع نظام طوابير وكاش ذكي.',
    longDescription:
      'نظام Enterprise-grade مبني على n8n يستخدم هندسة Multi-Agent Architecture لتوجيه استفسارات المستخدمين تلقائياً للوكيل المناسب (Code Agent للبرمجة، Vision Agent لتحليل الصور، Search Agent للبحث في الإنترنت، Creative Agent للكتابة الإبداعية). يتضمن نظام طوابير Redis لإدارة آلاف الرسائل المتزامنة، وكاش ذكي لتقليل تكلفة API بنسبة 40%، وخوارزمية تحويل الردود الطويلة (أكثر من 4000 حرف) إلى ملفات Markdown تلقائياً.',
    image: '/projects/project-1.webp',
    tags: ['n8n', 'LangChain', 'Redis', 'PostgreSQL', 'Gemini AI', 'Telegram Bot API'],
    category: 'الذكاء الاصطناعي & تعلم الآلة',
    liveUrl: 'https://t.me/YourBotUsername',
    githubUrl: 'https://github.com/username/enterprise-ai-agent',
    year: '2026',
    caseStudy: {
      problem: 'البوتات التقليدية تتوقف تحت الضغط (Rate Limits)، ولا تفرق بين أنواع الأسئلة المختلفة، وتكلفة استدعاء نماذج الذكاء الاصطناعي مرتفعة جداً.',
      solution: 'بناء نظام Router ذكي يوجه كل سؤال للوكيل المتخصص، مع نظام طوابير Redis يمنع التوقف، وكاش ذكي يخفض التكلفة بنسبة 40%.',
      tech: 'n8n (Workflow Engine), LangChain (AI Agents), Redis (Queue & Cache), PostgreSQL (Memory & Metrics), Gemini 2.5 Pro/Flash.',
      result: 'نظام يتعامل مع آلاف المستخدمين المتزامنين بدون توقف، مع تقليل تكلفة API بنسبة 40% وتحويل الردود الطويلة لملفات تلقائياً.',
    }
  },
  {
    id: 1,
    title: 'نظام تحسين استخراج البيانات وأتمتة التقارير',
    description:
      'نظام آلي متكامل مدعوم بالذكاء الاصطناعي لاستخراج البيانات',
    longDescription:
      'بناء نظام أتمتة شامل لسير عمل التقارير الدورية التي كانت تستغرق ساعات يومياً، ليتم تنفيذها في دقائق معدودة.',
    image: '/projects/project-1.webp',
    tags: ['Python', 'n8n', 'Google Sheets', 'LLMs'],
    category: 'الذكاء الاصطناعي & تعلم الآلة',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/username/repo',
    year: '2025',
    caseStudy: {
      problem: 'عملية إعداد التقارير اليدوية كانت تستغرق وقتاً طويلاً جداً ومعرضة للأخطاء البشرية.',
      solution: 'بناء مسار أتمتة متكامل (Pipeline) يعتمد على الذكاء الاصطناعي لاستخراج البيانات وتحليلها آلياً.',
      tech: 'استخدام Python للمعالجة، n8n للأتمتة، وربطها مع Google Sheets.',
      result: 'تقليص وقت إعداد التقارير بنسبة 70% وزيادة دقة البيانات إلى 99%.',
    }
  },
  {
    id: 2,
    title: 'منصة التجارة الإلكترونية فائقة السرعة',
    description:
      'متجر إلكتروني حديث بتقنيات الجيل الجديد',
    longDescription:
      'بناء متجر متكامل باستخدام Next.js 15 لتجربة مستخدم سريعة وتصميم عصري.',
    image: '/projects/project-3.webp',
    tags: ['Next.js', 'React', 'Tailwind', 'Stripe'],
    category: 'تطبيقات ويب',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/username/repo',
    year: '2024',
    caseStudy: {
      problem: 'سرعة المتجر كانت بطيئة، مما أدى إلى انخفاض المبيعات ومعدل التحويل.',
      solution: 'إعادة بناء الواجهة الأمامية بالكامل باستخدام Next.js App Router و Server Components.',
      tech: 'Next.js 15, Tailwind CSS, Stripe, Vercel.',
      result: 'تحسين سرعة التحميل بمقدار 3 أضعاف وارتفاع معدل التحويل بنسبة 40%.',
    }
  },
  {
    id: 3,
    title: 'الصيدلية الذكية AI-Driven',
    description:
      'نظام ذكي لتقديم استشارات وتتبع المخزون',
    longDescription:
      'تم بناؤه باستخدام FastAPI, Supabase, n8n, و agentic RAG لتوفير استشارات دوائية آلية.',
    image: '/projects/project-1.webp',
    tags: ['FastAPI', 'Supabase', 'RAG'],
    category: 'الذكاء الاصطناعي & تعلم الآلة',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/username/repo',
    year: '2025',
    caseStudy: {
      problem: 'صعوبة الرد على استفسارات العملاء الطبية البسيطة بسرعة فائقة.',
      solution: 'تنفيذ نظام Agentic RAG يجيب على الأسئلة بناءً على قاعدة بيانات طبية معتمدة.',
      tech: 'FastAPI, Supabase Vector, LangChain.',
      result: 'تخفيف الضغط على الصيادلة بنسبة 50% وتحسين رضا العملاء.',
    }
  }
];

// ─── Project Categories ──────────────────────
export const categories = ['الكل', 'الذكاء الاصطناعي & تعلم الآلة', 'تطبيقات ويب', 'أخرى'] as const;

// ─── Skills ──────────────────────────────────
export const skills: Skill[] = [
  { name: 'AI Agents & LLMs', years: '3+ Years', icon: 'brain', category: 'الذكاء الاصطناعي والأتمتة' },
  { name: 'Python', years: '5+ Years', icon: 'terminal', category: 'الذكاء الاصطناعي والأتمتة' },
  { name: 'n8n Automation', years: '2+ Years', icon: 'workflow', category: 'الذكاء الاصطناعي والأتمتة' },
  { name: 'LangChain / RAG', years: '2+ Years', icon: 'cpu', category: 'الذكاء الاصطناعي والأتمتة' },
  { name: 'FastAPI', years: '3+ Years', icon: 'code', category: 'Backend & Infrastructure' },
  { name: 'PostgreSQL', years: '4+ Years', icon: 'database', category: 'Backend & Infrastructure' },
  { name: 'Redis', years: '2+ Years', icon: 'database', category: 'Backend & Infrastructure' },
  { name: 'Docker', years: '3+ Years', icon: 'container', category: 'Backend & Infrastructure' },
  { name: 'Next.js / React', years: '3+ Years', icon: 'layout', category: 'تطوير الويب' },
];

// ─── Social Links ────────────────────────────
export const socialLinks: SocialLink[] = [
  { name: 'GitHub',   url: 'https://github.com/username',          icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/username',     icon: 'linkedin' },
  { name: 'Twitter',  url: 'https://twitter.com/username',         icon: 'twitter' },
  { name: 'Email',    url: 'mailto:hello@example.com',             icon: 'mail' },
];

// ─── Stats (Achievements) ────────────────────
export const stats: Stat[] = [
  { label: 'أنظمة أتمتة ذكية', value: 30, suffix: '+' },
  { label: 'سير عمل إنتاجي', value: 10, suffix: '+' },
  { label: 'أنظمة LLM متكاملة', value: 5, suffix: '+' },
  { label: 'سنوات الخبرة', value: 3, suffix: '+' },
];

// ─── Process Steps ───────────────────────────
export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'الاكتشاف (Discovery)',
    description: 'فهم عميق لمشكلة العمل وجمع المتطلبات وتحليل البنية التحتية الحالية.',
  },
  {
    number: '02',
    title: 'التخطيط (Planning)',
    description: 'رسم المعمارية التقنية، اختيار الأدوات المناسبة، وتحديد خريطة الطريق للتنفيذ.',
  },
  {
    number: '03',
    title: 'التطوير (Development)',
    description: 'كتابة كود نظيف وقابل للتوسع مع بناء نماذج الذكاء الاصطناعي ودمجها.',
  },
  {
    number: '04',
    title: 'التسليم (Delivery)',
    description: 'اختبار النظام بالكامل، إطلاقه على خوادم الإنتاج، وتقديم الدعم الفني اللازم.',
  },
];

// ─── Outcomes (Selected Results) ─────────────
export const outcomes: Outcome[] = [
  {
    metric: '70%',
    title: 'تقليص وقت التقارير',
    description: 'reduction in manual reporting time through automated data pipelines and AI.',
  },
  {
    metric: '3x',
    title: 'زيادة سرعة الأداء',
    description: 'faster workflow execution resulting in higher team productivity.',
  },
  {
    metric: '99%',
    title: 'دقة استخراج البيانات',
    description: 'accuracy in automated data extraction using state-of-the-art LLMs.',
  },
];

export const certificateCategories: string[] = [
  'الكل',
  'AI & Machine Learning',
  'LLM & Generative AI',
  'Python & Backend',
  'Data Science',
  'Cloud & DevOps',
  'Automation & n8n',
];

export const certificates: Certificate[] = [
  {
    "id": "1",
    "title": "152859227",
    "provider": "Unknown",
    "category": "AI & Machine Learning",
    "image": "/certificates/images/cert_1.webp",
    "skills": [
      "Python",
      "AI Automation",
      "Prompt Engineering"
    ],
    "projects": [
      {
        "id": "telegram-ai-bot",
        "title": "Telegram AI Assistant",
        "github": "https://github.com"
      }
    ],
    "technologies": [
      "Docker",
      "FastAPI"
    ],
    "takeaways": [
      "Built production pipelines",
      "Implemented RAG"
    ],
    "duration": "18 hrs",
    "completedAt": "2026-06-12",
    "verifyUrl": "",
    "pdfUrl": "",
    "featured": true,
    "level": "Professional",
    "difficulty": 4,
    "badge": "Top Pick"
  },
  {
    "id": "2",
    "title": "153199135",
    "provider": "Unknown",
    "category": "AI & Machine Learning",
    "image": "/certificates/images/cert_2.webp",
    "skills": [
      "Python",
      "AI Automation",
      "Prompt Engineering"
    ],
    "projects": [
      {
        "id": "telegram-ai-bot",
        "title": "Telegram AI Assistant",
        "github": "https://github.com"
      }
    ],
    "technologies": [
      "Docker",
      "FastAPI"
    ],
    "takeaways": [
      "Built production pipelines",
      "Implemented RAG"
    ],
    "duration": "18 hrs",
    "completedAt": "2026-06-12",
    "verifyUrl": "",
    "pdfUrl": "",
    "featured": true,
    "level": "Professional",
    "difficulty": 4,
    "badge": "Top Pick"
  },
  {
    "id": "3",
    "title": "Coursera 605OLH14TTRC",
    "provider": "Coursera",
    "category": "AI & Machine Learning",
    "image": "/certificates/images/cert_3.webp",
    "skills": [
      "Python",
      "AI Automation",
      "Prompt Engineering"
    ],
    "projects": [
      {
        "id": "telegram-ai-bot",
        "title": "Telegram AI Assistant",
        "github": "https://github.com"
      }
    ],
    "technologies": [
      "Docker",
      "FastAPI"
    ],
    "takeaways": [
      "Built production pipelines",
      "Implemented RAG"
    ],
    "duration": "18 hrs",
    "completedAt": "2026-06-12",
    "verifyUrl": "https://coursera.org/verify/605OLH14TTRC",
    "pdfUrl": "",
    "featured": true,
    "level": "Professional",
    "difficulty": 4,
    "badge": "Top Pick"
  },
  {
    "id": "4",
    "title": "Coursera ALYPZMT8QRKJ",
    "provider": "Coursera",
    "category": "AI & Machine Learning",
    "image": "/certificates/images/cert_4.webp",
    "skills": [
      "Python",
      "AI Automation",
      "Prompt Engineering"
    ],
    "projects": [
      {
        "id": "telegram-ai-bot",
        "title": "Telegram AI Assistant",
        "github": "https://github.com"
      }
    ],
    "technologies": [
      "Docker",
      "FastAPI"
    ],
    "takeaways": [
      "Built production pipelines",
      "Implemented RAG"
    ],
    "duration": "18 hrs",
    "completedAt": "2026-06-12",
    "verifyUrl": "https://coursera.org/verify/ALYPZMT8QRKJ",
    "pdfUrl": "",
    "featured": true,
    "level": "Professional",
    "difficulty": 4,
    "badge": "Verified"
  },
  {
    "id": "5",
    "title": "Coursera FJ27J0NCFC8K",
    "provider": "Coursera",
    "category": "AI & Machine Learning",
    "image": "/certificates/images/cert_5.webp",
    "skills": [
      "Python",
      "AI Automation",
      "Prompt Engineering"
    ],
    "projects": [
      {
        "id": "telegram-ai-bot",
        "title": "Telegram AI Assistant",
        "github": "https://github.com"
      }
    ],
    "technologies": [
      "Docker",
      "FastAPI"
    ],
    "takeaways": [
      "Built production pipelines",
      "Implemented RAG"
    ],
    "duration": "18 hrs",
    "completedAt": "2026-06-12",
    "verifyUrl": "https://coursera.org/verify/FJ27J0NCFC8K",
    "pdfUrl": "",
    "featured": true,
    "level": "Professional",
    "difficulty": 4,
    "badge": "Verified"
  },
  {
    "id": "6",
    "title": "Coursera J7A1SXCS5RFL",
    "provider": "Coursera",
    "category": "AI & Machine Learning",
    "image": "/certificates/images/cert_6.webp",
    "skills": [
      "Python",
      "AI Automation",
      "Prompt Engineering"
    ],
    "projects": [
      {
        "id": "telegram-ai-bot",
        "title": "Telegram AI Assistant",
        "github": "https://github.com"
      }
    ],
    "technologies": [
      "Docker",
      "FastAPI"
    ],
    "takeaways": [
      "Built production pipelines",
      "Implemented RAG"
    ],
    "duration": "18 hrs",
    "completedAt": "2026-06-12",
    "verifyUrl": "https://coursera.org/verify/J7A1SXCS5RFL",
    "pdfUrl": "",
    "featured": true,
    "level": "Professional",
    "difficulty": 4,
    "badge": "Verified"
  },
  {
    "id": "7",
    "title": "Coursera Q8UW44EU09F0",
    "provider": "Coursera",
    "category": "AI & Machine Learning",
    "image": "/certificates/images/cert_7.webp",
    "skills": [
      "Python",
      "AI Automation",
      "Prompt Engineering"
    ],
    "projects": [
      {
        "id": "telegram-ai-bot",
        "title": "Telegram AI Assistant",
        "github": "https://github.com"
      }
    ],
    "technologies": [
      "Docker",
      "FastAPI"
    ],
    "takeaways": [
      "Built production pipelines",
      "Implemented RAG"
    ],
    "duration": "18 hrs",
    "completedAt": "2026-06-12",
    "verifyUrl": "https://coursera.org/verify/Q8UW44EU09F0",
    "pdfUrl": "",
    "featured": true,
    "level": "Professional",
    "difficulty": 4,
    "badge": "Verified"
  },
  {
    "id": "8",
    "title": "Coursera QZDGRSNPSF7C",
    "provider": "Coursera",
    "category": "AI & Machine Learning",
    "image": "/certificates/images/cert_8.webp",
    "skills": [
      "Python",
      "AI Automation",
      "Prompt Engineering"
    ],
    "projects": [
      {
        "id": "telegram-ai-bot",
        "title": "Telegram AI Assistant",
        "github": "https://github.com"
      }
    ],
    "technologies": [
      "Docker",
      "FastAPI"
    ],
    "takeaways": [
      "Built production pipelines",
      "Implemented RAG"
    ],
    "duration": "18 hrs",
    "completedAt": "2026-06-12",
    "verifyUrl": "https://coursera.org/verify/QZDGRSNPSF7C",
    "pdfUrl": "",
    "featured": true,
    "level": "Professional",
    "difficulty": 4,
    "badge": "Verified"
  },
  {
    "id": "9",
    "title": "UC-29c16e5a-c882-4ddc-b3e3-5546aca36d97",
    "provider": "Udemy",
    "category": "AI & Machine Learning",
    "image": "/certificates/images/cert_9.webp",
    "skills": [
      "Python",
      "AI Automation",
      "Prompt Engineering"
    ],
    "projects": [
      {
        "id": "telegram-ai-bot",
        "title": "Telegram AI Assistant",
        "github": "https://github.com"
      }
    ],
    "technologies": [
      "Docker",
      "FastAPI"
    ],
    "takeaways": [
      "Built production pipelines",
      "Implemented RAG"
    ],
    "duration": "18 hrs",
    "completedAt": "2026-06-12",
    "verifyUrl": "https://ude.my/UC-29c16e5a-c882-4ddc-b3e3-5546aca36d97",
    "pdfUrl": "",
    "featured": true,
    "level": "Professional",
    "difficulty": 4,
    "badge": "Verified"
  },
  {
    "id": "10",
    "title": "UC-a770b1ea-2304-4825-b1e9-0a8a15b4794d",
    "provider": "Udemy",
    "category": "AI & Machine Learning",
    "image": "/certificates/images/cert_10.webp",
    "skills": [
      "Python",
      "AI Automation",
      "Prompt Engineering"
    ],
    "projects": [
      {
        "id": "telegram-ai-bot",
        "title": "Telegram AI Assistant",
        "github": "https://github.com"
      }
    ],
    "technologies": [
      "Docker",
      "FastAPI"
    ],
    "takeaways": [
      "Built production pipelines",
      "Implemented RAG"
    ],
    "duration": "18 hrs",
    "completedAt": "2026-06-12",
    "verifyUrl": "https://ude.my/UC-a770b1ea-2304-4825-b1e9-0a8a15b4794d",
    "pdfUrl": "",
    "featured": true,
    "level": "Professional",
    "difficulty": 4,
    "badge": "Verified"
  },
  {
    "id": "11",
    "title": "شهاده اكسيل",
    "provider": "Unknown",
    "category": "AI & Machine Learning",
    "image": "/certificates/images/cert_11.webp",
    "skills": [
      "Python",
      "AI Automation",
      "Prompt Engineering"
    ],
    "projects": [
      {
        "id": "telegram-ai-bot",
        "title": "Telegram AI Assistant",
        "github": "https://github.com"
      }
    ],
    "technologies": [
      "Docker",
      "FastAPI"
    ],
    "takeaways": [
      "Built production pipelines",
      "Implemented RAG"
    ],
    "duration": "18 hrs",
    "completedAt": "2026-06-12",
    "verifyUrl": "",
    "pdfUrl": "",
    "featured": true,
    "level": "Professional",
    "difficulty": 4,
    "badge": undefined
  },
  {
    "id": "12",
    "title": "UC-87445101-1117-4a6e-bf5d-13e44928396a",
    "provider": "Udemy",
    "category": "Automation & n8n",
    "image": "/certificates/images/cert_12.webp",
    "skills": [
      "Development",
      "Tools"
    ],
    "projects": [
      {
        "id": "telegram-ai-bot",
        "title": "Telegram AI Assistant",
        "github": "https://github.com"
      }
    ],
    "technologies": [
      "Docker",
      "FastAPI"
    ],
    "takeaways": [
      "Built production pipelines",
      "Implemented RAG"
    ],
    "duration": "18 hrs",
    "completedAt": "2026-06-12",
    "verifyUrl": "https://ude.my/UC-87445101-1117-4a6e-bf5d-13e44928396a",
    "pdfUrl": "",
    "featured": true,
    "level": "Professional",
    "difficulty": 4,
    "badge": "Verified"
  },
  {
    "id": "13",
    "title": "Coursera 0M946GOQMW9J",
    "provider": "Coursera",
    "category": "Python & Backend",
    "image": "/certificates/images/cert_13.webp",
    "skills": [
      "Development",
      "Tools"
    ],
    "projects": [
      {
        "id": "telegram-ai-bot",
        "title": "Telegram AI Assistant",
        "github": "https://github.com"
      }
    ],
    "technologies": [
      "Docker",
      "FastAPI"
    ],
    "takeaways": [
      "Built production pipelines",
      "Implemented RAG"
    ],
    "duration": "18 hrs",
    "completedAt": "2026-06-12",
    "verifyUrl": "https://coursera.org/verify/0M946GOQMW9J",
    "pdfUrl": "",
    "featured": false,
    "level": "Professional",
    "difficulty": 4,
    "badge": "Verified"
  },
  {
    "id": "14",
    "title": "Coursera 739G9LKBNODC",
    "provider": "Coursera",
    "category": "Python & Backend",
    "image": "/certificates/images/cert_14.webp",
    "skills": [
      "Development",
      "Tools"
    ],
    "projects": [
      {
        "id": "telegram-ai-bot",
        "title": "Telegram AI Assistant",
        "github": "https://github.com"
      }
    ],
    "technologies": [
      "Docker",
      "FastAPI"
    ],
    "takeaways": [
      "Built production pipelines",
      "Implemented RAG"
    ],
    "duration": "18 hrs",
    "completedAt": "2026-06-12",
    "verifyUrl": "https://coursera.org/verify/739G9LKBNODC",
    "pdfUrl": "",
    "featured": false,
    "level": "Professional",
    "difficulty": 4,
    "badge": "Verified"
  },
  {
    "id": "15",
    "title": "Coursera D69F7M63BV1J",
    "provider": "Coursera",
    "category": "Python & Backend",
    "image": "/certificates/images/cert_15.webp",
    "skills": [
      "Development",
      "Tools"
    ],
    "projects": [
      {
        "id": "telegram-ai-bot",
        "title": "Telegram AI Assistant",
        "github": "https://github.com"
      }
    ],
    "technologies": [
      "Docker",
      "FastAPI"
    ],
    "takeaways": [
      "Built production pipelines",
      "Implemented RAG"
    ],
    "duration": "18 hrs",
    "completedAt": "2026-06-12",
    "verifyUrl": "https://coursera.org/verify/D69F7M63BV1J",
    "pdfUrl": "",
    "featured": false,
    "level": "Professional",
    "difficulty": 4,
    "badge": "Verified"
  },
  {
    "id": "16",
    "title": "Coursera database",
    "provider": "Coursera",
    "category": "Python & Backend",
    "image": "/certificates/images/cert_16.webp",
    "skills": [
      "Development",
      "Tools"
    ],
    "projects": [
      {
        "id": "telegram-ai-bot",
        "title": "Telegram AI Assistant",
        "github": "https://github.com"
      }
    ],
    "technologies": [
      "Docker",
      "FastAPI"
    ],
    "takeaways": [
      "Built production pipelines",
      "Implemented RAG"
    ],
    "duration": "18 hrs",
    "completedAt": "2026-06-12",
    "verifyUrl": "https://coursera.org/verify/database",
    "pdfUrl": "",
    "featured": false,
    "level": "Professional",
    "difficulty": 4,
    "badge": "Verified"
  },
  {
    "id": "17",
    "title": "Coursera IKGTFHY6MESI",
    "provider": "Coursera",
    "category": "Python & Backend",
    "image": "/certificates/images/cert_17.webp",
    "skills": [
      "Development",
      "Tools"
    ],
    "projects": [
      {
        "id": "telegram-ai-bot",
        "title": "Telegram AI Assistant",
        "github": "https://github.com"
      }
    ],
    "technologies": [
      "Docker",
      "FastAPI"
    ],
    "takeaways": [
      "Built production pipelines",
      "Implemented RAG"
    ],
    "duration": "18 hrs",
    "completedAt": "2026-06-12",
    "verifyUrl": "https://coursera.org/verify/IKGTFHY6MESI",
    "pdfUrl": "",
    "featured": false,
    "level": "Professional",
    "difficulty": 4,
    "badge": "Verified"
  },
  {
    "id": "18",
    "title": "Coursera VRMF6XQ365JF",
    "provider": "Coursera",
    "category": "Python & Backend",
    "image": "/certificates/images/cert_18.webp",
    "skills": [
      "Development",
      "Tools"
    ],
    "projects": [
      {
        "id": "telegram-ai-bot",
        "title": "Telegram AI Assistant",
        "github": "https://github.com"
      }
    ],
    "technologies": [
      "Docker",
      "FastAPI"
    ],
    "takeaways": [
      "Built production pipelines",
      "Implemented RAG"
    ],
    "duration": "18 hrs",
    "completedAt": "2026-06-12",
    "verifyUrl": "https://coursera.org/verify/VRMF6XQ365JF",
    "pdfUrl": "",
    "featured": false,
    "level": "Professional",
    "difficulty": 4,
    "badge": "Verified"
  },
  {
    "id": "19",
    "title": "UC-91cf41a5-b0fd-42f6-b23e-8324dbdf8fb6",
    "provider": "Udemy",
    "category": "Python & Backend",
    "image": "/certificates/images/cert_19.webp",
    "skills": [
      "Development",
      "Tools"
    ],
    "projects": [
      {
        "id": "telegram-ai-bot",
        "title": "Telegram AI Assistant",
        "github": "https://github.com"
      }
    ],
    "technologies": [
      "Docker",
      "FastAPI"
    ],
    "takeaways": [
      "Built production pipelines",
      "Implemented RAG"
    ],
    "duration": "18 hrs",
    "completedAt": "2026-06-12",
    "verifyUrl": "https://ude.my/UC-91cf41a5-b0fd-42f6-b23e-8324dbdf8fb6",
    "pdfUrl": "",
    "featured": false,
    "level": "Professional",
    "difficulty": 4,
    "badge": "Verified"
  },
  {
    "id": "20",
    "title": "UC-bf40ef85-776e-4da2-beba-114baf6aadb6",
    "provider": "Udemy",
    "category": "Python & Backend",
    "image": "/certificates/images/cert_20.webp",
    "skills": [
      "Development",
      "Tools"
    ],
    "projects": [
      {
        "id": "telegram-ai-bot",
        "title": "Telegram AI Assistant",
        "github": "https://github.com"
      }
    ],
    "technologies": [
      "Docker",
      "FastAPI"
    ],
    "takeaways": [
      "Built production pipelines",
      "Implemented RAG"
    ],
    "duration": "18 hrs",
    "completedAt": "2026-06-12",
    "verifyUrl": "https://ude.my/UC-bf40ef85-776e-4da2-beba-114baf6aadb6",
    "pdfUrl": "",
    "featured": false,
    "level": "Professional",
    "difficulty": 4,
    "badge": "Verified"
  },
  {
    "id": "21",
    "title": "184366483",
    "provider": "Unknown",
    "category": "Cloud & DevOps",
    "image": "/certificates/images/cert_21.webp",
    "skills": [
      "Development",
      "Tools"
    ],
    "projects": [
      {
        "id": "telegram-ai-bot",
        "title": "Telegram AI Assistant",
        "github": "https://github.com"
      }
    ],
    "technologies": [
      "Docker",
      "FastAPI"
    ],
    "takeaways": [
      "Built production pipelines",
      "Implemented RAG"
    ],
    "duration": "18 hrs",
    "completedAt": "2026-06-12",
    "verifyUrl": "",
    "pdfUrl": "",
    "featured": false,
    "level": "Professional",
    "difficulty": 4,
    "badge": undefined
  },
  {
    "id": "22",
    "title": "Coursera UT5ZZND3F2Q8",
    "provider": "Coursera",
    "category": "Cloud & DevOps",
    "image": "/certificates/images/cert_22.webp",
    "skills": [
      "Development",
      "Tools"
    ],
    "projects": [
      {
        "id": "telegram-ai-bot",
        "title": "Telegram AI Assistant",
        "github": "https://github.com"
      }
    ],
    "technologies": [
      "Docker",
      "FastAPI"
    ],
    "takeaways": [
      "Built production pipelines",
      "Implemented RAG"
    ],
    "duration": "18 hrs",
    "completedAt": "2026-06-12",
    "verifyUrl": "https://coursera.org/verify/UT5ZZND3F2Q8",
    "pdfUrl": "",
    "featured": false,
    "level": "Professional",
    "difficulty": 4,
    "badge": "Verified"
  },
  {
    "id": "23",
    "title": "UC-b09685d3-aa01-4eeb-8246-20b95d398c23",
    "provider": "Udemy",
    "category": "Cloud & DevOps",
    "image": "/certificates/images/cert_23.webp",
    "skills": [
      "Development",
      "Tools"
    ],
    "projects": [
      {
        "id": "telegram-ai-bot",
        "title": "Telegram AI Assistant",
        "github": "https://github.com"
      }
    ],
    "technologies": [
      "Docker",
      "FastAPI"
    ],
    "takeaways": [
      "Built production pipelines",
      "Implemented RAG"
    ],
    "duration": "18 hrs",
    "completedAt": "2026-06-12",
    "verifyUrl": "https://ude.my/UC-b09685d3-aa01-4eeb-8246-20b95d398c23",
    "pdfUrl": "",
    "featured": false,
    "level": "Professional",
    "difficulty": 4,
    "badge": "Verified"
  },
  {
    "id": "24",
    "title": "6",
    "provider": "Online Platform",
    "category": "AI & Machine Learning",
    "image": "/certificates/images/cert_24.webp",
    "skills": [
      "Python",
      "Machine Learning"
    ],
    "projects": [
      {
        "id": "workflow-automation",
        "title": "n8n Workflow Automation"
      }
    ],
    "technologies": [
      "OpenAI",
      "Next.js"
    ],
    "takeaways": [
      "Advanced integrations",
      "API Design"
    ],
    "duration": "12 hrs",
    "completedAt": "2026-04-10",
    "verifyUrl": "",
    "pdfUrl": "",
    "featured": false,
    "level": "Intermediate",
    "difficulty": 3,
    "badge": undefined
  },
  {
    "id": "25",
    "title": "WhatsApp Ima5ge 2026-06-27 at 9.05.26 PM",
    "provider": "Online Platform",
    "category": "AI & Machine Learning",
    "image": "/certificates/images/cert_25.webp",
    "skills": [
      "Python",
      "Machine Learning"
    ],
    "projects": [
      {
        "id": "workflow-automation",
        "title": "n8n Workflow Automation"
      }
    ],
    "technologies": [
      "OpenAI",
      "Next.js"
    ],
    "takeaways": [
      "Advanced integrations",
      "API Design"
    ],
    "duration": "12 hrs",
    "completedAt": "2026-04-10",
    "verifyUrl": "",
    "pdfUrl": "",
    "featured": false,
    "level": "Intermediate",
    "difficulty": 3,
    "badge": undefined
  },
  {
    "id": "26",
    "title": "Certificate 2026-01-27 at 10.40.51 PM",
    "provider": "Online Platform",
    "category": "AI & Machine Learning",
    "image": "/certificates/images/cert_26.webp",
    "skills": [
      "Python",
      "Machine Learning"
    ],
    "projects": [
      {
        "id": "workflow-automation",
        "title": "n8n Workflow Automation"
      }
    ],
    "technologies": [
      "OpenAI",
      "Next.js"
    ],
    "takeaways": [
      "Advanced integrations",
      "API Design"
    ],
    "duration": "12 hrs",
    "completedAt": "2026-04-10",
    "verifyUrl": "",
    "pdfUrl": "",
    "featured": false,
    "level": "Intermediate",
    "difficulty": 3,
    "badge": undefined
  },
  {
    "id": "27",
    "title": "Certificate 2026-02-11 at 9.10.47 AM",
    "provider": "Online Platform",
    "category": "AI & Machine Learning",
    "image": "/certificates/images/cert_27.webp",
    "skills": [
      "Python",
      "Machine Learning"
    ],
    "projects": [
      {
        "id": "workflow-automation",
        "title": "n8n Workflow Automation"
      }
    ],
    "technologies": [
      "OpenAI",
      "Next.js"
    ],
    "takeaways": [
      "Advanced integrations",
      "API Design"
    ],
    "duration": "12 hrs",
    "completedAt": "2026-04-10",
    "verifyUrl": "",
    "pdfUrl": "",
    "featured": false,
    "level": "Intermediate",
    "difficulty": 3,
    "badge": undefined
  },
  {
    "id": "28",
    "title": "Certificate 2026-04-18 at 1.10.35 AM",
    "provider": "Online Platform",
    "category": "AI & Machine Learning",
    "image": "/certificates/images/cert_28.webp",
    "skills": [
      "Python",
      "Machine Learning"
    ],
    "projects": [
      {
        "id": "workflow-automation",
        "title": "n8n Workflow Automation"
      }
    ],
    "technologies": [
      "OpenAI",
      "Next.js"
    ],
    "takeaways": [
      "Advanced integrations",
      "API Design"
    ],
    "duration": "12 hrs",
    "completedAt": "2026-04-10",
    "verifyUrl": "",
    "pdfUrl": "",
    "featured": false,
    "level": "Intermediate",
    "difficulty": 3,
    "badge": undefined
  },
  {
    "id": "29",
    "title": "Certificate 2026-04-18 at 1.18.05 AM",
    "provider": "Online Platform",
    "category": "AI & Machine Learning",
    "image": "/certificates/images/cert_29.webp",
    "skills": [
      "Python",
      "Machine Learning"
    ],
    "projects": [
      {
        "id": "workflow-automation",
        "title": "n8n Workflow Automation"
      }
    ],
    "technologies": [
      "OpenAI",
      "Next.js"
    ],
    "takeaways": [
      "Advanced integrations",
      "API Design"
    ],
    "duration": "12 hrs",
    "completedAt": "2026-04-10",
    "verifyUrl": "",
    "pdfUrl": "",
    "featured": false,
    "level": "Intermediate",
    "difficulty": 3,
    "badge": undefined
  },
  {
    "id": "30",
    "title": "Certificate 2026-06-1at 9.05.19 PM",
    "provider": "Online Platform",
    "category": "AI & Machine Learning",
    "image": "/certificates/images/cert_30.webp",
    "skills": [
      "Python",
      "Machine Learning"
    ],
    "projects": [
      {
        "id": "workflow-automation",
        "title": "n8n Workflow Automation"
      }
    ],
    "technologies": [
      "OpenAI",
      "Next.js"
    ],
    "takeaways": [
      "Advanced integrations",
      "API Design"
    ],
    "duration": "12 hrs",
    "completedAt": "2026-04-10",
    "verifyUrl": "",
    "pdfUrl": "",
    "featured": false,
    "level": "Intermediate",
    "difficulty": 3,
    "badge": undefined
  },
  {
    "id": "31",
    "title": "Certificate 2026-06-227 at 9.05.19 PM",
    "provider": "Online Platform",
    "category": "AI & Machine Learning",
    "image": "/certificates/images/cert_31.webp",
    "skills": [
      "Python",
      "Machine Learning"
    ],
    "projects": [
      {
        "id": "workflow-automation",
        "title": "n8n Workflow Automation"
      }
    ],
    "technologies": [
      "OpenAI",
      "Next.js"
    ],
    "takeaways": [
      "Advanced integrations",
      "API Design"
    ],
    "duration": "12 hrs",
    "completedAt": "2026-04-10",
    "verifyUrl": "",
    "pdfUrl": "",
    "featured": false,
    "level": "Intermediate",
    "difficulty": 3,
    "badge": undefined
  },
  {
    "id": "32",
    "title": "Certificate 2026-06-27 1at 9.05.18 PM",
    "provider": "Online Platform",
    "category": "AI & Machine Learning",
    "image": "/certificates/images/cert_32.webp",
    "skills": [
      "Python",
      "Machine Learning"
    ],
    "projects": [
      {
        "id": "workflow-automation",
        "title": "n8n Workflow Automation"
      }
    ],
    "technologies": [
      "OpenAI",
      "Next.js"
    ],
    "takeaways": [
      "Advanced integrations",
      "API Design"
    ],
    "duration": "12 hrs",
    "completedAt": "2026-04-10",
    "verifyUrl": "",
    "pdfUrl": "",
    "featured": false,
    "level": "Intermediate",
    "difficulty": 3,
    "badge": undefined
  },
  {
    "id": "33",
    "title": "Certificate 2026-06-27 at 9.05.22ee PM",
    "provider": "Online Platform",
    "category": "AI & Machine Learning",
    "image": "/certificates/images/cert_33.webp",
    "skills": [
      "Python",
      "Machine Learning"
    ],
    "projects": [
      {
        "id": "workflow-automation",
        "title": "n8n Workflow Automation"
      }
    ],
    "technologies": [
      "OpenAI",
      "Next.js"
    ],
    "takeaways": [
      "Advanced integrations",
      "API Design"
    ],
    "duration": "12 hrs",
    "completedAt": "2026-04-10",
    "verifyUrl": "",
    "pdfUrl": "",
    "featured": false,
    "level": "Intermediate",
    "difficulty": 3,
    "badge": undefined
  },
  {
    "id": "34",
    "title": "Certificate 2026-06-27 at 9.05.23 11PM",
    "provider": "Online Platform",
    "category": "AI & Machine Learning",
    "image": "/certificates/images/cert_34.webp",
    "skills": [
      "Python",
      "Machine Learning"
    ],
    "projects": [
      {
        "id": "workflow-automation",
        "title": "n8n Workflow Automation"
      }
    ],
    "technologies": [
      "OpenAI",
      "Next.js"
    ],
    "takeaways": [
      "Advanced integrations",
      "API Design"
    ],
    "duration": "12 hrs",
    "completedAt": "2026-04-10",
    "verifyUrl": "",
    "pdfUrl": "",
    "featured": false,
    "level": "Intermediate",
    "difficulty": 3,
    "badge": undefined
  },
  {
    "id": "35",
    "title": "Certificate 2026-06-27 at 9.05.23 P4M",
    "provider": "Online Platform",
    "category": "AI & Machine Learning",
    "image": "/certificates/images/cert_35.webp",
    "skills": [
      "Python",
      "Machine Learning"
    ],
    "projects": [
      {
        "id": "workflow-automation",
        "title": "n8n Workflow Automation"
      }
    ],
    "technologies": [
      "OpenAI",
      "Next.js"
    ],
    "takeaways": [
      "Advanced integrations",
      "API Design"
    ],
    "duration": "12 hrs",
    "completedAt": "2026-04-10",
    "verifyUrl": "",
    "pdfUrl": "",
    "featured": false,
    "level": "Intermediate",
    "difficulty": 3,
    "badge": undefined
  },
  {
    "id": "36",
    "title": "Certificate 2026-06-27 at 9.05.23 PM",
    "provider": "Online Platform",
    "category": "AI & Machine Learning",
    "image": "/certificates/images/cert_36.webp",
    "skills": [
      "Python",
      "Machine Learning"
    ],
    "projects": [
      {
        "id": "workflow-automation",
        "title": "n8n Workflow Automation"
      }
    ],
    "technologies": [
      "OpenAI",
      "Next.js"
    ],
    "takeaways": [
      "Advanced integrations",
      "API Design"
    ],
    "duration": "12 hrs",
    "completedAt": "2026-04-10",
    "verifyUrl": "",
    "pdfUrl": "",
    "featured": false,
    "level": "Intermediate",
    "difficulty": 3,
    "badge": undefined
  },
  {
    "id": "37",
    "title": "Certificate 2026-06-27 at 9.05.26 PM",
    "provider": "Online Platform",
    "category": "AI & Machine Learning",
    "image": "/certificates/images/cert_37.webp",
    "skills": [
      "Python",
      "Machine Learning"
    ],
    "projects": [
      {
        "id": "workflow-automation",
        "title": "n8n Workflow Automation"
      }
    ],
    "technologies": [
      "OpenAI",
      "Next.js"
    ],
    "takeaways": [
      "Advanced integrations",
      "API Design"
    ],
    "duration": "12 hrs",
    "completedAt": "2026-04-10",
    "verifyUrl": "",
    "pdfUrl": "",
    "featured": false,
    "level": "Intermediate",
    "difficulty": 3,
    "badge": undefined
  },
  {
    "id": "38",
    "title": "Certificate 2026-06-27 at 9.05.26 PM1",
    "provider": "Online Platform",
    "category": "AI & Machine Learning",
    "image": "/certificates/images/cert_38.webp",
    "skills": [
      "Python",
      "Machine Learning"
    ],
    "projects": [
      {
        "id": "workflow-automation",
        "title": "n8n Workflow Automation"
      }
    ],
    "technologies": [
      "OpenAI",
      "Next.js"
    ],
    "takeaways": [
      "Advanced integrations",
      "API Design"
    ],
    "duration": "12 hrs",
    "completedAt": "2026-04-10",
    "verifyUrl": "",
    "pdfUrl": "",
    "featured": false,
    "level": "Intermediate",
    "difficulty": 3,
    "badge": undefined
  },
  {
    "id": "39",
    "title": "Certificate 2026-06-27 at 9.05.26 PM2",
    "provider": "Online Platform",
    "category": "AI & Machine Learning",
    "image": "/certificates/images/cert_39.webp",
    "skills": [
      "Python",
      "Machine Learning"
    ],
    "projects": [
      {
        "id": "workflow-automation",
        "title": "n8n Workflow Automation"
      }
    ],
    "technologies": [
      "OpenAI",
      "Next.js"
    ],
    "takeaways": [
      "Advanced integrations",
      "API Design"
    ],
    "duration": "12 hrs",
    "completedAt": "2026-04-10",
    "verifyUrl": "",
    "pdfUrl": "",
    "featured": false,
    "level": "Intermediate",
    "difficulty": 3,
    "badge": undefined
  },
  {
    "id": "40",
    "title": "Certificate 2026-06-27 at 9.05.27 PM",
    "provider": "Online Platform",
    "category": "AI & Machine Learning",
    "image": "/certificates/images/cert_40.webp",
    "skills": [
      "Python",
      "Machine Learning"
    ],
    "projects": [
      {
        "id": "workflow-automation",
        "title": "n8n Workflow Automation"
      }
    ],
    "technologies": [
      "OpenAI",
      "Next.js"
    ],
    "takeaways": [
      "Advanced integrations",
      "API Design"
    ],
    "duration": "12 hrs",
    "completedAt": "2026-04-10",
    "verifyUrl": "",
    "pdfUrl": "",
    "featured": false,
    "level": "Intermediate",
    "difficulty": 3,
    "badge": undefined
  },
  {
    "id": "41",
    "title": "Certificate 2026-06-271 at 9.05.18 PM",
    "provider": "Online Platform",
    "category": "AI & Machine Learning",
    "image": "/certificates/images/cert_41.webp",
    "skills": [
      "Python",
      "Machine Learning"
    ],
    "projects": [
      {
        "id": "workflow-automation",
        "title": "n8n Workflow Automation"
      }
    ],
    "technologies": [
      "OpenAI",
      "Next.js"
    ],
    "takeaways": [
      "Advanced integrations",
      "API Design"
    ],
    "duration": "12 hrs",
    "completedAt": "2026-04-10",
    "verifyUrl": "",
    "pdfUrl": "",
    "featured": false,
    "level": "Intermediate",
    "difficulty": 3,
    "badge": undefined
  },
  {
    "id": "42",
    "title": "Certificate22 2026-06-27 at 9.05.22 PM",
    "provider": "Online Platform",
    "category": "AI & Machine Learning",
    "image": "/certificates/images/cert_42.webp",
    "skills": [
      "Python",
      "Machine Learning"
    ],
    "projects": [
      {
        "id": "workflow-automation",
        "title": "n8n Workflow Automation"
      }
    ],
    "technologies": [
      "OpenAI",
      "Next.js"
    ],
    "takeaways": [
      "Advanced integrations",
      "API Design"
    ],
    "duration": "12 hrs",
    "completedAt": "2026-04-10",
    "verifyUrl": "",
    "pdfUrl": "",
    "featured": false,
    "level": "Intermediate",
    "difficulty": 3,
    "badge": undefined
  },
  {
    "id": "43",
    "title": "UC-207beef1-f75c-46a9-89ef-93a9ac962336",
    "provider": "Udemy",
    "category": "Automation & n8n",
    "image": "/certificates/images/cert_43.webp",
    "skills": [
      "Problem Solving"
    ],
    "projects": [
      {
        "id": "workflow-automation",
        "title": "n8n Workflow Automation"
      }
    ],
    "technologies": [
      "OpenAI",
      "Next.js"
    ],
    "takeaways": [
      "Advanced integrations",
      "API Design"
    ],
    "duration": "12 hrs",
    "completedAt": "2026-04-10",
    "verifyUrl": "https://ude.my/UC-207beef1-f75c-46a9-89ef-93a9ac962336",
    "pdfUrl": "",
    "featured": false,
    "level": "Intermediate",
    "difficulty": 3,
    "badge": "Verified"
  },
  {
    "id": "44",
    "title": "UC-d64ae192-c77b-43a0-87e0-683422100a4d",
    "provider": "Udemy",
    "category": "Automation & n8n",
    "image": "/certificates/images/cert_44.webp",
    "skills": [
      "Problem Solving"
    ],
    "projects": [
      {
        "id": "workflow-automation",
        "title": "n8n Workflow Automation"
      }
    ],
    "technologies": [
      "OpenAI",
      "Next.js"
    ],
    "takeaways": [
      "Advanced integrations",
      "API Design"
    ],
    "duration": "12 hrs",
    "completedAt": "2026-04-10",
    "verifyUrl": "https://ude.my/UC-d64ae192-c77b-43a0-87e0-683422100a4d",
    "pdfUrl": "",
    "featured": false,
    "level": "Intermediate",
    "difficulty": 3,
    "badge": "Verified"
  },
  {
    "id": "45",
    "title": "UC-fabaff13-3b9f-4f76-9482-42419f08b795",
    "provider": "Udemy",
    "category": "Automation & n8n",
    "image": "/certificates/images/cert_45.webp",
    "skills": [
      "Problem Solving"
    ],
    "projects": [
      {
        "id": "workflow-automation",
        "title": "n8n Workflow Automation"
      }
    ],
    "technologies": [
      "OpenAI",
      "Next.js"
    ],
    "takeaways": [
      "Advanced integrations",
      "API Design"
    ],
    "duration": "12 hrs",
    "completedAt": "2026-04-10",
    "verifyUrl": "https://ude.my/UC-fabaff13-3b9f-4f76-9482-42419f08b795",
    "pdfUrl": "",
    "featured": false,
    "level": "Intermediate",
    "difficulty": 3,
    "badge": "Verified"
  },
  {
    "id": "46",
    "title": "Certificate 2026-06-27 at 5.19.34 PM",
    "provider": "Online Platform",
    "category": "Automation & n8n",
    "image": "/certificates/images/cert_46.webp",
    "skills": [
      "Problem Solving"
    ],
    "projects": [
      {
        "id": "workflow-automation",
        "title": "n8n Workflow Automation"
      }
    ],
    "technologies": [
      "OpenAI",
      "Next.js"
    ],
    "takeaways": [
      "Advanced integrations",
      "API Design"
    ],
    "duration": "12 hrs",
    "completedAt": "2026-04-10",
    "verifyUrl": "",
    "pdfUrl": "",
    "featured": false,
    "level": "Intermediate",
    "difficulty": 3,
    "badge": undefined
  },
  {
    "id": "47",
    "title": "Certificate 2026-06-27 at 5.21.10 PM",
    "provider": "Online Platform",
    "category": "Automation & n8n",
    "image": "/certificates/images/cert_47.webp",
    "skills": [
      "Problem Solving"
    ],
    "projects": [
      {
        "id": "workflow-automation",
        "title": "n8n Workflow Automation"
      }
    ],
    "technologies": [
      "OpenAI",
      "Next.js"
    ],
    "takeaways": [
      "Advanced integrations",
      "API Design"
    ],
    "duration": "12 hrs",
    "completedAt": "2026-04-10",
    "verifyUrl": "",
    "pdfUrl": "",
    "featured": false,
    "level": "Intermediate",
    "difficulty": 3,
    "badge": undefined
  },
  {
    "id": "48",
    "title": "Certificate 2026-06-27 at 9.05.21 PM",
    "provider": "Online Platform",
    "category": "Automation & n8n",
    "image": "/certificates/images/cert_48.webp",
    "skills": [
      "Problem Solving"
    ],
    "projects": [
      {
        "id": "workflow-automation",
        "title": "n8n Workflow Automation"
      }
    ],
    "technologies": [
      "OpenAI",
      "Next.js"
    ],
    "takeaways": [
      "Advanced integrations",
      "API Design"
    ],
    "duration": "12 hrs",
    "completedAt": "2026-04-10",
    "verifyUrl": "",
    "pdfUrl": "",
    "featured": false,
    "level": "Intermediate",
    "difficulty": 3,
    "badge": undefined
  },
  {
    "id": "49",
    "title": "Certificate 2026-06-27 at 9.05.22 PM",
    "provider": "Online Platform",
    "category": "Automation & n8n",
    "image": "/certificates/images/cert_49.webp",
    "skills": [
      "Problem Solving"
    ],
    "projects": [
      {
        "id": "workflow-automation",
        "title": "n8n Workflow Automation"
      }
    ],
    "technologies": [
      "OpenAI",
      "Next.js"
    ],
    "takeaways": [
      "Advanced integrations",
      "API Design"
    ],
    "duration": "12 hrs",
    "completedAt": "2026-04-10",
    "verifyUrl": "",
    "pdfUrl": "",
    "featured": false,
    "level": "Intermediate",
    "difficulty": 3,
    "badge": undefined
  },
  {
    "id": "50",
    "title": "Certificate 2026-06-27 at 9.05.25 PM",
    "provider": "Online Platform",
    "category": "Automation & n8n",
    "image": "/certificates/images/cert_50.webp",
    "skills": [
      "Problem Solving"
    ],
    "projects": [
      {
        "id": "workflow-automation",
        "title": "n8n Workflow Automation"
      }
    ],
    "technologies": [
      "OpenAI",
      "Next.js"
    ],
    "takeaways": [
      "Advanced integrations",
      "API Design"
    ],
    "duration": "12 hrs",
    "completedAt": "2026-04-10",
    "verifyUrl": "",
    "pdfUrl": "",
    "featured": false,
    "level": "Intermediate",
    "difficulty": 3,
    "badge": undefined
  },
  {
    "id": "51",
    "title": "Certificate 2026-04-18 at 1.18.05 AM",
    "provider": "Online Platform",
    "category": "Python & Backend",
    "image": "/certificates/images/cert_51.webp",
    "skills": [
      "Problem Solving"
    ],
    "projects": [
      {
        "id": "workflow-automation",
        "title": "n8n Workflow Automation"
      }
    ],
    "technologies": [
      "OpenAI",
      "Next.js"
    ],
    "takeaways": [
      "Advanced integrations",
      "API Design"
    ],
    "duration": "12 hrs",
    "completedAt": "2026-04-10",
    "verifyUrl": "",
    "pdfUrl": "",
    "featured": false,
    "level": "Intermediate",
    "difficulty": 3,
    "badge": undefined
  },
  {
    "id": "52",
    "title": "Certificate 2026-06-27 at 9.05.23 PM",
    "provider": "Online Platform",
    "category": "Python & Backend",
    "image": "/certificates/images/cert_52.webp",
    "skills": [
      "Problem Solving"
    ],
    "projects": [
      {
        "id": "workflow-automation",
        "title": "n8n Workflow Automation"
      }
    ],
    "technologies": [
      "OpenAI",
      "Next.js"
    ],
    "takeaways": [
      "Advanced integrations",
      "API Design"
    ],
    "duration": "12 hrs",
    "completedAt": "2026-04-10",
    "verifyUrl": "",
    "pdfUrl": "",
    "featured": false,
    "level": "Intermediate",
    "difficulty": 3,
    "badge": undefined
  },
  {
    "id": "53",
    "title": "UC-bf0acf2c-985b-413c-9062-de1cebaa9c8c",
    "provider": "Udemy",
    "category": "Data Science",
    "image": "/certificates/images/cert_53.webp",
    "skills": [
      "Problem Solving"
    ],
    "projects": [
      {
        "id": "workflow-automation",
        "title": "n8n Workflow Automation"
      }
    ],
    "technologies": [
      "OpenAI",
      "Next.js"
    ],
    "takeaways": [
      "Advanced integrations",
      "API Design"
    ],
    "duration": "12 hrs",
    "completedAt": "2026-04-10",
    "verifyUrl": "https://ude.my/UC-bf0acf2c-985b-413c-9062-de1cebaa9c8c",
    "pdfUrl": "",
    "featured": false,
    "level": "Intermediate",
    "difficulty": 3,
    "badge": "Verified"
  },
  {
    "id": "54",
    "title": "Certificate 2026-06-27 at 9.05.12 PM",
    "provider": "Online Platform",
    "category": "Data Science",
    "image": "/certificates/images/cert_54.webp",
    "skills": [
      "Problem Solving"
    ],
    "projects": [
      {
        "id": "workflow-automation",
        "title": "n8n Workflow Automation"
      }
    ],
    "technologies": [
      "OpenAI",
      "Next.js"
    ],
    "takeaways": [
      "Advanced integrations",
      "API Design"
    ],
    "duration": "12 hrs",
    "completedAt": "2026-04-10",
    "verifyUrl": "",
    "pdfUrl": "",
    "featured": false,
    "level": "Intermediate",
    "difficulty": 3,
    "badge": undefined
  },
  {
    "id": "55",
    "title": "UC-833e64c3-750d-4831-8361-68b3b4a29d70",
    "provider": "Udemy",
    "category": "LLM & Generative AI",
    "image": "/certificates/images/cert_55.webp",
    "skills": [
      "Python",
      "Machine Learning"
    ],
    "projects": [
      {
        "id": "workflow-automation",
        "title": "n8n Workflow Automation"
      }
    ],
    "technologies": [
      "OpenAI",
      "Next.js"
    ],
    "takeaways": [
      "Advanced integrations",
      "API Design"
    ],
    "duration": "12 hrs",
    "completedAt": "2026-04-10",
    "verifyUrl": "https://ude.my/UC-833e64c3-750d-4831-8361-68b3b4a29d70",
    "pdfUrl": "",
    "featured": false,
    "level": "Intermediate",
    "difficulty": 3,
    "badge": "Verified"
  },
  {
    "id": "56",
    "title": "UC-87445101-1117-4a6e-bf5d-13e44928396a",
    "provider": "Udemy",
    "category": "LLM & Generative AI",
    "image": "/certificates/images/cert_56.webp",
    "skills": [
      "Python",
      "Machine Learning"
    ],
    "projects": [
      {
        "id": "workflow-automation",
        "title": "n8n Workflow Automation"
      }
    ],
    "technologies": [
      "OpenAI",
      "Next.js"
    ],
    "takeaways": [
      "Advanced integrations",
      "API Design"
    ],
    "duration": "12 hrs",
    "completedAt": "2026-04-10",
    "verifyUrl": "https://ude.my/UC-87445101-1117-4a6e-bf5d-13e44928396a",
    "pdfUrl": "",
    "featured": false,
    "level": "Intermediate",
    "difficulty": 3,
    "badge": "Verified"
  }
];

// ─── Experience ──────────────────────────────
export const experiences: Experience[] = [
  {
    title: 'مطور واجهات أمامية أول',
    company: 'شركة تيك كورب',
    period: '2023 – الآن',
    description:
      'قيادة فريق تطوير الواجهات لبناء منصة تفاعلية تخدم أكثر من 100 ألف مستخدم نشط. تقليص حجم الحزم البرمجية بنسبة 40% ورفع تقييم Lighthouse إلى أكثر من 95.',
  },
];
