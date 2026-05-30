import { useState, useEffect, useRef, type ReactNode } from "react";
import {
  FaPython,
  FaDocker,
  FaBrain,
  FaCloud,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaExternalLinkAlt,
  FaChartLine,
  FaArrowRight,
  FaHome,
  FaUser,
  FaFolderOpen,
  FaBriefcase,
  FaCogs,
  FaPaperPlane,
  FaHeart,
  FaStar,
} from "react-icons/fa";
import {
  SiFastapi,
  SiPostgresql,
  SiPytorch,
  SiScikitlearn,
  SiReact,
  SiRedis,
  SiMlflow,
  SiOpenai,
} from "react-icons/si";
import profileImage from "./assets/profile.png";
import heroImage from "./assets/hero-dashboard.png";

/* ══════════════════════════════
   NEURAL CANVAS
══════════════════════════════ */
function NeuralCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -1000, y: -1000 });
  const raf = useRef(0);

  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d")!;
    const resize = () => {
      c.width = window.innerWidth;
      c.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    });

    const N = window.innerWidth < 768 ? 35 : 70;
    const nodes = Array.from({ length: N }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.4 + 0.4,
      p: Math.random() * Math.PI * 2,
    }));

    const D = 155,
      MD = 210;
    const draw = () => {
      c.width = window.innerWidth;
      c.height = window.innerHeight;
      ctx.clearRect(0, 0, c.width, c.height);
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        n.p += 0.022;
        if (n.x < 0 || n.x > c.width) n.vx *= -1;
        if (n.y < 0 || n.y > c.height) n.vy *= -1;
        const mx = mouse.current.x - n.x,
          my = mouse.current.y - n.y;
        const md = Math.sqrt(mx * mx + my * my);
        if (md < MD) {
          const f = (1 - md / MD) * 0.5;
          n.vx -= (mx / md) * f * 0.07;
          n.vy -= (my / md) * f * 0.07;
        }
        const sp = Math.sqrt(n.vx * n.vx + n.vy * n.vy);
        if (sp > 1.1) {
          n.vx = (n.vx / sp) * 1.1;
          n.vy = (n.vy / sp) * 1.1;
        }
      });
      for (let i = 0; i < nodes.length; i++)
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i],
            b = nodes[j],
            dx = a.x - b.x,
            dy = a.y - b.y,
            d = Math.sqrt(dx * dx + dy * dy);
          if (d < D) {
            const al = (1 - d / D) * 0.32;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(0,212,255,${al})`;
            ctx.lineWidth = al * 1.1;
            ctx.stroke();
          }
        }
      nodes.forEach((n) => {
        const g = Math.sin(n.p) * 0.3 + 0.7;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * g * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,212,255,${g * 0.12})`;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,212,255,${g * 0.75})`;
        ctx.fill();
      });
      raf.current = requestAnimationFrame(draw);
    };
    raf.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}
    />
  );
}

/* ══════════════════════════════
   DATA
══════════════════════════════ */
const ML_PROJECTS = [
  {
    id: "sessionscout",
    name: "SessionScout",
    tagline: "Real-time E-commerce Conversion Scoring",
    type: "ML Systems",
    typeClass: "term",
    badge: "AUC 0.9868",
    desc: "4-model cascade (LR → XGBoost → LSTM → Transformer) predicting mid-session purchase probability at sub-30ms latency. Confidence-gated escalation cuts GPU inference cost by 60%.",
    stack: [
      "PyTorch",
      "LSTM",
      "XGBoost",
      "FastAPI",
      "Redis",
      "Docker",
      "HuggingFace",
    ],
    metrics: ["AUC 0.9868", "27ms p95", "121 tests", "93% cov"],
    github: "https://github.com/MohammedAhmeduddin",
    live: "https://huggingface.co/spaces/AhmeduddinMohammed/sessionscout",
    highlight:
      "Bidirectional LSTM (256 hidden, 2-layer) + 4-head self-attention. Ladder escalation routes 60% of sessions to LR/XGBoost, saving GPU compute.",
    color: "#00d4ff",
  },
  {
    id: "liftlab",
    name: "LiftLab",
    tagline: "Production Causal Inference Engine",
    type: "Causal AI",
    typeClass: "term-violet",
    badge: "14M rows",
    desc: "5 parallel causal estimators (PSM, DiD, T-Learner, X-Learner, CausalForestDML) on 14M-row Criteo dataset. Per-customer CATE with confidence intervals. Segments with 3.5x average lift identified.",
    stack: ["DoWhy", "EconML", "CausalForest", "SHAP", "MLflow", "PSI", "MMD"],
    metrics: ["CATE 3.5x", "14M rows", "53+ tests", "81% cov"],
    github: "https://github.com/MohammedAhmeduddin",
    live: "",
    highlight:
      "CausalForestDML honest splitting prevents leaf estimation bias. MMD kernel test flagged severe distribution shift at 0.136.",
    color: "#8b5cf6",
  },
  {
    id: "loanlens",
    name: "LoanLens",
    tagline: "AI Credit Risk Explainer — Reg-B Compliant",
    type: "RAG + ML",
    typeClass: "term-pink",
    badge: "Grounding 1.0",
    desc: "XGBoost scorer + SHAP top-5 risk factors mapped to CFPB Reg-B codes, retrieved via ChromaDB RAG (9,977 regulatory chunks), synthesized into legally-grounded notices by GPT-4o-mini.",
    stack: [
      "XGBoost",
      "SHAP",
      "LangChain",
      "ChromaDB",
      "GPT-4o-mini",
      "dbt",
      "PostgreSQL",
    ],
    metrics: ["AUC 0.77", "Grounding 1.0", "96 tests", "<4s E2E"],
    github: "https://github.com/MohammedAhmeduddin",
    live: "https://huggingface.co/spaces/AhmeduddinMohammed/loanlens",
    highlight:
      "Function calling forces structured JSON at temperature=0 for legal determinism. Cosine similarity threshold 0.7 blocks hallucination from weak retrievals.",
    color: "#f472b6",
  },
  {
    id: "careagent",
    name: "CareAgent",
    tagline: "Multi-Agent Healthcare Analytics Pipeline",
    type: "LLM Agents",
    typeClass: "term-green",
    badge: "GCP Cloud Run",
    desc: "LangGraph StateGraph routing 5 specialized agents over 10K CMS Medicare providers. Supervisor dispatches to DataCleaner, Statistical scorer, Isolation Forest anomaly detector, Summarizer, and Reporter.",
    stack: [
      "LangGraph",
      "LangChain",
      "GPT-4o-mini",
      "Isolation Forest",
      "GCP Cloud Run",
      "PostgreSQL",
      "MLflow",
    ],
    metrics: ["0.36s pipeline", "3% anomaly", "99 tests", "92% cov"],
    github: "https://github.com/MohammedAhmeduddin/careagent",
    live: "https://huggingface.co/spaces/AhmeduddinMohammed/careagent",
    highlight:
      "Pre-reserved schema fields prevent inter-agent column bugs. Template fallback guarantees pipeline completion even on LLM rate limits or API outages.",
    color: "#10b981",
  },
];

const OTHER_PROJECTS = [
  {
    id: "financial",
    name: "AI Financial Analyst",
    tagline: "RAG-Powered Quarterly Variance Engine",
    type: "AI + Backend",
    typeClass: "term-amber",
    desc: "Ingests quarterly financial PDFs, runs deterministic variance decomposition, and generates auditable analyst commentary with citation grounding.",
    stack: ["FastAPI", "React", "OpenAI", "pdfplumber", "Vercel"],
    metrics: ["100% reconciled", "Zero residuals", "Citation-grounded"],
    github:
      "https://github.com/MohammedAhmeduddin/quarterly-financial-variance-analyzer",
    live: "https://ai-financial-report-analyst-fawn.vercel.app",
    color: "#f59e0b",
  },
  {
    id: "moneybrain",
    name: "AI Money Brain",
    tagline: "Multi-Bank Finance Copilot",
    type: "Full Stack + AI",
    typeClass: "term",
    desc: "Universal CSV parser for 5+ banks, GPT-4 categorization across 13 categories, 5 dashboard analytics endpoints, JWT auth, and 192 passing tests.",
    stack: ["FastAPI", "PostgreSQL", "GPT-4", "JWT", "Docker", "Alembic"],
    metrics: ["192 tests", "92% cov", "<100ms API"],
    github: "https://github.com/MohammedAhmeduddin/ai-money-brain",
    live: "https://ai-money-brain-api.onrender.com/docs",
    color: "#00d4ff",
  },
  {
    id: "devtracker",
    name: "Portfolio Tracker",
    tagline: "Full-Stack SaaS Dashboard",
    type: "Full Stack",
    typeClass: "term-violet",
    desc: "Auth-enabled developer management platform with protected routes, Recharts analytics, dark/light mode, live search, and Vercel CI/CD.",
    stack: ["React", "TypeScript", "Recharts", "Vite", "Vercel"],
    metrics: ["Auth + guards", "Live search", "Auto-deploy"],
    github: "https://github.com/MohammedAhmeduddin/developer-portfolio-tracker",
    live: "https://developer-portfolio-tracker.vercel.app",
    color: "#8b5cf6",
  },
];

const SKILLS = [
  {
    cat: "Deep Learning",
    cls: "term",
    icon: <SiPytorch className="text-orange-400" />,
    items: [
      "PyTorch",
      "LSTM",
      "Transformer",
      "BiRNN",
      "Positional Encoding",
      "BCEWithLogitsLoss",
    ],
  },
  {
    cat: "ML & Statistics",
    cls: "term-violet",
    icon: <SiScikitlearn className="text-orange-300" />,
    items: [
      "XGBoost",
      "scikit-learn",
      "Isolation Forest",
      "SHAP",
      "Optuna",
      "PSI",
      "MMD",
    ],
  },
  {
    cat: "Causal Inference",
    cls: "term-violet",
    icon: <FaChartLine className="text-violet-400" />,
    items: [
      "DoWhy",
      "EconML",
      "T-Learner",
      "X-Learner",
      "CausalForestDML",
      "PSM",
      "DiD",
    ],
  },
  {
    cat: "LLM & Agents",
    cls: "term-pink",
    icon: <FaBrain className="text-pink-400" />,
    items: [
      "LangGraph",
      "LangChain",
      "GPT-4o-mini",
      "RAG",
      "ChromaDB",
      "Function Calling",
      "LangSmith",
    ],
  },
  {
    cat: "Backend & APIs",
    cls: "term-green",
    icon: <SiFastapi className="text-emerald-400" />,
    items: [
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "SQLAlchemy 2",
      "Pydantic v2",
      "JWT",
      "Alembic",
    ],
  },
  {
    cat: "MLOps & Cloud",
    cls: "term-green",
    icon: <FaCloud className="text-sky-400" />,
    items: [
      "MLflow",
      "Docker",
      "GCP Cloud Run",
      "GitHub Actions",
      "HuggingFace Spaces",
      "dbt",
      "pytest",
    ],
  },
  {
    cat: "Languages",
    cls: "term",
    icon: <FaPython className="text-yellow-400" />,
    items: ["Python 3.11", "TypeScript", "SQL", "JavaScript", "Bash"],
  },
  {
    cat: "Frontend",
    cls: "term-violet",
    icon: <SiReact className="text-cyan-400" />,
    items: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Recharts",
      "Gradio",
      "Streamlit",
    ],
  },
];

const EXPERIENCE = [
  {
    role: "Jr. ML Engineer",
    company: "FL Tech Solutions LLC",
    date: "Jul 2025 – Present",
    location: "Florida, United States · Remote",
    badge: "Current Role",
    badgeClass: "term-green",
    points: [
      "Participated in bi-weekly agile sprints with 5+ ML engineers, completing 10+ peer code reviews and updating technical documentation that reduced onboarding time by ~25%.",
      "Cleaned and validated structured datasets of 50K–200K records using Python, Pandas, and SQL — reducing data pipeline errors by ~30% prior to model training.",
      "Assisted in A/B testing and champion/challenger evaluations across 3+ iterations, tracking 10+ metrics (AUC, F1, KS statistic) in MLflow to improve production accuracy by ~15%.",
      "Researched 5+ ML frameworks and LLM integration tools including LangChain, ChromaDB, and sentence-transformers — accelerating architecture decisions by ~20% for 2+ pipelines.",
      "Maintained API specs, model cards, and deployment runbooks across 5+ production systems, reducing average debugging and incident resolution time by ~25%.",
    ],
  },
  {
    role: "Student Associate",
    company: "New Jersey Institute of Technology",
    date: "Sep 2024 – May 2025",
    location: "Newark, NJ · On-site",
    badge: "Mr. Man With A Mission Award",
    badgeClass: "term-violet",
    points: [
      "Queried and maintained structured event databases using SQL and Excel, managing 150+ monthly records with 99% booking accuracy.",
      "Identified and resolved 50+ monthly operational inefficiencies, reducing conflict resolution time by ~30% through structured documentation.",
      "Aggregated operational data across 5+ departments supporting 1,000+ monthly students and staff, coordinating logistics for 10+ large-scale events.",
    ],
  },
  {
    role: "Python & Data Science Instructor",
    company: "Full Stack Academy",
    date: "Aug 2023 – Dec 2023",
    location: "Hyderabad, India · On-site",
    badge: "Certificate of Appreciation",
    badgeClass: "term-violet",
    points: [
      "Delivered Python instruction to 20+ students across 5 months, covering data structures, OOP, and algorithms with hands-on exercises using Pandas, NumPy, and Matplotlib for data manipulation and analysis workflows.",
      "Designed 15+ structured coding exercises reinforcing data wrangling, EDA, and statistical programming fundamentals.",
      "Mentored students through 3+ end-to-end mini-projects applying data preprocessing, feature engineering, and visualization techniques using Pandas, NumPy, and Matplotlib, bridging Python fundamentals with real-world data science workflows.",
    ],
  },
  {
    role: "Data Science Intern",
    company: "Delta Sigma Technologies",
    date: "Jun 2022 – Jul 2022",
    location: "Remote · Hyderabad, India",
    badge: "Certificate of Internship",
    badgeClass: "term",
    points: [
      "Engineered preprocessing pipelines for 100K+ records using Python, Pandas, and NumPy — including null imputation, feature scaling, and categorical encoding.",
      "Executed 50+ hyperparameter tuning experiments using grid search and cross-validation, improving model accuracy from 76% to 89% across classification tasks.",
      "Performed EDA using Matplotlib and Seaborn to analyze feature distributions, correlations, and class imbalances, documenting findings for team review.",
    ],
  },
];

const VOLUNTEERING = [
  {
    role: "Technical Head",
    org: "Computer Society of India — MJCET",
    date: "Oct 2022 – Jun 2023",
    badge: "Certificate of Recognition",
    desc: "Led technical initiatives for CSI-MJCET, organizing events, workshops, and trainings including Hack Revolution 2023 with 150–200 participants. Received Certificate of Recognition for active efforts as Tech Head throughout academic year 2022–23.",
  },
  {
    role: "Core Team Lead",
    org: "Horizon — Beyond Reality, MJCET",
    date: "Jun 2022 – Jun 2023",
    badge: "Letter of Appreciation",
    desc: "Led AR/VR, Blockchain, and Web 3.0 projects for IEEE MJCET's Horizon club. Built 'AR Try-On Watch Using Unity & Vuforia' — enabling virtual watch overlay on wrists via Vuforia computer vision. Received Letter of Appreciation for outstanding contribution to 150–200 participant events.",
  },
  {
    role: "Student Volunteer",
    org: "NJIT Muslim Student Association",
    date: "Jan 2024 – May 2025",
    badge: "Certificate of Appreciation",
    desc: "Organized on-campus events, educational sessions, and community activities. Managed communication and outreach to strengthen cultural awareness and student support. Received Certificate of Appreciation for dedicated volunteer service.",
  },
  {
    role: "Volunteer",
    org: "Marwah Academy — NJ Non-Profit",
    date: "Jan 2024 – Present",
    badge: "Active",
    desc: "Supported educational programs and community initiatives for a New Jersey non-profit organization focused on student development and community engagement.",
  },
  {
    role: "Volunteer Coordinator",
    org: "Muslim Unity Center of Maryland",
    date: "Feb 2026 – Present",
    badge: "Active · Remote",
    desc: "Remote volunteer supporting social media management, payment coordination, and technical troubleshooting. Improved day-to-day operations, community communication, and digital workflow efficiency.",
  },
];

const NAV = [
  "Home",
  "About",
  "Projects",
  "Experience",
  "Volunteering",
  "Skills",
  "Contact",
];
const NAV_ICONS = [
  <FaHome />,
  <FaUser />,
  <FaFolderOpen />,
  <FaBriefcase />,
  <FaHeart />,
  <FaCogs />,
  <FaPaperPlane />,
];

const ORBIT1 = [
  {
    icon: <SiPytorch className="text-orange-400" />,
    label: "PyTorch",
    cls: "-left-8 top-8",
  },
  {
    icon: <SiScikitlearn className="text-orange-300" />,
    label: "sklearn",
    cls: "-right-10 top-16",
  },
  {
    icon: <FaBrain className="text-pink-400" />,
    label: "LangGraph",
    cls: "bottom-8 -right-6",
  },
  {
    icon: <FaPython className="text-yellow-400" />,
    label: "Python",
    cls: "bottom-4 -left-2",
  },
];
const ORBIT2 = [
  {
    icon: <SiOpenai className="text-gray-300" />,
    label: "GPT-4",
    cls: "left-8 top-0",
  },
  {
    icon: <FaChartLine className="text-violet-400" />,
    label: "CausalML",
    cls: "right-10 top-2",
  },
  {
    icon: <SiMlflow className="text-red-300" />,
    label: "MLflow",
    cls: "bottom-0 left-16",
  },
  {
    icon: <SiFastapi className="text-emerald-400" />,
    label: "FastAPI",
    cls: "-left-4 bottom-14",
  },
];
const ORBIT3 = [
  {
    icon: <FaDocker className="text-sky-400" />,
    label: "Docker",
    cls: "left-4 top-6",
  },
  {
    icon: <SiPostgresql className="text-blue-300" />,
    label: "Postgres",
    cls: "right-6 top-8",
  },
  {
    icon: <FaCloud className="text-sky-300" />,
    label: "GCP",
    cls: "bottom-2 left-24",
  },
  {
    icon: <SiRedis className="text-red-400" />,
    label: "Redis",
    cls: "-left-6 bottom-20",
  },
];

/* ══════════════════════════════
   HOOKS
══════════════════════════════ */
function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("visible"),
        ),
      { threshold: 0.07, rootMargin: "0px 0px -30px 0px" },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}

function useCounter(target: number, duration = 1800) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        let s = 0;
        const step = target / (duration / 16);
        const t = setInterval(() => {
          s += step;
          if (s >= target) {
            setVal(target);
            clearInterval(t);
          } else setVal(Math.floor(s));
        }, 16);
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);
  return { val, ref };
}

/* ══════════════════════════════
   TYPEWRITER
══════════════════════════════ */
const PHRASES = [
  "ML Systems Engineer",
  "AI Pipeline Builder",
  "Causal Inference",
  "LLM Orchestration",
];
function Typewriter() {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [typing, setTyping] = useState(true);
  useEffect(() => {
    const phrase = PHRASES[idx % PHRASES.length];
    if (typing) {
      if (text.length < phrase.length) {
        const t = setTimeout(
          () => setText(phrase.slice(0, text.length + 1)),
          55,
        );
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2200);
        return () => clearTimeout(t);
      }
    } else {
      if (text.length > 0) {
        const t = setTimeout(() => setText(text.slice(0, -1)), 28);
        return () => clearTimeout(t);
      } else {
        setIdx((i: number) => i + 1);
        setTyping(true);
      }
    }
  }, [text, idx, typing]);
  return (
    <span
      style={{
        color: "var(--cyan)",
        fontFamily: "var(--mono)",
        fontSize: "clamp(14px,2.2vw,20px)",
        fontWeight: 500,
      }}
    >
      {text}
      <span className="cursor" />
    </span>
  );
}

/* ══════════════════════════════
   STAT CARD
══════════════════════════════ */
function StatCard({
  n,
  suffix = "",
  label,
}: {
  n: number;
  suffix?: string;
  label: string;
}) {
  const { val, ref } = useCounter(n);
  return (
    <div
      ref={ref}
      className="card reveal"
      style={{
        padding: "28px 16px",
        textAlign: "center",
        background: "var(--bg-3)",
      }}
    >
      <p className="stat-val">
        {val}
        {suffix}
      </p>
      <p
        style={{
          marginTop: 8,
          fontSize: 10,
          fontFamily: "var(--mono)",
          color: "var(--muted)",
          letterSpacing: "0.1em",
        }}
      >
        {label}
      </p>
    </div>
  );
}

/* ══════════════════════════════
   HERO ORBIT
══════════════════════════════ */
function HeroOrbit() {
  return (
    <div
      className="relative mx-auto flex items-center justify-center"
      style={{ minHeight: 380, maxWidth: 580, width: "100%" }}
    >
      <div
        className="absolute rounded-full"
        style={{
          width: 270,
          height: 270,
          border: "1px solid rgba(0,212,255,0.1)",
        }}
      />
      <div
        className="absolute rounded-full orbit-ring-2"
        style={{
          width: 385,
          height: 385,
          border: "1px solid rgba(0,212,255,0.06)",
        }}
      />
      <div
        className="absolute rounded-full orbit-ring-3"
        style={{
          width: 500,
          height: 500,
          border: "1px solid rgba(139,92,246,0.05)",
        }}
      />
      <div
        className="absolute"
        style={{
          width: 210,
          height: 210,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,212,255,0.1), transparent 70%)",
        }}
      />

      <div className="float-it relative" style={{ width: "74%", zIndex: 10 }}>
        <div
          className="absolute"
          style={{
            inset: -22,
            borderRadius: 26,
            background: "rgba(0,212,255,0.07)",
            filter: "blur(30px)",
          }}
        />
        <img
          src={heroImage}
          alt="ML dashboard"
          className="relative rounded-2xl shadow-2xl"
          style={{ border: "1px solid rgba(0,212,255,0.15)", width: "100%" }}
        />
        <div className="scan-bar" />
      </div>

      <div
        className="orbit absolute"
        style={{ width: 285, height: 285, animationDuration: "50s" }}
      >
        {ORBIT1.map(({ icon, label, cls }) => (
          <div
            key={label}
            className={`co absolute flex items-center gap-2 rounded-full px-2.5 py-1.5 text-white backdrop-blur-md transition hover:scale-110 ${cls}`}
            style={{
              background: "rgba(3,6,15,0.88)",
              border: "1px solid rgba(0,212,255,0.25)",
              animationDuration: "50s",
              fontSize: 11,
              fontWeight: 600,
            }}
          >
            <span style={{ fontSize: 13 }}>{icon}</span>
            <span className="hidden sm:inline">{label}</span>
          </div>
        ))}
      </div>

      <div
        className="orbit orbit-ring-2 absolute"
        style={{ width: 400, height: 400, animationDuration: "80s" }}
      >
        {ORBIT2.map(({ icon, label, cls }) => (
          <div
            key={label}
            className={`co absolute flex items-center gap-2 rounded-full px-2.5 py-1.5 text-white backdrop-blur-md transition hover:scale-110 ${cls}`}
            style={{
              background: "rgba(3,6,15,0.88)",
              border: "1px solid rgba(139,92,246,0.25)",
              animationDuration: "80s",
              fontSize: 11,
              fontWeight: 600,
            }}
          >
            <span style={{ fontSize: 13 }}>{icon}</span>
            <span className="hidden sm:inline">{label}</span>
          </div>
        ))}
      </div>

      <div
        className="orbit orbit-ring-3 absolute"
        style={{ width: 505, height: 505, animationDuration: "120s" }}
      >
        {ORBIT3.map(({ icon, label, cls }) => (
          <div
            key={label}
            className={`co absolute flex items-center gap-2 rounded-full px-2.5 py-1.5 text-white backdrop-blur-md transition hover:scale-110 ${cls}`}
            style={{
              background: "rgba(3,6,15,0.88)",
              border: "1px solid rgba(244,114,182,0.25)",
              animationDuration: "120s",
              fontSize: 11,
              fontWeight: 600,
            }}
          >
            <span style={{ fontSize: 13 }}>{icon}</span>
            <span className="hidden sm:inline">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════
   PROJECT CARD
══════════════════════════════ */
function ProjCard({
  p,
  compact = false,
}: {
  p: (typeof ML_PROJECTS)[0] | (typeof OTHER_PROJECTS)[0];
  compact?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || window.innerWidth < 1024) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5,
      y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg) translateY(-8px)`;
  };
  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <div
      ref={ref}
      className="proj-card reveal"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        transition:
          "border-color 0.4s, box-shadow 0.4s, transform 0.15s ease-out",
      }}
    >
      <div
        style={{
          height: 2,
          background: `linear-gradient(90deg, ${p.color}, transparent)`,
        }}
      />
      <div
        style={{
          padding: compact ? "20px 22px" : "24px 26px",
          display: "flex",
          flexDirection: "column",
          gap: compact ? 14 : 18,
          flex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                flexWrap: "wrap",
                marginBottom: 10,
              }}
            >
              <span
                className={
                  "typeClass" in p
                    ? (p as (typeof ML_PROJECTS)[0]).typeClass
                    : (p as (typeof OTHER_PROJECTS)[0]).typeClass
                }
              >
                {p.type}
              </span>
              {"badge" in p && (p as (typeof ML_PROJECTS)[0]).badge && (
                <span className="status-live" style={{ fontSize: 10 }}>
                  {(p as (typeof ML_PROJECTS)[0]).badge}
                </span>
              )}
            </div>
            <h3
              style={{
                fontFamily: "var(--display)",
                fontSize: compact ? 17 : 20,
                fontWeight: 700,
                color: "white",
                lineHeight: 1.2,
              }}
            >
              {p.name}
            </h3>
            <p
              style={{
                fontSize: 11,
                color: "var(--muted)",
                marginTop: 4,
                fontFamily: "var(--mono)",
              }}
            >
              {p.tagline}
            </p>
          </div>
          <div
            style={{
              width: 38,
              height: 38,
              flexShrink: 0,
              background: `${p.color}18`,
              border: `1px solid ${p.color}40`,
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FaChartLine style={{ color: p.color, fontSize: 13 }} />
          </div>
        </div>

        <p
          style={{
            fontSize: compact ? 13 : 14,
            lineHeight: 1.8,
            color: "#5a7a92",
          }}
        >
          {p.desc}
        </p>

        {"highlight" in p &&
          !compact &&
          (p as (typeof ML_PROJECTS)[0]).highlight && (
            <div
              style={{
                borderRadius: 11,
                border: "1px solid rgba(0,212,255,0.1)",
                background: "rgba(0,212,255,0.04)",
                padding: "13px 15px",
                fontSize: 12,
                color: "#3a5f70",
                fontStyle: "italic",
                lineHeight: 1.7,
                fontFamily: "var(--mono)",
              }}
            >
              {(p as (typeof ML_PROJECTS)[0]).highlight}
            </div>
          )}

        <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
          {p.metrics.map((m) => (
            <span key={m} className="metric-box">
              {m}
            </span>
          ))}
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
          {p.stack.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>

        <div
          style={{ display: "flex", gap: 10, marginTop: "auto", paddingTop: 6 }}
        >
          <a
            href={p.github}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
            style={{
              flex: 1,
              justifyContent: "center",
              fontSize: 12,
              padding: "9px 12px",
            }}
          >
            <FaGithub /> GitHub
          </a>
          {p.live ? (
            <a
              href={p.live}
              target="_blank"
              rel="noreferrer"
              className="btn-cyan"
              style={{ flex: 1, fontSize: 12, padding: "9px 12px" }}
            >
              Live Demo <FaArrowRight style={{ fontSize: 10 }} />
            </a>
          ) : (
            <span
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 12,
                border: "1px dashed rgba(255,255,255,0.08)",
                color: "var(--muted)",
                padding: "9px 12px",
                fontSize: 12,
              }}
            >
              Private
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════
   LABEL
══════════════════════════════ */
function Label({ children }: { children: ReactNode }) {
  return <p className="label">{children}</p>;
}

/* ══════════════════════════════
   APP
══════════════════════════════ */
export default function App() {
  const [active, setActive] = useState("home");
  useReveal();

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0.18 },
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.toLowerCase());
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "var(--bg)",
        color: "var(--text)",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      <NeuralCanvas />
      <div className="grain" />
      <div className="scanline" />

      {/* ── MOBILE BOTTOM NAV ── */}
      <nav className="mobile-nav">
        <div className="mobile-nav-inner">
          {NAV.map((item, i) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`mobile-nav-item ${active === item.toLowerCase() ? "active" : ""}`}
            >
              <span style={{ fontSize: 16 }}>{NAV_ICONS[i]}</span>
              <span>{item}</span>
            </a>
          ))}
        </div>
      </nav>

      <div className="outer-layout">
        {/* ══ DESKTOP SIDEBAR ══ */}
        <aside
          className="desktop-sidebar glass flex-col p-7 lg:sticky lg:top-5"
          style={{ gap: 22, height: "calc(100vh - 40px)", overflowY: "auto" }}
        >
          {/* Avatar */}
          <div style={{ textAlign: "center" }}>
            <div style={{ position: "relative", display: "inline-block" }}>
              <div
                className="glow-pulse absolute rounded-full"
                style={{
                  inset: -3,
                  background:
                    "linear-gradient(135deg, var(--cyan), var(--violet), var(--pink))",
                  borderRadius: "50%",
                }}
              />
              <img
                src={profileImage}
                alt="Ahmeduddin Mohammed"
                className="relative rounded-full object-cover"
                style={{
                  width: 110,
                  height: 110,
                  border: "3px solid var(--bg)",
                  display: "block",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 2,
                  right: 2,
                  width: 14,
                  height: 14,
                  background: "var(--green)",
                  border: "2px solid var(--bg)",
                  borderRadius: "50%",
                  boxShadow: "0 0 10px var(--green)",
                }}
              />
            </div>
            <h1
              style={{
                fontFamily: "var(--display)",
                fontSize: 17,
                fontWeight: 700,
                marginTop: 14,
                lineHeight: 1.3,
              }}
            >
              Ahmeduddin <span className="grad-cyan">Mohammed</span>
            </h1>
            <div
              style={{
                fontSize: 10,
                fontFamily: "var(--mono)",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--cyan)",
                marginTop: 6,
              }}
            >
              ML / AI Engineer · Data Scientist
            </div>
            <p style={{ fontSize: 12, color: "var(--muted)", marginTop: 5 }}>
              Harrison, New Jersey
            </p>
          </div>

          <div className="glow-line" />

          {/* Stats */}
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}
          >
            {[
              ["7", "Projects"],
              ["369", "Tests"],
              ["4+", "Roles"],
              ["92%", "Coverage"],
            ].map(([n, l]) => (
              <div
                key={l}
                style={{
                  textAlign: "center",
                  padding: "11px 7px",
                  background: "rgba(0,212,255,0.04)",
                  border: "1px solid rgba(0,212,255,0.09)",
                  borderRadius: 12,
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--display)",
                    fontSize: 15,
                    fontWeight: 700,
                    color: "var(--cyan)",
                    textShadow: "0 0 14px rgba(0,212,255,0.4)",
                  }}
                >
                  {n}
                </p>
                <p
                  style={{
                    fontSize: 9,
                    fontFamily: "var(--mono)",
                    color: "var(--muted)",
                    marginTop: 3,
                    letterSpacing: "0.07em",
                  }}
                >
                  {l}
                </p>
              </div>
            ))}
          </div>

          <div className="glow-line" />

          {/* Nav */}
          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              flex: 1,
            }}
          >
            {NAV.map((item, i) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`nav-item ${active === item.toLowerCase() ? "active" : ""}`}
              >
                <span className="nav-num">0{i + 1}</span>
                {item}
              </a>
            ))}
          </nav>

          <div className="glow-line" />

          {/* Socials */}
          <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
            {[
              {
                icon: <FaGithub />,
                href: "https://github.com/MohammedAhmeduddin",
                title: "GitHub",
              },
              {
                icon: <FaLinkedin />,
                href: "https://www.linkedin.com/in/mohammed-ahmeduddin/",
                title: "LinkedIn",
              },
              {
                icon: <FaEnvelope />,
                href: "mailto:mohammed.ahmeduddin16@gmail.com",
                title: "Email",
              },
            ].map(({ icon, href, title }) => (
              <a
                key={title}
                href={href}
                target="_blank"
                rel="noreferrer"
                title={title}
                style={{
                  width: 38,
                  height: 38,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 11,
                  background: "rgba(0,212,255,0.05)",
                  border: "1px solid rgba(0,212,255,0.12)",
                  color: "var(--muted)",
                  fontSize: 15,
                  transition: "all 0.2s",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = "var(--cyan)";
                  el.style.borderColor = "rgba(0,212,255,0.4)";
                  el.style.background = "rgba(0,212,255,0.12)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = "var(--muted)";
                  el.style.borderColor = "rgba(0,212,255,0.12)";
                  el.style.background = "rgba(0,212,255,0.05)";
                }}
              >
                {icon}
              </a>
            ))}
          </div>
        </aside>

        {/* ══ MAIN ══ */}
        <div className="content-stack">
          {/* HERO */}
          <section
            id="home"
            className="card hero-grid"
            style={{ background: "var(--bg-2)" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {/* Mobile-only profile badge — hidden on desktop via CSS class */}
              <div
                className="mobile-profile-badge"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  marginBottom: 24,
                  padding: "14px 16px",
                  background: "rgba(0,212,255,0.04)",
                  border: "1px solid rgba(0,212,255,0.1)",
                  borderRadius: 14,
                }}
              >
                <div style={{ position: "relative", flexShrink: 0 }}>
                  <div
                    style={{
                      position: "absolute",
                      inset: -2,
                      background:
                        "linear-gradient(135deg, var(--cyan), var(--violet))",
                      borderRadius: "50%",
                    }}
                  />
                  <img
                    src={profileImage}
                    alt="Profile"
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: "50%",
                      border: "2px solid var(--bg)",
                      objectFit: "cover",
                      display: "block",
                      position: "relative",
                    }}
                  />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--display)",
                      fontSize: 15,
                      fontWeight: 700,
                    }}
                  >
                    Ahmeduddin <span className="grad-cyan">Mohammed</span>
                  </div>
                  <div
                    style={{
                      fontSize: 10,
                      fontFamily: "var(--mono)",
                      color: "var(--cyan)",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      marginTop: 3,
                    }}
                  >
                    ML / AI Engineer · Data Scientist
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 22,
                }}
              >
                <span className="status-live" style={{ fontSize: 11 }}>
                  Open to Work
                </span>
                <span className="term">ML / AI Engineer</span>
                <span className="term-violet">Data Scientist</span>
                <span className="term-green">Available Now</span>
              </div>

              <h2
                style={{
                  fontFamily: "var(--display)",
                  fontSize: "clamp(38px,6vw,72px)",
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.05,
                }}
              >
                I'm
                <br />
                <span className="grad">Ahmeduddin</span>
                <br />
                Mohammed
              </h2>

              <div style={{ marginTop: 18, minHeight: 28 }}>
                <Typewriter />
              </div>

              <p
                style={{
                  fontSize: "clamp(14px,1.5vw,16px)",
                  lineHeight: 1.8,
                  color: "#4a6580",
                  marginTop: 18,
                  maxWidth: 500,
                }}
              >
                <span style={{ color: "var(--text)", fontWeight: 500 }}>
                  ML Engineer specializing in production systems
                </span>{" "}
                — causal inference, deep learning, and LLM orchestration. I
                build with rigor: every project ships with full test coverage,
                real metrics, and a live deployment.
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 8,
                  marginTop: 18,
                }}
              >
                {[
                  "PyTorch / LSTM",
                  "LangGraph",
                  "Causal ML",
                  "FastAPI / GCP",
                ].map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>

              <div
                className="hero-ctas"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 12,
                  marginTop: 28,
                }}
              >
                <a
                  href="https://www.linkedin.com/in/mohammed-ahmeduddin/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-cyan"
                >
                  Hire Me <FaArrowRight style={{ fontSize: 12 }} />
                </a>
                <a href="#projects" className="btn-ghost">
                  View Projects
                </a>
                <a
                  href="/Ahmeduddin_Mohammed_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost"
                >
                  <FaExternalLinkAlt style={{ fontSize: 11 }} /> Resume
                </a>
              </div>
            </div>

            <div className="hidden xl:flex items-center justify-center">
              <HeroOrbit />
            </div>
          </section>

          {/* ABOUT */}
          <section id="about" className="card section-pad reveal">
            <div className="about-grid">
              <div>
                <Label>About</Label>
                <h2
                  style={{
                    fontFamily: "var(--display)",
                    fontSize: "clamp(24px,3.5vw,38px)",
                    fontWeight: 700,
                    marginTop: 6,
                  }}
                >
                  Building ML systems that
                  <br />
                  <span className="grad-cyan">work in production.</span>
                </h2>
                <div
                  style={{
                    borderLeft: "2px solid rgba(0,212,255,0.12)",
                    paddingLeft: 22,
                    marginTop: 22,
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                    fontSize: "clamp(13px,1.2vw,15px)",
                    lineHeight: 1.85,
                    color: "#4a6580",
                  }}
                >
                  <p>
                    I'm an ML/AI Systems Engineer specializing in
                    production-grade machine learning — causal inference
                    pipelines, deep learning architectures, multi-agent LLM
                    orchestration, and RAG-based AI applications. Every project
                    I ship is deployed, comprehensively tested, and benchmarked
                    against real-world metrics.
                  </p>
                  <p>
                    My work spans bidirectional LSTM networks achieving AUC
                    0.9868, 5-estimator causal engines on 14M-row datasets
                    revealing 3.5x promotion lift, legally-grounded adverse
                    action notices via RAG, and LangGraph pipelines completing
                    in 360ms on GCP Cloud Run.
                  </p>
                  <p>
                    I believe in owning the full stack — model architecture
                    through API design, testing culture, and cloud deployment.
                  </p>
                </div>
              </div>

              <div
                style={{
                  borderRadius: 18,
                  padding: 22,
                  background: "var(--bg-3)",
                  border: "1px solid var(--border)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                <p
                  style={{
                    fontSize: 9,
                    fontFamily: "var(--mono)",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                  }}
                >
                  // Engineering Identity
                </p>
                {[
                  {
                    k: "Specialization",
                    v: "ML Systems / Causal AI / LLM Agents",
                  },
                  {
                    k: "What I Build",
                    v: "Deployed pipelines with real metrics",
                  },
                  { k: "Stack", v: "PyTorch → FastAPI → Docker → GCP" },
                  { k: "Testing", v: "369 tests · 4 ML projects" },
                ].map(({ k, v }) => (
                  <div
                    key={k}
                    style={{
                      borderRadius: 12,
                      padding: "13px 14px",
                      background: "rgba(0,212,255,0.03)",
                      border: "1px solid rgba(0,212,255,0.08)",
                    }}
                  >
                    <p
                      style={{
                        fontSize: 9,
                        fontFamily: "var(--mono)",
                        color: "var(--muted)",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                      }}
                    >
                      {k}
                    </p>
                    <p
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: "var(--text)",
                        marginTop: 5,
                        lineHeight: 1.4,
                      }}
                    >
                      {v}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* STATS */}
          <div className="card-grid card-grid-4">
            <StatCard n={9868} label="BEST AUC ×10000" />
            <StatCard n={14} suffix="M" label="ROWS PROCESSED" />
            <StatCard n={369} label="TOTAL TESTS" />
            <StatCard n={7} label="PROJECTS SHIPPED" />
          </div>

          {/* PROJECTS */}
          <section id="projects" className="card section-pad">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "flex-end",
                justifyContent: "space-between",
                gap: 16,
                marginBottom: 32,
              }}
            >
              <div>
                <Label>Featured Work</Label>
                <h2
                  style={{
                    fontFamily: "var(--display)",
                    fontSize: "clamp(24px,3.5vw,38px)",
                    fontWeight: 700,
                    marginTop: 6,
                  }}
                >
                  Production ML Projects
                </h2>
                <p
                  style={{
                    fontSize: 13,
                    color: "var(--muted)",
                    marginTop: 8,
                    maxWidth: 460,
                  }}
                >
                  Deployed · Tested · Benchmarked. Not tutorial clones.
                </p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {["ML Systems", "Causal AI", "RAG + ML", "LLM Agents"].map(
                  (t) => (
                    <span key={t} className="term">
                      {t}
                    </span>
                  ),
                )}
              </div>
            </div>

            <div className="card-grid card-grid-2">
              {ML_PROJECTS.map((p) => (
                <ProjCard key={p.id} p={p} />
              ))}
            </div>

            <div style={{ marginTop: 44 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 18,
                  marginBottom: 22,
                }}
              >
                <div className="divider" style={{ flex: 1 }} />
                <p
                  style={{
                    fontSize: 9,
                    fontFamily: "var(--mono)",
                    color: "var(--muted)",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    whiteSpace: "nowrap",
                  }}
                >
                  // Other Projects
                </p>
                <div className="divider" style={{ flex: 1 }} />
              </div>
              <div className="card-grid card-grid-3">
                {OTHER_PROJECTS.map((p) => (
                  <ProjCard key={p.id} p={p} compact />
                ))}
              </div>
            </div>
          </section>

          {/* EXPERIENCE */}
          <section id="experience" className="card section-pad reveal">
            <Label>Experience</Label>
            <h2
              style={{
                fontFamily: "var(--display)",
                fontSize: "clamp(24px,3.5vw,38px)",
                fontWeight: 700,
                marginTop: 6,
                marginBottom: 30,
              }}
            >
              Professional Background
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {EXPERIENCE.map((job, i) => (
                <div
                  key={job.role}
                  className="glow-card reveal"
                  style={{ background: "var(--bg-3)" }}
                >
                  <div style={{ padding: "clamp(20px,3vw,28px)" }}>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        gap: 16,
                      }}
                    >
                      <div style={{ display: "flex", gap: 16 }}>
                        <div
                          style={{
                            width: 42,
                            height: 42,
                            flexShrink: 0,
                            background: "rgba(0,212,255,0.08)",
                            border: "1px solid rgba(0,212,255,0.22)",
                            borderRadius: 11,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontFamily: "var(--display)",
                            fontSize: 13,
                            fontWeight: 700,
                            color: "var(--cyan)",
                          }}
                        >
                          0{i + 1}
                        </div>
                        <div>
                          <p
                            style={{
                              fontSize: 11,
                              fontFamily: "var(--mono)",
                              color: "var(--cyan)",
                            }}
                          >
                            {job.company}
                          </p>
                          <h3
                            style={{
                              fontFamily: "var(--display)",
                              fontSize: "clamp(15px,2vw,19px)",
                              fontWeight: 700,
                              color: "white",
                              marginTop: 3,
                            }}
                          >
                            {job.role}
                          </h3>
                          <p
                            style={{
                              fontSize: 12,
                              color: "var(--muted)",
                              marginTop: 3,
                            }}
                          >
                            {job.location}
                          </p>
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 7,
                          alignItems: "flex-end",
                        }}
                      >
                        <span className="term">{job.date}</span>
                        <span className={job.badgeClass}>{job.badge}</span>
                      </div>
                    </div>
                    <div
                      style={{
                        marginTop: 18,
                        display: "flex",
                        flexDirection: "column",
                        gap: 9,
                      }}
                    >
                      {job.points.map((pt) => (
                        <div
                          key={pt}
                          style={{
                            display: "flex",
                            gap: 12,
                            fontSize: "clamp(13px,1.2vw,14px)",
                            lineHeight: 1.75,
                            color: "#4a6580",
                          }}
                        >
                          <div
                            className="timeline-dot"
                            style={{ marginTop: 7 }}
                          />
                          {pt}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* VOLUNTEERING */}
          <section id="volunteering" className="card section-pad reveal">
            <Label>Community</Label>
            <h2
              style={{
                fontFamily: "var(--display)",
                fontSize: "clamp(24px,3.5vw,38px)",
                fontWeight: 700,
                marginTop: 6,
                marginBottom: 10,
              }}
            >
              Volunteering & Activities
            </h2>
            <p
              style={{
                fontSize: 13,
                color: "var(--muted)",
                marginBottom: 28,
                maxWidth: 520,
              }}
            >
              Leadership, technical contributions, and community service across
              student organizations and non-profits.
            </p>
            <div
              className="card-grid card-grid-2"
              style={{ alignItems: "start" }}
            >
              {VOLUNTEERING.map((v) => (
                <div
                  key={v.role}
                  className="glow-card reveal"
                  style={{ background: "var(--bg-3)" }}
                >
                  <div style={{ padding: "clamp(18px,2.5vw,24px)" }}>
                    <div
                      style={{
                        height: 1,
                        background:
                          "linear-gradient(90deg, var(--cyan), transparent)",
                        marginBottom: 18,
                        borderRadius: 4,
                      }}
                    />
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        gap: 12,
                        marginBottom: 10,
                      }}
                    >
                      <div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            marginBottom: 6,
                          }}
                        >
                          <FaStar
                            style={{ color: "var(--cyan)", fontSize: 10 }}
                          />
                          <span
                            style={{
                              fontSize: 10,
                              fontFamily: "var(--mono)",
                              color: "var(--cyan)",
                              letterSpacing: "0.1em",
                            }}
                          >
                            {v.date}
                          </span>
                        </div>
                        <h3
                          style={{
                            fontFamily: "var(--display)",
                            fontSize: 16,
                            fontWeight: 700,
                            color: "white",
                            lineHeight: 1.2,
                          }}
                        >
                          {v.role}
                        </h3>
                        <p
                          style={{
                            fontSize: 12,
                            color: "var(--muted)",
                            marginTop: 4,
                            fontFamily: "var(--mono)",
                          }}
                        >
                          {v.org}
                        </p>
                      </div>
                      <span
                        className="term-violet"
                        style={{ flexShrink: 0, fontSize: 9 }}
                      >
                        {v.badge}
                      </span>
                    </div>
                    <p
                      style={{
                        fontSize: 13,
                        lineHeight: 1.75,
                        color: "#4a6580",
                      }}
                    >
                      {v.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SKILLS */}
          <section id="skills" className="card section-pad reveal">
            <Label>Technical Expertise</Label>
            <h2
              style={{
                fontFamily: "var(--display)",
                fontSize: "clamp(24px,3.5vw,38px)",
                fontWeight: 700,
                marginTop: 6,
              }}
            >
              ML / AI Stack
            </h2>
            <p
              style={{
                fontSize: 13,
                color: "var(--muted)",
                marginTop: 9,
                marginBottom: 28,
                maxWidth: 480,
              }}
            >
              From PyTorch architecture to GCP deployment — the full production
              stack.
            </p>
            <div className="card-grid card-grid-2">
              {SKILLS.map((g) => (
                <div
                  key={g.cat}
                  className="glow-card reveal"
                  style={{ background: "var(--bg-3)" }}
                >
                  <div style={{ padding: "clamp(18px,2.5vw,24px)" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 16,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 12,
                        }}
                      >
                        <div
                          style={{
                            width: 38,
                            height: 38,
                            background: "rgba(0,212,255,0.06)",
                            border: "1px solid rgba(0,212,255,0.12)",
                            borderRadius: 10,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 15,
                          }}
                        >
                          {g.icon}
                        </div>
                        <h3
                          style={{
                            fontFamily: "var(--display)",
                            fontSize: 14,
                            fontWeight: 700,
                            color: "white",
                          }}
                        >
                          {g.cat}
                        </h3>
                      </div>
                      <span className={g.cls} style={{ fontSize: 10 }}>
                        {g.items.length}
                      </span>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                      {g.items.map((s) => (
                        <span key={s} className="chip">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CONTACT */}
          <section
            id="contact"
            className="card section-pad reveal"
            style={{ marginBottom: 20 }}
          >
            <div className="contact-grid">
              <div>
                <Label>Contact</Label>
                <h2
                  style={{
                    fontFamily: "var(--display)",
                    fontSize: "clamp(26px,3.5vw,42px)",
                    fontWeight: 700,
                    marginTop: 6,
                  }}
                >
                  Let's build something
                  <br />
                  <span className="grad">remarkable.</span>
                </h2>
                <p
                  style={{
                    fontSize: "clamp(13px,1.2vw,15px)",
                    lineHeight: 1.85,
                    color: "#4a6580",
                    marginTop: 18,
                    maxWidth: 460,
                  }}
                >
                  I'm open to ML Engineer, AI Engineer, Data Scientist, and
                  applied research roles where I can build production-grade ML
                  pipelines, LLM systems, and data-intensive products.
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 10,
                    marginTop: 24,
                  }}
                >
                  {[
                    { k: "Status", v: "Open to Opportunities" },
                    { k: "Location", v: "Harrison, NJ / Remote" },
                    { k: "Focus", v: "ML / AI Engineering" },
                    { k: "Visa", v: "OPT / CPT" },
                  ].map(({ k, v }) => (
                    <div
                      key={k}
                      style={{
                        borderRadius: 12,
                        padding: "14px 15px",
                        background: "var(--bg-3)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      <p
                        style={{
                          fontSize: 9,
                          fontFamily: "var(--mono)",
                          color: "var(--muted)",
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                        }}
                      >
                        {k}
                      </p>
                      <p
                        style={{
                          fontSize: 13,
                          fontWeight: 600,
                          color: "var(--text)",
                          marginTop: 5,
                        }}
                      >
                        {v}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div
                style={{
                  borderRadius: 18,
                  padding: "clamp(18px,3vw,24px)",
                  background: "var(--bg-3)",
                  border: "1px solid var(--border)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 9,
                }}
              >
                {[
                  {
                    label: "Email",
                    sub: "mohammed.ahmeduddin16@gmail.com",
                    href: "mailto:mohammed.ahmeduddin16@gmail.com",
                    icon: <FaEnvelope />,
                  },
                  {
                    label: "LinkedIn",
                    sub: "mohammed-ahmeduddin",
                    href: "https://www.linkedin.com/in/mohammed-ahmeduddin/",
                    icon: <FaLinkedin />,
                  },
                  {
                    label: "GitHub",
                    sub: "MohammedAhmeduddin",
                    href: "https://github.com/MohammedAhmeduddin",
                    icon: <FaGithub />,
                  },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 13,
                      padding: "13px 15px",
                      background: "rgba(0,212,255,0.03)",
                      border: "1px solid rgba(0,212,255,0.08)",
                      borderRadius: 12,
                      textDecoration: "none",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "rgba(0,212,255,0.28)";
                      el.style.background = "rgba(0,212,255,0.08)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "rgba(0,212,255,0.08)";
                      el.style.background = "rgba(0,212,255,0.03)";
                    }}
                  >
                    <span style={{ color: "var(--cyan)", fontSize: 15 }}>
                      {item.icon}
                    </span>
                    <span
                      style={{
                        flex: 1,
                        fontSize: 13,
                        fontWeight: 600,
                        color: "var(--text)",
                      }}
                    >
                      {item.label}
                    </span>
                    <span
                      style={{
                        fontSize: 10,
                        color: "var(--muted)",
                        fontFamily: "var(--mono)",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        maxWidth: 160,
                      }}
                    >
                      {item.sub}
                    </span>
                  </a>
                ))}

                <div
                  style={{
                    borderRadius: 12,
                    padding: 16,
                    background: "rgba(0,212,255,0.05)",
                    border: "1px solid rgba(0,212,255,0.14)",
                    marginTop: 4,
                  }}
                >
                  <p
                    style={{
                      fontSize: 9,
                      fontFamily: "var(--mono)",
                      color: "var(--cyan)",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      marginBottom: 9,
                    }}
                  >
                    // Best fit roles
                  </p>
                  <p
                    style={{ fontSize: 12, color: "#4a6580", lineHeight: 1.8 }}
                  >
                    ML Engineer · AI Engineer · Data Scientist · Applied
                    Research · Backend Engineer
                  </p>
                </div>

                <a
                  href="/Ahmeduddin_Mohammed_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost"
                  style={{
                    marginTop: 5,
                    textDecoration: "none",
                    fontSize: 14,
                    padding: "13px",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <FaExternalLinkAlt style={{ fontSize: 11 }} /> Download Resume
                </a>
                <a
                  href="https://www.linkedin.com/in/mohammed-ahmeduddin/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-cyan"
                  style={{
                    marginTop: 5,
                    textDecoration: "none",
                    fontSize: 14,
                    padding: "13px",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  Hire Me <FaArrowRight style={{ fontSize: 11 }} />
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
