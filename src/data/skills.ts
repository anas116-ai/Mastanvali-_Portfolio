export interface SkillCategory {
  category: string;
  badge: string;
  skills: string[];
}

export interface SkillCluster {
  title: string;
  skills: string[];
}

export const technicalSkills: SkillCategory[] = [
  {
    category: "Enterprise Applications",
    badge: "CORE STACK",
    skills: [
      "SAP BODS 4.3 (Data Services)",
      "SAP ECC (IDoc & BAPI Interfaces)",
      "SAP BW Process-Chain Monitoring",
      "AWS S3 Bucket Loading",
      "SAP S/4HANA Loading",
      "Migration Tools: LTMOM, LSMW, LTMC",
      "Data Services Management Console",
    ],
  },
  {
    category: "Data Analysis & Validation",
    badge: "INTEGRITY & SQL",
    skills: [
      "SQL Server Validation",
      "T-SQL Data Extraction",
      "Source-to-Target Reconciliation",
      "Source-to-Target Mapping (STTM)",
      "Data Quality Analysis",
      "SCD Type 1 & Type 2",
      "Duplicate Identification & Checksums",
    ],
  },
  {
    category: "Production Support & Reliability",
    badge: "OPERATIONS",
    skills: [
      "24/7 Production Support",
      "ServiceNow Incident Management",
      "Root Cause Analysis (RCA)",
      "Log Analysis & Troubleshooting",
      "SAP BW Process-Chain Monitoring",
      "User Acceptance Testing (UAT)",
      "Enterprise SLA Compliance",
    ],
  },
  {
    category: "Autonomous AI & Vibe Coding",
    badge: "AI & VIBE CODING",
    skills: [
      "Python 3.12 & FastAPI",
      "Multi-Agent DAG Orchestration (AnsiQ)",
      "Ollama Local LLMs & Cloud APIs",
      "Next.js 15 & React 19",
      "TypeScript & Tailwind CSS",
      "Electron & better-sqlite3 WAL",
      "Git & GitHub Workflows",
    ],
  },
  {
    category: "Documentation & Reporting",
    badge: "PROCESS & COMPLIANCE",
    skills: [
      "Technical Documentation",
      "Validation Reports",
      "Test Case Preparation",
      "Report Writing",
      "Process Documentation",
      "Requirement Analysis",
    ],
  },
];

export const skillClusters: SkillCluster[] = [
  {
    title: "Enterprise Data",
    skills: [
      "SAP BODS 4.3",
      "SAP ECC",
      "AWS S3 Bucket Loading",
      "SAP S/4HANA Loading",
      "SAP BW Process Chain Monitoring",
      "Migration Tools: LTMOM, LSMW, LTMC",
      "SQL Server Validation",
      "IDocs & BAPI",
      "SCD Type 1 & 2",
    ],
  },
  {
    title: "Production Support",
    skills: [
      "ServiceNow Incident Triage",
      "Root Cause Analysis (RCA)",
      "Log Analysis & Troubleshooting",
      "SAP BW Process-Chain Monitoring",
      "User Acceptance Testing (UAT)",
      "STTM Documentation",
      "Production SLA Compliance",
    ],
  },
  {
    title: "AI & Vibe Coding",
    skills: [
      "Python 3.12 & FastAPI",
      "Multi-Agent DAGs (AnsiQ)",
      "Ollama & Cloud LLMs",
      "Next.js 15 & React 19",
      "Electron & SQLite WAL",
      "TypeScript & Tailwind CSS",
      "Truth Verification",
    ],
  },
];

export const buildWorkflow = [
  { step: "01", label: "Idea", description: "Identify a real enterprise or AI automation bottleneck" },
  { step: "02", label: "Architecture", description: "Design data schema, ETL workflows, or multi-agent DAGs" },
  { step: "03", label: "Engineering", description: "Implement with SAP BODS, SQL Server, Python, or Next.js" },
  { step: "04", label: "Validation", description: "Execute source-to-target reconciliation and checksum tests" },
  { step: "05", label: "Production", description: "Deploy with 24/7 telemetry, ServiceNow incident tracking, and SLA enforcement" },
];
