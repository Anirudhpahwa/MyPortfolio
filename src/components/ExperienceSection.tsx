const EXPERIENCE = [
  {
    duration: "July 2025 — Aug 2025",
    role: "Frontend Developer Intern",
    company: "IRCTC",
    companyColor: "text-tertiary",
    icon: "web",
    points: [
      "Developed and improved frontend components for a high-traffic platform, focusing on responsiveness and usability.",
      "Enhanced cross-browser compatibility and UI performance for large-scale public usage.",
    ],
  },
  {
    duration: "July 2024 — Aug 2024",
    role: "Intern",
    company: "Centre for Railway Information Systems (CRIS), India",
    companyColor: "text-secondary",
    icon: "engineering",
    points: [
      "Assisted with testing and documentation in large-scale automation systems.",
      "Worked within structured engineering workflows emphasizing reliability and system integrity.",
    ],
  },
  {
    duration: "July 2025 — Present",
    role: "Founder & Game Development Head",
    company: "L.O.G.I.C",
    companyColor: "text-primary",
    icon: "sports_esports",
    points: [
      "Led development of multiple student game projects, managing technical planning and iteration cycles.",
      "Coordinated cross-functional teams to deliver playable builds and improve development velocity.",
    ],
  },
  {
    duration: "Mar 2025 — Present",
    role: "President | Campus Ambassador",
    company: "Midknite Esports Club | SKOAR! College Gaming Club",
    companyColor: "text-tertiary",
    icon: "emoji_events",
    points: [
      "Led planning and execution of collegiate esports tournaments, managing formats, scheduling, and live operations.",
      "Coordinated cross-functional teams including organizers, referees, and casters to ensure smooth tournament execution.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 border-t-8 border-primary">
      <h2 className="text-6xl md:text-8xl font-black uppercase leading-none tracking-tighter mb-20">
        CAREER
        <br />
        TIMELINE
      </h2>

      <div className="space-y-12">
        {EXPERIENCE.map(({ duration, role, company, companyColor, icon, points }) => (
          <div
            key={company + role}
            className="grid md:grid-cols-4 gap-8 pb-12 border-b-4 border-primary"
          >
            <div className="text-2xl font-black uppercase tracking-tighter">
              {duration}
            </div>

            <div className="md:col-span-2">
              <h4 className="text-3xl font-black uppercase mb-2">{role}</h4>
              <p className={`text-xl font-bold ${companyColor} mb-4`}>{company}</p>
              <ul className="space-y-2">
                {points.map((point, i) => (
                  <li key={i} className="flex gap-3 font-medium opacity-80 leading-relaxed">
                    <span className="shrink-0">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-end items-start">
              <span
                className="material-symbols-outlined text-4xl"
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                {icon}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
