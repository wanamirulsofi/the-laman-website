interface SectionDividerProps {
  from?: "cream" | "white" | "beige";
  to?: "cream" | "white" | "beige";
}

const COLORS = {
  cream: "#faf8f5",
  white: "#ffffff",
  beige: "#f0ebe3",
} as const;

export function SectionDivider({
  from = "white",
  to = "cream",
}: SectionDividerProps) {
  return (
    <div className="relative h-16 overflow-hidden sm:h-20 lg:h-24" aria-hidden>
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id={`grad-${from}-${to}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={COLORS[from]} />
            <stop offset="100%" stopColor={COLORS[to]} />
          </linearGradient>
        </defs>
        <path
          fill={`url(#grad-${from}-${to})`}
          d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z"
        />
      </svg>
    </div>
  );
}
