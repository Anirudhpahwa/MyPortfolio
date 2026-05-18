const SKILLS = [
  {
    icon: "terminal",
    iconBg: "bg-primary-container",
    title: "Languages",
    items: ["Python", "C++", "Java", "JavaScript", "C"],
  },
  {
    icon: "layers",
    iconBg: "bg-tertiary-container",
    title: "Frontend",
    items: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    icon: "database",
    iconBg: "bg-secondary-fixed",
    title: "Backend",
    items: ["FastAPI", "Django REST Framework", "WebSockets", "REST APIs", "JWT Auth"],
  },
  {
    icon: "cloud",
    iconBg: "bg-primary",
    title: "Databases & Tools",
    items: ["PostgreSQL", "MongoDB", "Redis", "Docker", "GitHub"],
    iconColor: "text-surface",
  },
  {
    icon: "sports_esports",
    iconBg: "bg-secondary-container",
    title: "Game Dev",
    items: ["Unreal Engine", "VR/XR Development", "Diversion", "Blueprint Scripting", "Gameplay Systems"],
  },
  {
    icon: "memory",
    iconBg: "bg-tertiary",
    title: "Core CS",
    items: ["DSA", "OOP", "Computer Networks", "System Design", "Distributed Systems"],
    iconColor: "text-surface",
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-24 bg-surface-container rounded-[3rem] border-4 border-primary px-8 md:px-16 mb-24 relative overflow-hidden"
    >
      <h2 className="text-5xl md:text-7xl font-black uppercase mb-16 tracking-tighter">
        TECHNICAL <br /> DNA
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SKILLS.map(({ icon, iconBg, iconColor, title, items }) => (
          <div
            key={title}
            className="bg-white border-4 border-primary p-8 rounded-[2rem] neo-shadow hover:-translate-y-2 transition-transform"
          >
            <div
              className={`w-14 h-14 ${iconBg} border-2 border-primary rounded-xl flex items-center justify-center mb-6`}
            >
              <span
                className={`material-symbols-outlined text-3xl ${iconColor ?? ""}`}
              >
                {icon}
              </span>
            </div>
            <h3 className="text-2xl font-black uppercase mb-4">{title}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-1 border-2 border-primary rounded-full font-bold text-xs uppercase bg-surface"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
