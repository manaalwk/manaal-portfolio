export type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
  kind: "web3" | "web2";
  year?: string;
};

export type Experience = {
  role: string;
  org: string;
  year: string;
  bullets: string[];
};

export type Writeup = {
  title: string;
  severity: "High" | "Medium" | "Low" | "Informational";
  summary: string;
  highlights: string[];
};

export const site = {
  name: "Manaal Waheed Khan",
  headline: "Smart Contract Security Researcher • Web3 x AI • Full‑Stack",
  bio:
    "Computer Engineering (2021–2025) with hands-on experience shipping full‑stack products and researching real‑world vulnerabilities. I focus on smart contract security, DeFi risk, and building tools people actually use. Actively looking for Smart Contract Security / Web3 roles (remote / hybrid).",
  location: "Hyderabad, India",
  email: "khanmanaal89@gmail.com",
  phone: "+91 7416578038",
  links: {
    github: "https://github.com/manaalwk",
    linkedin: "https://in.linkedin.com/in/manaal-waheed-khan-492b56259",
    resume: "/resume.pdf"
  }
};

export const skills = {
  "Smart Contract Security": ["Threat modeling", "Access control", "Upgradeability risks", "PoC writing", "Report writing"],
  "Web3 Dev": ["Solidity", "Ethers.js", "Hardhat / Foundry (as used)", "Token launches", "dApp integration"],
  "Frontend / Full‑Stack": ["React", "Next.js", "Node.js", "REST APIs", "Firebase"],
  "ML / CV": ["Python", "OpenCV", "Scikit‑learn", "Streamlit", "TensorFlow (basic)"]
};

export const writeups: Writeup[] = [
  {
    title: "Reflector V3 — Overcharging due to uncapped records/periods fee parameter",
    severity: "Medium",
    summary:
      "Users can request an excessive number of records and get charged for all requested records, while protocol logic caps the delivered records internally (e.g., 20). This creates direct, repeatable overcharging.",
    highlights: [
      "Fee charged on user input without bounds; output is capped internally.",
      "Users pay for data they never receive → unfair + financially harmful.",
      "Fix: validate/cap before charging; charge only for delivered records."
    ]
  }
];

export const experience: Experience[] = [
  {
    role: "Frontend Developer Intern",
    org: "Qualinsoft Technologies",
    year: "2024",
    bullets: [
      "Built an e‑commerce platform for electronic gadgets using React and Node.js.",
      "Designed interactive UI components and integrated REST APIs for real‑time inventory updates."
    ]
  },
  {
    role: "ML Intern",
    org: "YBI Foundation",
    year: "2023",
    bullets: [
      "Built ML models for vehicle mileage prediction and fake news classification.",
      "Applied NLP techniques and regression algorithms using Python and Scikit‑learn."
    ]
  },
  {
    role: "Cybersecurity Researcher",
    org: "Centre of Excellence, JNTUH",
    year: "2023",
    bullets: [
      "Investigated Log4j and MoveIt vulnerabilities: threat vectors, mitigations, and response strategies.",
      "Produced technical reports on attack surfaces and active defense measures."
    ]
  }
];

export const projects: Project[] = [
  // Web3 (from GitHub)
  {
    title: "Liquidstake Loans",
    description: "Shariah‑compliant DeFi lending protocol on Casper (0% interest concept using staking rewards).",
    tags: ["Web3", "Casper", "DeFi", "TypeScript"],
    href: "https://github.com/manaalwk/Liquidstake-Loans",
    kind: "web3",
    year: "2026"
  },
  {
    title: "AI Trading Agent",
    description: "An agent-style trading project (automation + strategy experiments).",
    tags: ["Web3", "Agents", "TypeScript"],
    href: "https://github.com/manaalwk/ai-trading-agent",
    kind: "web3",
    year: "2026"
  },
  {
    title: "Carbon Marketplace",
    description: "Decentralized marketplace for tokenized carbon credits on Creditcoin.",
    tags: ["Web3", "Marketplace"],
    href: "https://github.com/manaalwk/carbon-marketplace",
    kind: "web3",
    year: "2025"
  },
  {
    title: "Aptos Vault Hackathon",
    description: "Copy-trading vaults on Aptos: Move contracts + React dashboard + social trading concept.",
    tags: ["Web3", "Aptos", "Move", "Hackathon"],
    href: "https://github.com/manaalwk/aptos-vault-hackathon",
    kind: "web3",
    year: "2025"
  },
  {
    title: "Aptos dApp",
    description: "Aptos dApp experimentation repo (frontend + on-chain interactions).",
    tags: ["Web3", "Aptos", "JavaScript"],
    href: "https://github.com/manaalwk/aptos-dapp",
    kind: "web3",
    year: "2025"
  },
  {
    title: "Funny Token",
    description: "Token experiment repo (mint/transfer flows + basics).",
    tags: ["Web3", "Token", "JavaScript"],
    href: "https://github.com/manaalwk/funny-token",
    kind: "web3",
    year: "2025"
  },

  // Web2 (resume + GitHub)
  {
    title: "Gamify Your Life",
    description: "Gamified habit tracker with quests, XP, streaks, and celebration UI.",
    tags: ["React", "Firebase", "Product"],
    href: "https://github.com/manaalwk",
    kind: "web2",
    year: "2025"
  },
  {
    title: "AI‑Powered Sports Video Analysis",
    description: "Player tracking and action insights using OpenCV + Streamlit; explored real‑time commentary generation.",
    tags: ["Python", "OpenCV", "Streamlit"],
    href: "https://github.com/manaalwk/sports-sage-analysis-88",
    kind: "web2",
    year: "2025"
  },
  {
    title: "Person Tracking",
    description: "Computer vision project for person tracking (experiments + implementation).",
    tags: ["Computer Vision"],
    href: "https://github.com/manaalwk/Person-Tracking",
    kind: "web2",
    year: "2024"
  },
  {
    title: "MERN Friends App",
    description: "Full‑stack MERN app (auth + CRUD patterns).",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    href: "https://github.com/manaalwk/mern-friends-app",
    kind: "web2",
    year: "2024"
  },
  {
    title: "Node.js API",
    description: "REST API practice repo for backend fundamentals.",
    tags: ["Node.js", "REST"],
    href: "https://github.com/manaalwk/Node.js-API",
    kind: "web2",
    year: "2024"
  },
  {
    title: "Angular Country App",
    description: "Angular UI project consuming country data APIs.",
    tags: ["Angular", "HTML"],
    href: "https://github.com/manaalwk/Angular-country-app",
    kind: "web2",
    year: "2024"
  }
];
