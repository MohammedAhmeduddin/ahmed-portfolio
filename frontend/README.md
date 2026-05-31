# Ahmeduddin Mohammed — ML / AI Engineer Portfolio

**Live →** https://ahmed-portfolio-blue.vercel.app

[![Portfolio](https://img.shields.io/badge/🚀_Live_Portfolio-Visit_Now-00d4ff?style=for-the-badge)](https://ahmed-portfolio-blue.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/mohammed-ahmeduddin)
[![Resume](https://img.shields.io/badge/Resume-Download-10b981?style=for-the-badge)](https://ahmed-portfolio-blue.vercel.app/Ahmeduddin_Mohammed_Resume.pdf)

---

## Overview

Production ML/AI engineering portfolio built with React + Vite + TypeScript + Tailwind CSS v4.

Showcases 7 deployed projects across ML systems, causal inference, LLM agent orchestration, and full-stack AI applications — each with real metrics, live deployments, and comprehensive test coverage.

**Not tutorial clones. Deployed · Tested · Benchmarked.**

---

## Featured ML Projects

### 🔵 SessionScout — Real-Time E-Commerce Conversion Scoring
> AUC 0.9868 · 27ms p95 · 121 tests · 93% coverage

4-model cascade (LR → XGBoost → LSTM → Transformer) predicting mid-session purchase probability. Bidirectional LSTM (256 hidden, 2-layer) + 4-head self-attention over 121 engineered features. Confidence-gated escalation cuts GPU cost by 60%.

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github)](https://github.com/MohammedAhmeduddin/sessionscout)
[![Live](https://img.shields.io/badge/Live_Demo-HuggingFace-FFD21F?style=flat&logo=huggingface&logoColor=black)](https://huggingface.co/spaces/AhmeduddinMohammed/sessionscout)

`PyTorch` `LSTM` `Transformer` `XGBoost` `FastAPI` `Redis` `Docker` `HuggingFace`

---

### 🟣 LiftLab — Causal Inference Engine for Promotion Uplift
> 14M rows · CATE 3.5x · 53+ tests · 81% coverage

5 parallel causal estimators (PSM, DiD, T-Learner, X-Learner, CausalForestDML) on 14M-row Criteo dataset. Per-customer CATE with confidence intervals. MMD drift test flagged distribution shift at 0.136.

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github)](https://github.com/MohammedAhmeduddin/liftlab)

`DoWhy` `EconML` `CausalForestDML` `SHAP` `MLflow` `PSI` `MMD` `Streamlit`

---

### 🩷 LoanLens — AI Credit Risk Explainer (CFPB Reg-B Compliant)
> AUC 0.77 · Grounding 1.0 · 96 tests · <4s E2E

XGBoost scorer + SHAP top-5 risk factors mapped to CFPB Reg-B codes via ChromaDB RAG (9,977 regulatory chunks). GPT-4o-mini generates legally-grounded adverse action notices at temperature=0.

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github)](https://github.com/MohammedAhmeduddin/loanlens)
[![Live](https://img.shields.io/badge/Live_Demo-HuggingFace-FFD21F?style=flat&logo=huggingface&logoColor=black)](https://huggingface.co/spaces/AhmeduddinMohammed/loanlens)

`XGBoost` `SHAP` `LangChain` `ChromaDB` `GPT-4o-mini` `dbt` `PostgreSQL` `MLflow`

---

### 🟢 CareAgent — Multi-Agent Healthcare Provider Quality Scoring
> 0.36s pipeline · 99 tests · 92% coverage · GCP Cloud Run

LangGraph StateGraph routing 5 specialized agents over 10K CMS Medicare providers. Supervisor → DataCleaner → Statistical → Anomaly → Summarizer → Reporter. Pre-reserved schema fields prevent inter-agent column bugs.

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github)](https://github.com/MohammedAhmeduddin/careagent)
[![Live](https://img.shields.io/badge/Live_Demo-HuggingFace-FFD21F?style=flat&logo=huggingface&logoColor=black)](https://huggingface.co/spaces/AhmeduddinMohammed/careagent)
[![API](https://img.shields.io/badge/Live_API-GCP_Cloud_Run-4285F4?style=flat&logo=googlecloud&logoColor=white)](https://careagent-api-668260909878.us-central1.run.app)

`LangGraph` `LangChain` `GPT-4o-mini` `Isolation Forest` `GCP Cloud Run` `PostgreSQL` `MLflow`

---

## Other Projects

| Project | Description | Links |
|---------|-------------|-------|
| **AI Financial Analyst** | RAG-powered quarterly variance engine — deterministic decomposition + GPT citation grounding | [GitHub](https://github.com/MohammedAhmeduddin/quarterly-financial-variance-analyzer) · [Live](https://ai-financial-report-analyst-fawn.vercel.app) |
| **AI Money Brain** | Multi-bank finance copilot — 5+ banks, GPT-4 categorization, 192 tests | [GitHub](https://github.com/MohammedAhmeduddin/ai-money-brain) · [Live](https://ai-money-brain-api.onrender.com/docs) |
| **Portfolio Tracker** | Full-stack SaaS dashboard — auth, Recharts analytics, dark/light mode, Vercel CI/CD | [GitHub](https://github.com/MohammedAhmeduddin/developer-portfolio-tracker) · [Live](https://developer-portfolio-tracker.vercel.app) |

---

## Portfolio Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | React 19 + Vite 8 + TypeScript |
| **Styling** | Tailwind CSS v4 |
| **Animations** | Framer Motion 12 + Neural canvas (WebGL-style) + CSS keyframes |
| **Icons** | react-icons (FA + SI) |
| **Fonts** | Clash Display + Cabinet Grotesk |
| **Deployment** | Vercel (CI/CD via GitHub) |

### Key UI Features
- **Neural canvas** — 70-node reactive particle network, mouse-repellent, WebGL-style
- **Framer Motion** — spring physics page transitions, scroll-triggered reveals, staggered children
- **Typewriter** — cycles ML/AI roles with blinking cursor
- **3D tilt cards** — perspective rotateX/Y on mouse move (desktop)
- **Animated counters** — scroll-triggered count-up on stats
- **Orbit rings** — 3 rings of ML tech icons rotating around hero image
- **Mobile bottom nav** — sticky, icon + label, horizontally scrollable
- **Scroll reveal** — smooth fade+slide via IntersectionObserver

---

## Project Structure

```
ahmed-portfolio/
├── README.md
├── .gitignore
└── frontend/
    ├── index.html              # OG meta tags for LinkedIn preview
    ├── package.json
    ├── vite.config.ts
    ├── tsconfig.json
    ├── public/
    │   ├── Ahmeduddin_Mohammed_Resume.pdf
    │   ├── og-image.png        # LinkedIn thumbnail (1200×630)
    │   └── favicon.svg
    └── src/
        ├── App.tsx             # All sections + data
        ├── index.css           # Design system (CSS vars, animations)
        ├── main.tsx
        └── assets/
            ├── profile.png
            └── hero-dashboard.png
```

---

## Local Setup

```bash
git clone https://github.com/MohammedAhmeduddin/ahmed-portfolio.git
cd ahmed-portfolio/frontend
npm install
npm run dev
```

Open → http://localhost:5173

```bash
# Build for production
npm run build
npm run preview
```

### Deploy
Push to `main` → Vercel auto-deploys via GitHub integration.

---

## Contact

| | |
|--|--|
| **Email** | mohammed.ahmeduddin16@gmail.com |
| **LinkedIn** | [linkedin.com/in/mohammed-ahmeduddin](https://linkedin.com/in/mohammed-ahmeduddin) |
| **GitHub** | [github.com/MohammedAhmeduddin](https://github.com/MohammedAhmeduddin) |
| **Portfolio** | [ahmed-portfolio-blue.vercel.app](https://ahmed-portfolio-blue.vercel.app) |

---

*ML Engineer specializing in production systems — causal inference, deep learning, and LLM orchestration. Every project ships with full test coverage, real metrics, and a live deployment.*

---

## Overview

Production ML/AI engineering portfolio built with React + Vite + TypeScript + Tailwind CSS v4.

Showcases 7 deployed projects across ML systems, causal inference, LLM agent orchestration, and full-stack AI applications — each with real metrics, live deployments, and comprehensive test coverage.

**Not tutorial clones. Deployed · Tested · Benchmarked.**

---

## Featured ML Projects

### 🔵 SessionScout — Real-Time E-Commerce Conversion Scoring
> AUC 0.9868 · 27ms p95 · 121 tests · 93% coverage

4-model cascade (LR → XGBoost → LSTM → Transformer) predicting mid-session purchase probability. Bidirectional LSTM (256 hidden, 2-layer) + 4-head self-attention over 121 engineered features. Confidence-gated escalation cuts GPU cost by 60%.

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github)](https://github.com/MohammedAhmeduddin/sessionscout)
[![Live](https://img.shields.io/badge/Live_Demo-HuggingFace-FFD21F?style=flat&logo=huggingface&logoColor=black)](https://huggingface.co/spaces/AhmeduddinMohammed/sessionscout)

`PyTorch` `LSTM` `Transformer` `XGBoost` `FastAPI` `Redis` `Docker` `HuggingFace`

---

### 🟣 LiftLab — Causal Inference Engine for Promotion Uplift
> 14M rows · CATE 3.5x · 53+ tests · 81% coverage

5 parallel causal estimators (PSM, DiD, T-Learner, X-Learner, CausalForestDML) on 14M-row Criteo dataset. Per-customer CATE with confidence intervals. MMD drift test flagged distribution shift at 0.136.

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github)](https://github.com/MohammedAhmeduddin/liftlab)

`DoWhy` `EconML` `CausalForestDML` `SHAP` `MLflow` `PSI` `MMD` `Streamlit`

---

### 🩷 LoanLens — AI Credit Risk Explainer (CFPB Reg-B Compliant)
> AUC 0.77 · Grounding 1.0 · 96 tests · <4s E2E

XGBoost scorer + SHAP top-5 risk factors mapped to CFPB Reg-B codes via ChromaDB RAG (9,977 regulatory chunks). GPT-4o-mini generates legally-grounded adverse action notices at temperature=0.

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github)](https://github.com/MohammedAhmeduddin/loanlens)
[![Live](https://img.shields.io/badge/Live_Demo-HuggingFace-FFD21F?style=flat&logo=huggingface&logoColor=black)](https://huggingface.co/spaces/AhmeduddinMohammed/loanlens)

`XGBoost` `SHAP` `LangChain` `ChromaDB` `GPT-4o-mini` `dbt` `PostgreSQL` `MLflow`

---

### 🟢 CareAgent — Multi-Agent Healthcare Provider Quality Scoring
> 0.36s pipeline · 99 tests · 92% coverage · GCP Cloud Run

LangGraph StateGraph routing 5 specialized agents over 10K CMS Medicare providers. Supervisor → DataCleaner → Statistical → Anomaly → Summarizer → Reporter. Pre-reserved schema fields prevent inter-agent column bugs.

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github)](https://github.com/MohammedAhmeduddin/careagent)
[![Live](https://img.shields.io/badge/Live_Demo-HuggingFace-FFD21F?style=flat&logo=huggingface&logoColor=black)](https://huggingface.co/spaces/AhmeduddinMohammed/careagent)
[![API](https://img.shields.io/badge/Live_API-GCP_Cloud_Run-4285F4?style=flat&logo=googlecloud&logoColor=white)](https://careagent-api-668260909878.us-central1.run.app)

`LangGraph` `LangChain` `GPT-4o-mini` `Isolation Forest` `GCP Cloud Run` `PostgreSQL` `MLflow`

---

## Other Projects

| Project | Description | Links |
|---------|-------------|-------|
| **AI Financial Analyst** | RAG-powered quarterly variance engine — deterministic decomposition + GPT citation grounding | [GitHub](https://github.com/MohammedAhmeduddin/quarterly-financial-variance-analyzer) · [Live](https://ai-financial-report-analyst-fawn.vercel.app) |
| **AI Money Brain** | Multi-bank finance copilot — 5+ banks, GPT-4 categorization, 192 tests | [GitHub](https://github.com/MohammedAhmeduddin/ai-money-brain) · [Live](https://ai-money-brain-api.onrender.com/docs) |
| **Portfolio Tracker** | Full-stack SaaS dashboard — auth, Recharts analytics, dark/light mode, Vercel CI/CD | [GitHub](https://github.com/MohammedAhmeduddin/developer-portfolio-tracker) · [Live](https://developer-portfolio-tracker.vercel.app) |

---

## Portfolio Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | React 19 + Vite 8 + TypeScript |
| **Styling** | Tailwind CSS v4 |
| **Animations** | Neural canvas (WebGL-style), CSS keyframes, IntersectionObserver |
| **Icons** | react-icons (FA + SI) |
| **Fonts** | Clash Display + Cabinet Grotesk |
| **Deployment** | Vercel (CI/CD via GitHub) |

### Key UI Features
- **Neural canvas** — 70-node reactive particle network, mouse-repellent, WebGL-style
- **Typewriter** — cycles ML/AI roles with blinking cursor
- **3D tilt cards** — perspective rotateX/Y on mouse move (desktop)
- **Animated counters** — scroll-triggered count-up on stats
- **Orbit rings** — 3 rings of ML tech icons rotating around hero image
- **Mobile bottom nav** — sticky, icon + label, horizontally scrollable
- **Scroll reveal** — IntersectionObserver fade+slide on all cards

---

## Local Setup

```bash
git clone https://github.com/MohammedAhmeduddin/ahmed-portfolio.git
cd ahmed-portfolio/frontend
npm install
npm run dev
```

Open → http://localhost:5173

### Build for production
```bash
npm run build
npm run preview
```

### Deploy
Push to `main` → Vercel auto-deploys via GitHub integration.

---

## Project Structure

```
frontend/
├── src/
│   ├── App.tsx              # Main component (all sections + data)
│   ├── index.css            # Design system (CSS vars, animations)
│   └── assets/
│       ├── profile.png      # Profile photo
│       └── hero-dashboard.png
├── public/
│   ├── Ahmeduddin_Mohammed_Resume.pdf
│   └── og-image.png         # LinkedIn/OG thumbnail
└── index.html               # OG meta tags
```

---

## Contact

| | |
|--|--|
| **Email** | mohammed.ahmeduddin16@gmail.com |
| **LinkedIn** | [linkedin.com/in/mohammed-ahmeduddin](https://linkedin.com/in/mohammed-ahmeduddin) |
| **GitHub** | [github.com/MohammedAhmeduddin](https://github.com/MohammedAhmeduddin) |
| **Portfolio** | [ahmed-portfolio-blue.vercel.app](https://ahmed-portfolio-blue.vercel.app) |

---

*ML Engineer specializing in production systems — causal inference, deep learning, and LLM orchestration. Every project ships with full test coverage, real metrics, and a live deployment.*
