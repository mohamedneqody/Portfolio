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
  title: 'مهندس بيانات وذكاء اصطناعي ومطور ويب متكامل (Data Science & AI Engineer, Full Stack Developer)',
  description:
    'مهندس متكامل في الذكاء الاصطناعي وبناء تطبيقات الويب الحديثة، متخصص في تعلم الآلة، التعلم العميق، والنماذج اللغوية الكبيرة.',
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
    title: 'AI Automation Systems',
    description: 'تطوير أنظمة أتمتة ذكية تعتمد على النماذج اللغوية الكبيرة (LLMs) لتبسيط العمليات المعقدة وتقليل التدخل البشري.',
    icon: 'brain',
  },
  {
    title: 'Web Applications',
    description: 'بناء تطبيقات ويب متكاملة وعالية الأداء باستخدام أحدث التقنيات مثل Next.js و React لضمان أفضل تجربة مستخدم.',
    icon: 'layout',
  },
  {
    title: 'Data & Analytics Solutions',
    description: 'تصميم حلول متقدمة لتحليل البيانات واستخراج الرؤى الدقيقة التي تساعد في اتخاذ قرارات استراتيجية مبنية على البيانات.',
    icon: 'database',
  },
  {
    title: 'Workflow Automation',
    description: 'أتمتة سير العمل باستخدام أدوات مثل n8n لربط الأنظمة المختلفة وزيادة الإنتاجية بشكل ملحوظ.',
    icon: 'cpu',
  },
];

// ─── Projects ────────────────────────────────
export const projects: Project[] = [
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
  { name: 'AI Automation', years: '3+ Years', icon: 'brain', category: 'الذكاء الاصطناعي والأتمتة' },
  { name: 'Python', years: '5+ Years', icon: 'terminal', category: 'الذكاء الاصطناعي والأتمتة' },
  { name: 'n8n', years: '2+ Years', icon: 'workflow', category: 'الذكاء الاصطناعي والأتمتة' },
  
  { name: 'Next.js', years: '3+ Years', icon: 'layout', category: 'تطوير الويب' },
  { name: 'React', years: '4+ Years', icon: 'code', category: 'تطوير الويب' },
  
  { name: 'PostgreSQL', years: '4+ Years', icon: 'database', category: 'البنية التحتية' },
  { name: 'Docker', years: '3+ Years', icon: 'container', category: 'البنية التحتية' },
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
  { label: 'مشاريع مكتملة', value: 50,   suffix: '+' },
  { label: 'سنوات الخبرة',   value: 5,    suffix: '+' },
  { label: 'عملاء سعداء',      value: 30,   suffix: '+' },
  { label: 'نجوم جيتهاب',       value: 1200, suffix: '+' },
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
