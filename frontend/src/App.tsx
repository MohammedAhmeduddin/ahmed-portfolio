import type { ReactNode } from "react";
import {
  FaReact,
  FaPython,
  FaDocker,
  FaDatabase,
  FaCode,
  FaServer,
  FaBrain,
  FaCloud,
  FaTools,
  FaLayerGroup,
} from "react-icons/fa";
import {
  SiFastapi,
  SiPostgresql,
  SiTypescript,
  SiOpenai,
} from "react-icons/si";
import profileImage from "./assets/profile.png";
import heroImage from "./assets/hero-dashboard.png";
import SpaceHoverBackground from "./components/SpaceHoverBackground";

function TechBadge({
  label,
  icon,
  className = "",
}: {
  label: string;
  icon: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`counter-orbit absolute flex items-center gap-2 rounded-full border border-white/10 bg-black/70 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_25px_rgba(139,92,246,0.45)] backdrop-blur-md transition hover:scale-110 hover:border-purple-400 ${className}`}
    >
      <span className="text-xl">{icon}</span>
      <span className="hidden sm:inline">{label}</span>
    </div>
  );
}

function HeroOrbit() {
  return (
    <div className="relative mx-auto flex min-h-[340px] w-full max-w-[620px] items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-[#080d1a] p-5 shadow-[0_0_60px_rgba(99,102,241,0.25)] md:min-h-[430px]">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/10 to-transparent" />

      <div className="absolute h-[260px] w-[260px] rounded-full border border-purple-400/20 md:h-[360px] md:w-[360px]" />
      <div className="absolute h-[330px] w-[330px] rounded-full border border-blue-400/10 md:h-[460px] md:w-[460px]" />

      <img
        src={heroImage}
        alt="Laptop dashboard preview"
        className="relative z-10 w-[82%] rounded-2xl object-cover shadow-2xl"
      />

      <div className="orbit absolute z-20 h-[260px] w-[260px] md:h-[380px] md:w-[380px] [animation-duration:55s]">
        <TechBadge
          label="React"
          icon={<FaReact className="text-cyan-300" />}
          className="-left-6 top-16"
        />
        <TechBadge
          label="FastAPI"
          icon={<SiFastapi className="text-emerald-300" />}
          className="-right-8 top-24"
        />
        <TechBadge
          label="PostgreSQL"
          icon={<SiPostgresql className="text-blue-300" />}
          className="bottom-12 -right-4"
        />
        <TechBadge
          label="Python"
          icon={<FaPython className="text-yellow-300" />}
          className="bottom-8 left-4"
        />
      </div>

      <div className="orbit absolute z-20 h-[320px] w-[320px] md:h-[480px] md:w-[480px] [animation-duration:95s]">
        <TechBadge
          label="TypeScript"
          icon={<SiTypescript className="text-blue-400" />}
          className="left-8 top-2"
        />
        <TechBadge
          label="Docker"
          icon={<FaDocker className="text-blue-300" />}
          className="right-14 top-4"
        />
        <TechBadge
          label="RAG"
          icon={<SiOpenai className="text-purple-300" />}
          className="bottom-2 left-24"
        />
        <TechBadge
          label="Database"
          icon={<FaDatabase className="text-indigo-300" />}
          className="bottom-20 -left-3"
        />
      </div>
    </div>
  );
}

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05070d] text-white">
      {/* AI Portfolio Assistant */}
      <div className="fixed bottom-5 right-5 z-50 w-[calc(100%-40px)] max-w-sm rounded-3xl border border-white/10 bg-[#080d1a]/95 p-4 shadow-[0_0_45px_rgba(139,92,246,0.25)] backdrop-blur">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-white">
              AI Portfolio Assistant
            </p>
            <p className="text-xs text-gray-400">
              Coming soon · Resume-aware chatbot
            </p>
          </div>

          <span className="rounded-full bg-purple-500/20 px-3 py-1 text-xs text-purple-200">
            AI
          </span>
        </div>

        <p className="mt-4 text-sm leading-6 text-gray-400">
          Recruiters will be able to ask about my projects, skills, resume, and
          role fit.
        </p>

        <div className="mt-4 flex gap-2">
          <input
            disabled
            placeholder="Ask about my experience..."
            className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm outline-none placeholder:text-gray-500"
          />

          <button
            disabled
            className="rounded-xl bg-purple-600 px-4 py-3 text-sm font-semibold text-white opacity-70"
          >
            Ask
          </button>
        </div>
      </div>
      <SpaceHoverBackground />
      <div className="relative z-10 mx-auto grid max-w-[1500px] grid-cols-1 gap-5 p-4 lg:grid-cols-[280px_1fr]">
        <aside className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 lg:sticky lg:top-4 lg:h-[calc(100vh-32px)]">
          <div className="text-center">
            <img
              src={profileImage}
              alt="Ahmeduddin Mohammed"
              className="mx-auto h-36 w-36 rounded-full border-4 border-purple-500 bg-white object-cover shadow-[0_0_35px_rgba(168,85,247,0.7)]"
            />

            <h1 className="mt-5 text-3xl font-bold">
              Ahmeduddin <span className="text-purple-400">Mohammed</span>
            </h1>

            <p className="mt-2 text-sm text-purple-300">Software Engineer</p>
            <p className="mt-3 text-sm text-gray-400">
              📍 Harrison, New Jersey, USA
            </p>
          </div>

          <nav className="mt-8 space-y-2">
            {[
              "Home",
              "About",
              "Experience",
              "Projects",
              "Research",
              "Skills",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block rounded-xl px-4 py-3 text-sm text-gray-300 hover:bg-purple-500/20 hover:text-white"
              >
                {item}
              </a>
            ))}
          </nav>
        </aside>

        <section className="space-y-5">
          <section
            id="home"
            className="grid min-h-[620px] grid-cols-1 gap-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-10 xl:grid-cols-[1fr_650px]"
          >
            <div className="flex flex-col justify-center">
              <p className="mb-4 w-fit rounded-full bg-white/5 px-4 py-2 text-sm text-gray-300">
                👋 Hey there!
              </p>

              <h2 className="text-5xl font-black leading-tight md:text-7xl">
                I’m Ahmeduddin <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Mohammed
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-300">
                I build scalable software systems that connect backend
                engineering, AI workflows, and full-stack product development.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Full Stack Developer",
                  "Backend Engineer",
                  "AI Engineer",
                  "Python Developer",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#projects"
                  className="rounded-xl bg-gradient-to-r from-blue-600 to-pink-500 px-6 py-3 text-center font-semibold"
                >
                  View My Work →
                </a>
                <a
                  href="/Ahmeduddin_Mohammed_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-center font-semibold hover:bg-purple-500/20"
                >
                  View Resume
                </a>
              </div>
            </div>

            <HeroOrbit />
          </section>

          {/* About Section */}
          <section
            id="about"
            className="rounded-3xl border border-white/10 bg-[#080d1a] p-6 md:p-8"
          >
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              {/* Left Content */}
              <div>
                <div className="mb-6 h-1 w-16 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400" />

                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
                  About
                </p>

                <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight md:text-4xl">
                  Building scalable systems, APIs, and AI-driven products.
                </h2>

                <div className="mt-6 space-y-4 border-l border-white/10 pl-5">
                  <p className="max-w-3xl leading-7 text-gray-300">
                    I’m a Software Engineer focused on building production-grade
                    systems across backend, full-stack, and AI-driven
                    applications. My work centers on designing reliable APIs,
                    structured data systems, and intelligent workflows that
                    operate efficiently at scale.
                  </p>

                  <p className="max-w-3xl leading-7 text-gray-400">
                    I’ve developed RAG-based AI platforms, backend architectures
                    using FastAPI, and full-stack applications with React and
                    TypeScript. I focus on strong system design, clean
                    abstractions, and data models that are maintainable,
                    extensible, and performance-oriented.
                  </p>

                  <p className="max-w-3xl leading-7 text-gray-400">
                    My experience across engineering, teaching, and operations
                    has strengthened my ability to break down complex systems,
                    debug efficiently, and deliver solutions under real-world
                    constraints.
                  </p>
                </div>
              </div>

              {/* Right Summary Panel */}
              <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
                  Engineering Profile
                </p>

                <div className="mt-5 space-y-4">
                  {[
                    {
                      label: "Core Focus",
                      value:
                        "Backend Engineering · Full-Stack Systems · AI Applications",
                    },
                    {
                      label: "What I Build",
                      value:
                        "REST APIs · RAG Systems · Dashboards · Authentication Systems",
                    },
                    {
                      label: "Engineering Principles",
                      value:
                        "Scalability · Reliability · Maintainability · Performance",
                    },
                    {
                      label: "Current Direction",
                      value:
                        "Verifiable AI Outputs · Backend-heavy Products · Product Engineering",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                    >
                      <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                        {item.label}
                      </p>
                      <p className="mt-2 text-sm font-semibold leading-6 text-white">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-2 gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-5 md:grid-cols-4">
            {[
              ["3+", "Years Learning & Building"],
              ["10+", "Projects Built"],
              ["6+", "Core Technologies"],
              ["AI", "Focused Engineering"],
            ].map(([number, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-[#080d1a] p-5 text-center shadow-[0_0_30px_rgba(139,92,246,0.12)]"
              >
                <p className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-3xl font-black text-transparent">
                  {number}
                </p>
                <p className="mt-2 text-sm text-gray-400">{label}</p>
              </div>
            ))}
          </section>

          <section
            id="projects"
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8"
          >
            <div className="mb-8">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-purple-300">
                Featured Work •
              </p>
              <h2 className="mt-2 text-3xl font-black md:text-4xl">
                Product-style Projects
              </h2>
              <p className="mt-3 max-w-2xl text-gray-400">
                These projects are presented like real products — with problem,
                solution, tech stack, and impact.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {[
                {
                  title: "AI Financial Report Analyst",
                  type: "AI + Backend",
                  image: "/project-financial.png",
                  desc: "RAG-powered financial analysis platform for extracting metrics and explaining variance from quarterly reports.",
                  stack: ["FastAPI", "React", "RAG", "OpenAI"],
                  github:
                    "https://github.com/MohammedAhmeduddin/quarterly-financial-variance-analyzer",
                  live: "https://ai-financial-report-analyst-fawn.vercel.app",
                },
                {
                  title: "Developer Portfolio Tracker",
                  type: "Full Stack",
                  image: "/project-portfolio.png",
                  desc: "Dashboard platform with protected routes, analytics charts, filters, and developer profile workflows.",
                  stack: ["React", "TypeScript", "Vite", "Recharts"],
                  github:
                    "https://github.com/MohammedAhmeduddin/developer-portfolio-tracker",
                  live: "https://developer-portfolio-tracker.vercel.app",
                },
                {
                  title: "User Management System",
                  type: "Backend Engineering",
                  image: "/project-user-management.png",
                  desc: "Secure authentication backend with JWT, password rules, profile workflows, PostgreSQL, Docker, and tests.",
                  stack: ["FastAPI", "PostgreSQL", "Docker", "Pytest"],
                  github:
                    "https://github.com/MohammedAhmeduddin/user_management",
                  live: "",
                },
              ].map((project) => (
                <div
                  key={project.title}
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-[#080d1a] transition hover:-translate-y-1 hover:border-purple-400/40 hover:shadow-[0_0_45px_rgba(139,92,246,0.22)]"
                >
                  <div className="relative h-56 overflow-hidden border-b border-white/10 bg-black">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                    />

                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#080d1a] to-transparent" />

                    {project.title === "AI Financial Report Analyst" && (
                      <span className="absolute right-4 top-4 rounded-full bg-yellow-500/20 px-3 py-1 text-xs font-semibold text-yellow-300">
                        ⭐ Featured
                      </span>
                    )}
                  </div>

                  <div className="p-6">
                    <p className="text-sm font-bold uppercase text-purple-300">
                      {project.type}
                    </p>

                    <h3 className="mt-2 text-2xl font-black">
                      {project.title}
                    </h3>

                    <p className="mt-3 min-h-[72px] text-sm leading-6 text-gray-400">
                      {project.desc}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-100"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-1 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold hover:bg-purple-500/20"
                      >
                        GitHub
                      </a>

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="flex flex-1 items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-500 px-4 py-3 text-sm font-semibold text-white hover:opacity-90"
                        >
                          Live Demo ↗
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-dashed border-purple-400/40 bg-purple-500/5 p-6">
              <p className="text-lg font-bold text-purple-200">
                🚀 More production-grade projects coming soon
              </p>
              <p className="mt-2 text-gray-400">
                I’ll keep adding stronger full-stack, AI, backend, and
                product-focused projects here.
              </p>
            </div>
          </section>

          <section
            id="experience"
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8"
          >
            <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
                  Experience
                </p>
                <h2 className="mt-2 text-3xl font-black md:text-4xl">
                  Professional Background
                </h2>
                <p className="mt-3 max-w-3xl text-gray-400">
                  Experience across software instruction, data science, and
                  operations, with a focus on technical communication, problem
                  solving, and reliable execution.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#080d1a] px-5 py-4">
                <p className="text-sm text-gray-400">Strengths</p>
                <p className="mt-1 text-sm font-semibold text-white">
                  Teaching · Data Analysis · Operations · Communication
                </p>
              </div>
            </div>

            <div className="relative space-y-5">
              {[
                {
                  role: "Graduate Student Associate",
                  company: "Strategic Events & Conference Services, NJIT",
                  date: "Sep 2024 – May 2025",
                  location: "Newark, NJ",
                  badge: "Mr. Man With A Mission Award",
                  summary:
                    "Supported high-volume campus event operations by managing reservations, inquiry records, scheduling updates, and real-time service requests across major NJIT event spaces.",
                  highlights: [
                    "Managed logistics and reservation support for 150+ monthly events across NJIT campus facilities.",
                    "Assisted 1,000+ students, staff, visitors, and event attendees with scheduling, navigation, and service requests.",
                    "Maintained accurate event records using campus databases and scheduling systems, supporting 99% booking accuracy.",
                    "Coordinated with 5+ departments and NJIT Police on event schedules, venue closures, access details, and operational communication.",
                    "Resolved 50+ monthly on-the-spot issues involving room access, attendee concerns, lost items, and logistical disruptions.",
                    "Occasionally used SQL to explore campus center database records and support data lookup needs.",
                  ],
                },
                {
                  role: "Python Programming Instructor",
                  company: "Full Stack Academy",
                  date: "Aug 2023 – Dec 2023",
                  location: "Hyderabad, India",
                  badge: "Certificate of Appreciation",
                  summary:
                    "Delivered in-person Python programming instruction, helping students build strong foundations in programming, debugging, OOP, data structures, and problem solving.",
                  highlights: [
                    "Taught Python fundamentals, functions, OOP, data structures, algorithms, and hands-on project development.",
                    "Explained complex programming concepts through practical examples, coding exercises, and debugging sessions.",
                    "Provided one-on-one learner support to improve logic building, coding style, and real-world Python application.",
                    "Collaborated with the academic team to maintain teaching quality, curriculum delivery, and classroom operations.",
                    "Strengthened technical communication, mentoring, leadership, and presentation skills.",
                  ],
                },
                {
                  role: "Data Science Intern",
                  company: "Delta Sigma Technologies",
                  date: "Jun 2022 – Jul 2022",
                  location: "Remote · Hyderabad, India",
                  badge: "Certificate of Internship",
                  summary:
                    "Supported data science workflows by preparing datasets, performing exploratory analysis, building models, and communicating findings to technical mentors.",
                  highlights: [
                    "Performed data cleaning, preprocessing, and feature engineering for machine learning workflows.",
                    "Conducted exploratory data analysis using Python, Pandas, NumPy, and Matplotlib.",
                    "Built, tested, and evaluated statistical and machine learning models for internal project requirements.",
                    "Created visualizations and presented findings to mentors and technical teams.",
                    "Collaborated with interns and technical staff to improve documentation, data workflows, and model reliability.",
                  ],
                },
              ].map((job, index) => (
                <div
                  key={job.role}
                  className="relative rounded-3xl border border-white/10 bg-[#080d1a] p-6 transition hover:border-purple-400/40 hover:bg-[#0b1224]"
                >
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-purple-400/30 bg-purple-500/10 text-sm font-bold text-purple-200">
                        0{index + 1}
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-purple-300">
                          {job.company}
                        </p>
                        <h3 className="mt-1 text-2xl font-black text-white">
                          {job.role}
                        </h3>
                        <p className="mt-2 text-sm text-gray-500">
                          {job.location}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 lg:items-end">
                      <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-gray-300">
                        {job.date}
                      </span>
                      <span className="rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 text-xs font-medium text-purple-200">
                        {job.badge}
                      </span>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-6 text-gray-300">
                    {job.summary}
                  </p>

                  <div className="mt-5 grid gap-3">
                    {job.highlights.map((point) => (
                      <div
                        key={point}
                        className="flex gap-3 text-sm leading-6 text-gray-400"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section
            id="research"
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8"
          >
            <div className="mb-8">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-purple-300">
                Research • Coming Soon
              </p>
              <h2 className="mt-2 text-3xl font-black md:text-4xl">
                Research & Publications
              </h2>
              <p className="mt-3 max-w-2xl text-gray-400">
                I’ll be adding my papers, publication links, PDFs, code, and
                datasets once they are published.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {[
                {
                  title:
                    "Detection and Classification of Brain Tumors in MRI Using YOLO-NAS Algorithm",
                  status: "In Progress",
                  desc: "Research focused on applying YOLO-NAS for medical image analysis, brain tumor detection, and classification using MRI scans.",
                  tags: ["YOLO-NAS", "Medical AI", "MRI", "Computer Vision"],
                },
                {
                  title:
                    "A Framework for Verifiable AI Output: Retrieval-Augmented Generation in Practice",
                  status: "In Progress",
                  desc: "Research focused on building reliable RAG systems with verifiable outputs, source-grounded answers, and practical AI validation workflows.",
                  tags: ["RAG", "LLM", "Verifiable AI", "AI Systems"],
                },
              ].map((paper) => (
                <div
                  key={paper.title}
                  className="rounded-3xl border border-white/10 bg-[#080d1a] p-6 transition hover:border-purple-400/40 hover:shadow-[0_0_35px_rgba(139,92,246,0.18)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-purple-300">
                        {paper.status}
                      </p>
                      <h3 className="mt-2 text-2xl font-black">
                        {paper.title}
                      </h3>
                    </div>

                    <span className="rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1 text-xs text-purple-200">
                      Research
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-gray-400">
                    {paper.desc}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {paper.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="mt-6 rounded-xl border border-dashed border-purple-400/30 bg-purple-500/5 px-4 py-3 text-sm font-semibold text-purple-200">
                    Publication coming soon
                  </button>
                </div>
              ))}
            </div>
          </section>

          <section
            id="skills"
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8"
          >
            <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
                  Technical Expertise
                </p>
                <h2 className="mt-2 text-3xl font-black md:text-4xl">
                  Engineering Skills & Tools
                </h2>
                <p className="mt-3 max-w-3xl text-gray-400">
                  Technologies I use to design, build, test, and deploy
                  full-stack applications, backend APIs, AI workflows, and
                  data-driven systems.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#080d1a] px-5 py-4">
                <p className="text-sm text-gray-400">Focus Areas</p>
                <p className="mt-1 text-sm font-semibold text-white">
                  Full-Stack · Backend · AI Systems · Cloud Deployment
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {[
                {
                  title: "Programming Languages",
                  level: "Core",
                  icon: <FaCode />,
                  skills: [
                    "Python",
                    "TypeScript",
                    "JavaScript",
                    "SQL",
                    "Java",
                    "C/C++",
                  ],
                },
                {
                  title: "Frontend Engineering",
                  level: "Application UI",
                  icon: <FaReact />,
                  skills: [
                    "React",
                    "TypeScript",
                    "Vite",
                    "HTML5",
                    "CSS3",
                    "Material-UI",
                    "Recharts",
                    "Responsive Design",
                  ],
                },
                {
                  title: "Backend & API Development",
                  level: "Service Layer",
                  icon: <FaServer />,
                  skills: [
                    "FastAPI",
                    "Flask",
                    "Django",
                    "Node.js",
                    "Express.js",
                    "REST APIs",
                    "JWT",
                    "Microservices",
                    "Validation",
                    "Error Handling",
                  ],
                },
                {
                  title: "Databases & Data Modeling",
                  level: "Persistence",
                  icon: <FaDatabase />,
                  skills: [
                    "PostgreSQL",
                    "MySQL",
                    "SQLite",
                    "Redis",
                    "Alembic",
                    "Schema Design",
                    "Query Optimization",
                    "Database Optimization",
                  ],
                },
                {
                  title: "AI, Data Science & ML",
                  level: "Intelligent Systems",
                  icon: <FaBrain />,
                  skills: [
                    "OpenAI API",
                    "RAG",
                    "Pandas",
                    "NumPy",
                    "Scikit-learn",
                    "SHAP",
                    "Feature Engineering",
                    "Matplotlib",
                    "Seaborn",
                  ],
                },
                {
                  title: "DevOps, Testing & Deployment",
                  level: "Delivery",
                  icon: <FaCloud />,
                  skills: [
                    "Docker",
                    "Docker Compose",
                    "Nginx",
                    "GitHub Actions",
                    "Vercel CI/CD",
                    "GCP",
                    "Pytest",
                    "Unit Testing",
                    "Integration Testing",
                    "Postman",
                  ],
                },
                {
                  title: "Developer Tools",
                  level: "Workflow",
                  icon: <FaTools />,
                  skills: [
                    "Git",
                    "GitHub",
                    "VS Code",
                    "PyCharm",
                    "Linux",
                    "Node.js",
                    "npm",
                    "Agile Development",
                  ],
                },
                {
                  title: "Engineering Competencies",
                  level: "System Design",
                  icon: <FaLayerGroup />,
                  skills: [
                    "Software Architecture",
                    "API Design",
                    "Authentication",
                    "Test Coverage",
                    "TDD",
                    "RAG",
                    "Schema Design",
                    "System Documentation",
                  ],
                },
              ].map((group) => (
                <div
                  key={group.title}
                  className="rounded-2xl border border-white/10 bg-[#080d1a] p-5 transition hover:border-purple-400/40 hover:bg-[#0b1224]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-purple-400/30 bg-purple-500/10 text-xl text-purple-300">
                        {group.icon}
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white">
                          {group.title}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {group.level}
                        </p>
                      </div>
                    </div>

                    <span className="rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-200">
                      {group.skills.length}
                    </span>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
          {/* Contact Section */}
          <section
            id="contact"
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8"
          >
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_460px]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
                  Contact
                </p>

                <h2 className="mt-2 text-3xl font-black md:text-4xl">
                  Let’s connect and build.
                </h2>

                <p className="mt-4 max-w-2xl text-gray-400">
                  I’m open to software engineering, backend engineering,
                  full-stack development, and AI-focused roles where I can
                  contribute to reliable, scalable, and user-focused products.
                </p>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-[#080d1a] p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                      Availability
                    </p>
                    <p className="mt-2 text-sm font-semibold text-white">
                      Open to roles and collaborations
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#080d1a] p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                      Location
                    </p>
                    <p className="mt-2 text-sm font-semibold text-white">
                      Harrison, New Jersey, USA
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-[#080d1a] p-5">
                <div className="space-y-3">
                  <a
                    href="mailto:mohammed.ahmeduddin16@gmail.com"
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm font-semibold text-white transition hover:border-purple-400/40 hover:bg-purple-500/10"
                  >
                    <span>Email</span>
                    <span className="text-gray-400">
                      mohammed.ahmeduddin16@gmail.com
                    </span>
                  </a>

                  <a
                    href="tel:+18624057606"
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm font-semibold text-white transition hover:border-purple-400/40 hover:bg-purple-500/10"
                  >
                    <span>Phone</span>
                    <span className="text-gray-400">+1 (862) 405-7606</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/mohammed-ahmeduddin/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm font-semibold text-white transition hover:border-purple-400/40 hover:bg-purple-500/10"
                  >
                    <span>LinkedIn</span>
                    <span className="text-gray-400">View Profile ↗</span>
                  </a>

                  <a
                    href="https://github.com/MohammedAhmeduddin"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm font-semibold text-white transition hover:border-purple-400/40 hover:bg-purple-500/10"
                  >
                    <span>GitHub</span>
                    <span className="text-gray-400">View Projects ↗</span>
                  </a>
                </div>

                <div className="mt-5 rounded-2xl border border-purple-400/30 bg-purple-500/10 p-4">
                  <p className="text-sm font-semibold text-purple-200">
                    Best fit roles
                  </p>
                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    Software Engineer · Backend Engineer · Full-Stack Developer
                    · AI Engineer
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}

export default App;
