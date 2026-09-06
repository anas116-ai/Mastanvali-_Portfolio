"use client";

const stack = [
  "SAP BODS 4.3",
  "SAP HANA",
  "SAP ECC",
  "SQL Server",
  "Python",
  "React",
  "Next.js",
  "Electron",
  "FastAPI",
  "PostgreSQL",
  "TypeScript",
  "LLMs",
  "Tailwind CSS",
  "ETL",
];

export function GlassMarquee() {
  return (
    <div className="relative w-full overflow-hidden border-y border-white/10 bg-black/40 py-5 backdrop-blur-xl select-none">
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-black to-transparent" />

      <div className="marquee-track">
        {[...stack, ...stack].map((item, i) => (
          <div
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-4 px-6"
            aria-hidden={i >= stack.length}
          >
            <span className="text-sm font-medium uppercase tracking-widest text-gray-400">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500/70" />
          </div>
        ))}
      </div>
    </div>
  );
}
