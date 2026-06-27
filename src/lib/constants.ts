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
  { id: 1, title: "152859227", issuer: "Unknown", date: '2026', category: 'AI & Machine Learning', image: '/certificates/images/cert_1.webp', pdfUrl: '' },
  { id: 2, title: "153199135", issuer: "Unknown", date: '2026', category: 'AI & Machine Learning', image: '/certificates/images/cert_2.webp', pdfUrl: '' },
  { id: 3, title: "Coursera 605OLH14TTRC_copy", issuer: "Coursera / Udemy", date: '2026', category: 'AI & Machine Learning', image: '/certificates/images/cert_3.webp', pdfUrl: '' },
  { id: 4, title: "Coursera ALYPZMT8QRKJ_copy", issuer: "Coursera / Udemy", date: '2026', category: 'AI & Machine Learning', image: '/certificates/images/cert_4.webp', pdfUrl: '' },
  { id: 5, title: "Coursera FJ27J0NCFC8K_copy", issuer: "Coursera / Udemy", date: '2026', category: 'AI & Machine Learning', image: '/certificates/images/cert_5.webp', pdfUrl: '' },
  { id: 6, title: "Coursera J7A1SXCS5RFL", issuer: "Coursera / Udemy", date: '2026', category: 'AI & Machine Learning', image: '/certificates/images/cert_6.webp', pdfUrl: '' },
  { id: 7, title: "Coursera Q8UW44EU09F0_copy", issuer: "Coursera / Udemy", date: '2026', category: 'AI & Machine Learning', image: '/certificates/images/cert_7.webp', pdfUrl: '' },
  { id: 8, title: "Coursera QZDGRSNPSF7C_copy", issuer: "Coursera / Udemy", date: '2026', category: 'AI & Machine Learning', image: '/certificates/images/cert_8.webp', pdfUrl: '' },
  { id: 9, title: "UC-29c16e5a-c882-4ddc-b3e3-5546aca36d97", issuer: "Coursera / Udemy", date: '2026', category: 'AI & Machine Learning', image: '/certificates/images/cert_9.webp', pdfUrl: '' },
  { id: 10, title: "UC-a770b1ea-2304-4825-b1e9-0a8a15b4794d", issuer: "Coursera / Udemy", date: '2026', category: 'AI & Machine Learning', image: '/certificates/images/cert_10.webp', pdfUrl: '' },
  { id: 11, title: "شهاده اكسيل", issuer: "Unknown", date: '2026', category: 'AI & Machine Learning', image: '/certificates/images/cert_11.webp', pdfUrl: '' },
  { id: 12, title: "UC-87445101-1117-4a6e-bf5d-13e44928396a", issuer: "Coursera / Udemy", date: '2026', category: 'Automation & n8n', image: '/certificates/images/cert_12.webp', pdfUrl: '' },
  { id: 13, title: "Coursera 0M946GOQMW9J_copy", issuer: "Coursera / Udemy", date: '2026', category: 'Python & Backend', image: '/certificates/images/cert_13.webp', pdfUrl: '' },
  { id: 14, title: "Coursera 739G9LKBNODC_copy", issuer: "Coursera / Udemy", date: '2026', category: 'Python & Backend', image: '/certificates/images/cert_14.webp', pdfUrl: '' },
  { id: 15, title: "Coursera D69F7M63BV1J_copy", issuer: "Coursera / Udemy", date: '2026', category: 'Python & Backend', image: '/certificates/images/cert_15.webp', pdfUrl: '' },
  { id: 16, title: "Coursera database", issuer: "Coursera / Udemy", date: '2026', category: 'Python & Backend', image: '/certificates/images/cert_16.webp', pdfUrl: '' },
  { id: 17, title: "Coursera IKGTFHY6MESI_copy", issuer: "Coursera / Udemy", date: '2026', category: 'Python & Backend', image: '/certificates/images/cert_17.webp', pdfUrl: '' },
  { id: 18, title: "Coursera VRMF6XQ365JF_copy", issuer: "Coursera / Udemy", date: '2026', category: 'Python & Backend', image: '/certificates/images/cert_18.webp', pdfUrl: '' },
  { id: 19, title: "UC-91cf41a5-b0fd-42f6-b23e-8324dbdf8fb6", issuer: "Coursera / Udemy", date: '2026', category: 'Python & Backend', image: '/certificates/images/cert_19.webp', pdfUrl: '' },
  { id: 20, title: "UC-bf40ef85-776e-4da2-beba-114baf6aadb6", issuer: "Coursera / Udemy", date: '2026', category: 'Python & Backend', image: '/certificates/images/cert_20.webp', pdfUrl: '' },
  { id: 21, title: "184366483", issuer: "Unknown", date: '2026', category: 'Cloud & DevOps', image: '/certificates/images/cert_21.webp', pdfUrl: '' },
  { id: 22, title: "Coursera UT5ZZND3F2Q8_copy", issuer: "Coursera / Udemy", date: '2026', category: 'Cloud & DevOps', image: '/certificates/images/cert_22.webp', pdfUrl: '' },
  { id: 23, title: "UC-b09685d3-aa01-4eeb-8246-20b95d398c23", issuer: "Coursera / Udemy", date: '2026', category: 'Cloud & DevOps', image: '/certificates/images/cert_23.webp', pdfUrl: '' },
  { id: 24, title: "6", issuer: "Online Platform", date: '2026', category: 'AI & Machine Learning', image: '/certificates/images/cert_24.webp', pdfUrl: '' },
  { id: 25, title: "WhatsApp Ima5ge 2026-06-27 at 9.05.26 PM", issuer: "Online Platform", date: '2026', category: 'AI & Machine Learning', image: '/certificates/images/cert_25.webp', pdfUrl: '' },
  { id: 26, title: "Certificate 2026-01-27 at 10.40.51 PM", issuer: "Online Platform", date: '2026', category: 'AI & Machine Learning', image: '/certificates/images/cert_26.webp', pdfUrl: '' },
  { id: 27, title: "Certificate 2026-02-11 at 9.10.47 AM", issuer: "Online Platform", date: '2026', category: 'AI & Machine Learning', image: '/certificates/images/cert_27.webp', pdfUrl: '' },
  { id: 28, title: "Certificate 2026-04-18 at 1.10.35 AM", issuer: "Online Platform", date: '2026', category: 'AI & Machine Learning', image: '/certificates/images/cert_28.webp', pdfUrl: '' },
  { id: 29, title: "Certificate 2026-04-18 at 1.18.05 AM", issuer: "Online Platform", date: '2026', category: 'AI & Machine Learning', image: '/certificates/images/cert_29.webp', pdfUrl: '' },
  { id: 30, title: "Certificate 2026-06-1at 9.05.19 PM", issuer: "Online Platform", date: '2026', category: 'AI & Machine Learning', image: '/certificates/images/cert_30.webp', pdfUrl: '' },
  { id: 31, title: "Certificate 2026-06-227 at 9.05.19 PM", issuer: "Online Platform", date: '2026', category: 'AI & Machine Learning', image: '/certificates/images/cert_31.webp', pdfUrl: '' },
  { id: 32, title: "Certificate 2026-06-27 1at 9.05.18 PM", issuer: "Online Platform", date: '2026', category: 'AI & Machine Learning', image: '/certificates/images/cert_32.webp', pdfUrl: '' },
  { id: 33, title: "Certificate 2026-06-27 at 9.05.22ee PM", issuer: "Online Platform", date: '2026', category: 'AI & Machine Learning', image: '/certificates/images/cert_33.webp', pdfUrl: '' },
  { id: 34, title: "Certificate 2026-06-27 at 9.05.23 11PM", issuer: "Online Platform", date: '2026', category: 'AI & Machine Learning', image: '/certificates/images/cert_34.webp', pdfUrl: '' },
  { id: 35, title: "Certificate 2026-06-27 at 9.05.23 P4M", issuer: "Online Platform", date: '2026', category: 'AI & Machine Learning', image: '/certificates/images/cert_35.webp', pdfUrl: '' },
  { id: 36, title: "Certificate 2026-06-27 at 9.05.23 PM", issuer: "Online Platform", date: '2026', category: 'AI & Machine Learning', image: '/certificates/images/cert_36.webp', pdfUrl: '' },
  { id: 37, title: "Certificate 2026-06-27 at 9.05.26 PM", issuer: "Online Platform", date: '2026', category: 'AI & Machine Learning', image: '/certificates/images/cert_37.webp', pdfUrl: '' },
  { id: 38, title: "Certificate 2026-06-27 at 9.05.26 PM1", issuer: "Online Platform", date: '2026', category: 'AI & Machine Learning', image: '/certificates/images/cert_38.webp', pdfUrl: '' },
  { id: 39, title: "Certificate 2026-06-27 at 9.05.26 PM2", issuer: "Online Platform", date: '2026', category: 'AI & Machine Learning', image: '/certificates/images/cert_39.webp', pdfUrl: '' },
  { id: 40, title: "Certificate 2026-06-27 at 9.05.27 PM", issuer: "Online Platform", date: '2026', category: 'AI & Machine Learning', image: '/certificates/images/cert_40.webp', pdfUrl: '' },
  { id: 41, title: "Certificate 2026-06-271 at 9.05.18 PM", issuer: "Online Platform", date: '2026', category: 'AI & Machine Learning', image: '/certificates/images/cert_41.webp', pdfUrl: '' },
  { id: 42, title: "Certificate22 2026-06-27 at 9.05.22 PM", issuer: "Online Platform", date: '2026', category: 'AI & Machine Learning', image: '/certificates/images/cert_42.webp', pdfUrl: '' },
  { id: 43, title: "UC-207beef1-f75c-46a9-89ef-93a9ac962336", issuer: "Online Platform", date: '2026', category: 'Automation & n8n', image: '/certificates/images/cert_43.webp', pdfUrl: '' },
  { id: 44, title: "UC-d64ae192-c77b-43a0-87e0-683422100a4d", issuer: "Online Platform", date: '2026', category: 'Automation & n8n', image: '/certificates/images/cert_44.webp', pdfUrl: '' },
  { id: 45, title: "UC-fabaff13-3b9f-4f76-9482-42419f08b795", issuer: "Online Platform", date: '2026', category: 'Automation & n8n', image: '/certificates/images/cert_45.webp', pdfUrl: '' },
  { id: 46, title: "Certificate 2026-06-27 at 5.19.34 PM", issuer: "Online Platform", date: '2026', category: 'Automation & n8n', image: '/certificates/images/cert_46.webp', pdfUrl: '' },
  { id: 47, title: "Certificate 2026-06-27 at 5.21.10 PM", issuer: "Online Platform", date: '2026', category: 'Automation & n8n', image: '/certificates/images/cert_47.webp', pdfUrl: '' },
  { id: 48, title: "Certificate 2026-06-27 at 9.05.21 PM", issuer: "Online Platform", date: '2026', category: 'Automation & n8n', image: '/certificates/images/cert_48.webp', pdfUrl: '' },
  { id: 49, title: "Certificate 2026-06-27 at 9.05.22 PM", issuer: "Online Platform", date: '2026', category: 'Automation & n8n', image: '/certificates/images/cert_49.webp', pdfUrl: '' },
  { id: 50, title: "Certificate 2026-06-27 at 9.05.25 PM", issuer: "Online Platform", date: '2026', category: 'Automation & n8n', image: '/certificates/images/cert_50.webp', pdfUrl: '' },
  { id: 51, title: "Certificate 2026-04-18 at 1.18.05 AM", issuer: "Online Platform", date: '2026', category: 'Python & Backend', image: '/certificates/images/cert_51.webp', pdfUrl: '' },
  { id: 52, title: "Certificate 2026-06-27 at 9.05.23 PM", issuer: "Online Platform", date: '2026', category: 'Python & Backend', image: '/certificates/images/cert_52.webp', pdfUrl: '' },
  { id: 53, title: "UC-bf0acf2c-985b-413c-9062-de1cebaa9c8c", issuer: "Online Platform", date: '2026', category: 'Data Science', image: '/certificates/images/cert_53.webp', pdfUrl: '' },
  { id: 54, title: "Certificate 2026-06-27 at 9.05.12 PM", issuer: "Online Platform", date: '2026', category: 'Data Science', image: '/certificates/images/cert_54.webp', pdfUrl: '' },
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
