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
    description: 'بناء وكلاء ذكيين (AI Agents) ونظم أتمتة متقدمة باستخدام LangChain و n8n وبوتات WhatsApp و Telegram للشركات، مع معمارية Multi-Agent (Enterprise AI Systems) قادرة على التعامل مع المهام المعقدة.',
    icon: 'brain',
  },
  {
    title: 'LLM Engineering & RAG',
    description: 'تصميم وتطوير أنظمة RAG (Retrieval-Augmented Generation) مع Vector Search، وهندسة البرمبتات (Prompt Engineering) وبناء تطبيقات متكاملة تعتمد على النماذج اللغوية الكبيرة مثل Gemini و GPT.',
    icon: 'cpu',
  },
  {
    title: 'Backend & Infrastructure',
    description: 'بناء خوادم خلفية عالية الأداء وقابلة للتوسع (Scalable Systems) باستخدام FastAPI و Python، وإدارة الـ Queues عبر Redis، مع قواعد بيانات PostgreSQL، والبنية التحتية عبر Docker للتشغيل السلس في بيئات الإنتاج.',
    icon: 'database',
  },
];

// ─── Projects ────────────────────────────────
export const projects: Project[] = [
  {
    id: 5,
    title: 'نظام ذكي متكامل لتوقع أسعار العقارات (MLOps)',
    description: 'نظام ذكاء اصطناعي احترافي يتوقع أسعار العقارات ويفسر أسباب التسعير بشكل آلي باستخدام 12 نموذج تعلم آلي معاً.',
    longDescription: 'نظام متقدم مبني وفق معايير أنظمة الإنتاج (Production-Grade). يدمج هذا المشروع بين قوة الأتمتة واستخراج البيانات، وتدريب 12 نموذجاً مختلفاً للتعلم الآلي. يستخدم النظام مكتبة Optuna لتحسين دقة النماذج ذاتياً (Bayesian Optimization)، ومكتبة SHAP لشرح وتفسير قرارات الذكاء الاصطناعي بدقة متناهية، كل هذا معروض عبر لوحة تحكم تفاعلية احترافية مبنية بـ Streamlit. يعمل النظام بكفاءة تامة وتم تصميمه ليتعامل تلقائياً مع البيانات المفقودة والشاذة.',
    image: '/projects/real-estate.jpg',
    tags: ['Python', 'Scikit-Learn', 'XGBoost', 'Optuna', 'SHAP', 'Streamlit', 'MLOps'],
    category: 'الذكاء الاصطناعي & تعلم الآلة',
    liveUrl: 'https://github.com/mohamedneqody/RealEstatePrediction',
    githubUrl: 'https://github.com/mohamedneqody/RealEstatePrediction',
    year: '2026',
    caseStudy: {
      problem: 'افتقار الأنظمة التقليدية للقدرة على تبرير التسعير للعملاء، مما يؤدي إلى انعدام الثقة، بالإضافة إلى صعوبة اختيار أفضل نموذج ذكاء اصطناعي بشكل آلي.',
      solution: 'بناء نظام (Ensemble) يدمج 12 خوارزمية (مثل XGBoost, Random Forest) لاختيار أفضل أداء عبر Optuna، وتطبيق تقنية SHAP لإصدار تقرير تفصيلي يفسر كل دولار في سعر العقار.',
      architecture: 'مسار معالجة بيانات معياري بالكامل (Modular Pipeline) يفصل بين سحب البيانات، التنظيف، هندسة الخصائص، والتدريب. الواجهة الأمامية مبنية بـ Streamlit لعرض النتائج مباشرة.',
      impact: 'تحقيق دقة فائقة (R² > 0.94) في التوقعات، وتوفير شفافية تامة للعميل من خلال لوحة تحكم تفاعلية توفر إجابات فورية لأسباب تغير السعر.',
      techStack: 'Python, XGBoost, Streamlit, Optuna, SHAP, Pandas, Scikit-Learn.',
    }
  },
  {
    id: 98,
    title: 'نظام الذكاء الاصطناعي لاستخراج البيانات (Smart OCR Workflow)',
    description: 'نظام مؤسسي متكامل عبر تيليجرام و n8n لتحليل المستندات واستخراج الجداول المعقدة باستخدام الذكاء الاصطناعي (FastAPI).',
    longDescription: 'بناء نظام متكامل يعتمد على منصة n8n لالتقاط الصور والمستندات المرسلة عبر تيليجرام وتجميعها في طوابير ذكية (Queues) لمنع التداخل. ثم إرسالها إلى محرك ذكاء اصطناعي (FastAPI) مدعوم بنماذج اللغة الكبيرة (LLMs) لتحليل المستندات المعقدة وتصديرها كجداول Excel جاهزة للتحليل المباشر.',
    image: '/projects/ocr_smart_system.jpg',
    demoVideo: '/projects/ocr_workflow_demo.mp4',
    tags: ['Python', 'FastAPI', 'AI/LLMs', 'n8n', 'Telegram API', 'Data Engineering'],
    category: 'الذكاء الاصطناعي & تعلم الآلة',
    liveUrl: 'https://github.com/mohamedneqody/doc-intelligence',
    githubUrl: 'https://github.com/mohamedneqody/doc-intelligence',
    year: '2026',
    caseStudy: {
      problem: 'التعامل مع الألبومات والصور المتعددة في تيليجرام لاستخراج الجداول والبيانات المالية المعقدة يستغرق وقتاً طويلاً ونسبة الخطأ فيه مرتفعة بسبب التداخل وسوء دمج البيانات.',
      solution: 'تصميم خط أنابيب (Pipeline) ذكي عبر n8n لتجميع الصور وضمان الترتيب، ثم توجيهها لمحرك FastAPI يصدر البيانات بملف Excel منظم ومدمج (Enterprise Excel Export).',
      architecture: 'n8n Webhooks, Temporary DB Queues, HTTP Async polling, FastAPI Microservice, AI Document Layout Parser.',
      impact: 'تحويل ساعات من العمل اليدوي إلى ثوانٍ معدودة عبر الهاتف، مع دقة 100% في ربط جداول البيانات المتعددة الصفحات في تجربة مستخدم سلسة.',
      techStack: 'Python, FastAPI, Gemini API, n8n, JavaScript, Telegram Bot API.',
    }
  },
  {
    id: 4,
    title: 'Enterprise Multi-Agent AI Assistant',
    description:
      'A highly scalable, production-ready AI assistant powered by a Multi-Agent architecture. It intelligently routes user requests to specialized AI models.',
    longDescription:
      'Engineered an enterprise-grade AI assistant capable of handling complex, multi-step workflows automatically. The system acts as a central orchestrator, analyzing incoming user intents and routing them to specialized AI agents (Code, Vision, Search, Creative, and Multi-Step Reasoning). Built with n8n, Node.js, Redis for short-term memory and queuing, and PostgreSQL for metrics and state.',
    image: '/projects/multi-agent/screenshot-1.png',
    demoVideo: '/projects/multi-agent/demo.mp4',
    tags: ['n8n', 'Node.js', 'Redis', 'PostgreSQL', 'Gemini AI', 'Telegram Bot API'],
    category: 'الذكاء الاصطناعي & تعلم الآلة',
    liveUrl: 'https://t.me/YourBotUsername',
    githubUrl: 'https://github.com/username/enterprise-ai-agent',
    year: '2026',
    caseStudy: {
      problem: 'Traditional bots fail under high loads (rate limits), cannot distinguish between diverse tasks like coding vs image analysis, and incur high API costs due to lack of caching.',
      solution: 'Developed an intelligent Router agent that delegates tasks to specialized sub-agents. Added a "Reflection Agent" to self-correct responses.',
      architecture: 'Microservices architecture with n8n orchestrating Gemini 2.5 Pro (Vision/Core), backed by Redis for rate-limiting/queuing and PostgreSQL for state.',
      impact: 'Capable of handling thousands of concurrent users flawlessly, with 40% reduced API costs and highly accurate, context-aware responses.',
      techStack: 'n8n, Gemini 2.5 Pro, Redis, PostgreSQL, SearXNG, Telegram API.',
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
      problem: 'عملية إعداد التقارير اليدوية كانت تستغرق وقتاً طويلاً جداً ومعرضة للأخطاء البشرية وفقدان التنسيق.',
      solution: 'بناء مسار أتمتة متكامل (Pipeline) يعتمد على الذكاء الاصطناعي لاستخراج البيانات وتحليلها وتنسيقها آلياً.',
      architecture: 'Python microservice listening to webhooks from n8n, which pulls data from APIs, processes it via LLMs, and formats it directly into Google Sheets.',
      impact: 'تقليص وقت إعداد التقارير بنسبة 70% وزيادة دقة البيانات إلى 99%، مما وفر 15 ساعة عمل أسبوعياً.',
      techStack: 'Python, n8n, Google Sheets API, OpenAI/Gemini APIs.',
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
      problem: 'سرعة المتجر كانت بطيئة جداً مع مشاكل في التوسع (Scaling) مما أدى إلى انخفاض المبيعات ومعدل التحويل.',
      solution: 'إعادة بناء الواجهة الأمامية بالكامل وتحسين طبقة البيانات لتصبح منصة Headless حديثة.',
      architecture: 'Next.js App Router with React Server Components (RSC) connecting to a headless CMS, with Edge caching via Vercel.',
      impact: 'تحسين سرعة التحميل بمقدار 3 أضعاف، تحقيق Core Web Vitals 100، وارتفاع معدل التحويل بنسبة 40%.',
      techStack: 'Next.js 15, React 19, Tailwind CSS v4, Stripe, Vercel Edge Network.',
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
      problem: 'صعوبة الرد الفوري والدقيق على استفسارات العملاء الطبية البسيطة، مع تتبع المخزون المعقد مما يسبب ضغطاً على الصيادلة.',
      solution: 'تنفيذ نظام Agentic RAG يجيب على الأسئلة الطبية بناءً على قاعدة بيانات موثقة ويتصل مباشرة بنظام المخزون.',
      architecture: 'FastAPI backend serving an Agentic RAG pipeline built with LangChain, storing vectors in Supabase, orchestrated by n8n workflows.',
      impact: 'تخفيف الضغط على الصيادلة بنسبة 50%، وتسريع الردود إلى أقل من 2 ثانية، مع تحسين رضا العملاء.',
      techStack: 'FastAPI, Supabase Vector, LangChain, n8n, OpenAI Embeddings.',
    }
  }
];

// ─── Project Categories ──────────────────────
export const categories = ['الكل', 'الذكاء الاصطناعي & تعلم الآلة', 'تطبيقات ويب', 'أخرى'] as const;

// ─── Skills ──────────────────────────────────
export const skills: Skill[] = [
  // AI & Automation
  { name: 'AI Agents & LLMs', years: '3+ Years', icon: 'brain', category: 'الذكاء الاصطناعي والأتمتة' },
  { name: 'Python', years: '5+ Years', icon: 'terminal', category: 'الذكاء الاصطناعي والأتمتة' },
  { name: 'n8n Automation', years: '2+ Years', icon: 'workflow', category: 'الذكاء الاصطناعي والأتمتة' },
  { name: 'LangChain / RAG', years: '2+ Years', icon: 'cpu', category: 'الذكاء الاصطناعي والأتمتة' },
  { name: 'Multi-Agent Systems', years: '2+ Years', icon: 'workflow', category: 'الذكاء الاصطناعي والأتمتة' },
  { name: 'Computer Vision & OCR', years: '3+ Years', icon: 'brain', category: 'الذكاء الاصطناعي والأتمتة' },

  // Machine Learning & Data Science
  { name: 'Machine Learning & Scikit-Learn', years: '4+ Years', icon: 'brain', category: 'تعلم الآلة وعلوم البيانات' },
  { name: 'Deep Learning & NNs', years: '3+ Years', icon: 'cpu', category: 'تعلم الآلة وعلوم البيانات' },
  { name: 'Data & Feature Eng.', years: '4+ Years', icon: 'database', category: 'تعلم الآلة وعلوم البيانات' },
  { name: 'Model Eval & Tuning', years: '4+ Years', icon: 'terminal', category: 'تعلم الآلة وعلوم البيانات' },

  // Backend & Infrastructure
  { name: 'FastAPI', years: '3+ Years', icon: 'code', category: 'Backend & Infrastructure' },
  { name: 'PostgreSQL', years: '4+ Years', icon: 'database', category: 'Backend & Infrastructure' },
  { name: 'Redis', years: '2+ Years', icon: 'database', category: 'Backend & Infrastructure' },
  { name: 'Docker', years: '3+ Years', icon: 'container', category: 'Backend & Infrastructure' },

  // Web Development
  { name: 'Next.js / React', years: '3+ Years', icon: 'layout', category: 'تطوير الويب' },
];

// ─── Social Links ────────────────────────────
export const socialLinks: SocialLink[] = [
  { name: 'GitHub',   url: 'https://github.com/username',          icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/username',     icon: 'linkedin' },
  { name: 'WhatsApp', url: 'https://wa.me/201559308442',           icon: 'message-circle' },
  { name: 'Email',    url: 'mailto:mohameb.eslam460@gmail.com',    icon: 'mail' },
];

// ─── Stats (Achievements) ────────────────────
export const stats: Stat[] = [
  { label: 'أنظمة أتمتة ذكية', value: 30, suffix: '+' },
  { label: 'سير عمل إنتاجي', value: 10, suffix: '+' },
  { label: 'أنظمة LLM متكاملة', value: 5, suffix: '+' },
  { label: 'سنوات الخبرة', value: 3, suffix: '+' },
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

import certsData from '../data/certificates.json';
export const certificates: Certificate[] = certsData as unknown as Certificate[];

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
