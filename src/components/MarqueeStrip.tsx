const ITEMS = [
  "Form Follows Function",
  "Digital Architecture",
  "Neo-Brutalist Logic",
  "Bauhaus Legacy",
];

export default function MarqueeStrip() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="full-bleed bg-primary py-4 mb-24 border-y-4 border-secondary overflow-hidden">
      <div className="marquee">
        <div className="marquee-content flex gap-12 items-center">
          {doubled.map((item, i) => (
            <span
              key={i}
              className="text-surface font-black text-4xl uppercase italic"
              style={{ fontFamily: "var(--font-headline)", whiteSpace: "nowrap" }}
            >
              {item} •{" "}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
