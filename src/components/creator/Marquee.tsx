"use client";

const bandA = [
  "SAP BODS",
  "SAP ECC",
  "SAP BW",
  "SAP HANA",
  "SAP S/4HANA",
  "SQL Server",
  "ETL Development",
  "Data Reconciliation",
  "Process-Chain Monitoring",
];

const bandB = [
  "Python",
  "TypeScript",
  "React",
  "Next.js",
  "Electron",
  "FastAPI",
  "SQLite",
  "PostgreSQL",
  "Tailwind CSS",
  "LLM Orchestration",
  "Prompt Engineering",
  "AI Agents",
];

function Band({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative flex overflow-hidden py-3">
      <div
        className="marquee-band items-center gap-8 pr-8"
        style={{ animationDuration: reverse ? "44s" : "32s", animationDirection: reverse ? "reverse" : "normal" }}
      >
        {doubled.map((s, i) => (
          <span key={`${s}-${i}`} className="flex shrink-0 items-center gap-8">
            <span className="font-ui text-[13px] font-light tracking-[0.22em] text-[#8b939e] uppercase">
              {s}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#dfe921]/70" />
          </span>
        ))}
      </div>
    </div>
  );
}

export function Marquee() {
  return (
    <div className="bg-ink -mt-px border-y hairline py-2">
      <Band items={bandA} />
      <Band items={bandB} reverse />
    </div>
  );
}