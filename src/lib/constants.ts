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

// ─── Certificates ────────────────────────────
export const certificates: Certificate[] = [
  {
    title: 'AWS Solutions Architect معتمد',
    issuer: 'Amazon Web Services',
    date: '2025-03',
    url: 'https://example.com/cert-1',
    image: '/certs/cert-1.webp',
  },
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
