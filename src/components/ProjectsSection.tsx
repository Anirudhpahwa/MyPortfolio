const PROJECTS = [
  {
    title: "Notification Engine",
    href: "https://github.com/Anirudhpahwa/Notification-Engine",
    tags: ["FastAPI", "Celery", "Redis", "PostgreSQL", "Docker"],
    points: [
      "Designed and built an event-driven backend system using FastAPI, Celery, Redis, and PostgreSQL for scalable asynchronous notification processing.",
      "Implemented background task execution with Celery + Redis, enabling non-blocking workflows and reliable event handling.",
      "Architected a modular notification pipeline supporting multi-channel delivery with retry mechanisms and Redis-based rate limiting.",
      "Containerized the complete stack using Docker Compose following clean architecture principles.",
    ],
  },
  {
    title: "Soundtrack",
    href: "https://github.com/Anirudhpahwa/NowPlayingForYou",
    tags: ["Next.js", "FastAPI", "Groq / Llama 3.1", "Spotify API"],
    points: [
      "Built an AI-powered music recommendation platform using Next.js, FastAPI, and Groq (Llama 3.1) to generate contextual song suggestions from natural language input.",
      "Designed a recommendation engine combining situation-based scoring and user taste profiling for personalized ranked results.",
      "Implemented LLM-powered situation analysis to extract emotion, energy, setting, and intent from real-world user prompts.",
      "Developed fallback rule-based logic and integrated Spotify links for seamless music discovery.",
    ],
  },
  {
    title: "Scribble Arena",
    href: "https://github.com/Anirudhpahwa/Skribble-Game",
    tags: ["Next.js", "FastAPI", "WebSockets", "Docker"],
    points: [
      "Built a real-time multiplayer drawing and guessing game using Next.js, FastAPI, WebSockets, Redis, and PostgreSQL.",
      "Implemented room-based multiplayer systems and real-time synchronization pipelines for player state, drawing data, and game interactions.",
      "Developed an interactive HTML5 Canvas drawing system with synchronized strokes and low-latency gameplay communication.",
      "Containerized the full-stack application using Docker Compose with scalable multiplayer session management.",
    ],
  },
  {
    title: "Smart Job Tracker",
    href: "https://github.com/Anirudhpahwa/Smart-Job-Tracker",
    tags: ["Django REST", "JWT Auth", "Celery", "Redis"],
    points: [
      "Built a production-style backend using Django REST Framework with JWT authentication and secure user-specific job tracking APIs.",
      "Designed RESTful APIs supporting filtering, search, pagination, and application status management.",
      "Developed an analytics engine computing response rates, interview conversion metrics, and aggregated application insights.",
      "Implemented async background processing using Celery and Redis to offload analytics computation and scheduled tasks.",
    ],
  },
  {
    title: "GunLab – VR Weapon System",
    href: "https://github.com/Anirudhpahwa/GunLabVR",
    tags: ["Unreal Engine 5", "Blueprints", "VR/XR", "Niagara"],
    points: [
      "Developed a modular VR weapon interaction system in Unreal Engine 5 using Blueprints, focused on realistic handling and reusable weapon architecture.",
      "Implemented core VR mechanics including dual-hand grabbing, magazine reloading, validated slide interaction, and multiple fire modes.",
      "Built immersive feedback systems featuring suppressor audio switching, bullet impact decals, shell casing ejection, and Niagara smoke effects.",
      "Designed for scalability using clean Blueprint architecture, reusable interaction logic, and VR-focused usability principles.",
    ],
  },
  {
    title: "Target Shooting Game",
    href: "https://github.com/Anirudhpahwa/Target-Shooter",
    tags: ["Unreal Engine 5", "Blueprints", "Chaos Physics"],
    points: [
      "Developed a first-person target shooting game in Unreal Engine 5 to explore core gameplay systems and interactive combat mechanics.",
      "Built a custom weapon system using Blueprint scripting with shooting logic, ammo handling, and accuracy-based scoring.",
      "Integrated Chaos Physics for dynamic target interactions and responsive gameplay feedback.",
      "Designed the gameplay loop, HUD systems, and level interactions with hands-on Unreal Engine architecture experience.",
    ],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24">
      <div className="flex justify-between items-end mb-16">
        <div>
          <h2 className="text-6xl md:text-8xl font-black uppercase leading-none tracking-tighter">
            PROJECT
            <br />
            ARCHIVE
          </h2>
        </div>
        <div className="hidden md:block">
          <p className="text-right font-bold uppercase tracking-widest text-sm opacity-60">
            SELECTED WORKS // 06
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map(({ title, href, tags, points }) => (
          <div
            key={title}
            className="bg-white border-[4px] border-primary rounded-[2rem] p-8 flex flex-col neo-shadow hover:-translate-y-2 transition-all group"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-3xl font-black uppercase tracking-tighter leading-none">
                {title}
              </h3>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-primary text-surface rounded-xl flex items-center justify-center border-4 border-primary hover:bg-surface hover:text-primary transition-colors shrink-0"
              >
                <span className="material-symbols-outlined font-black">open_in_new</span>
              </a>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 border-2 border-primary rounded-full text-[10px] font-black uppercase bg-surface-container-low"
                >
                  {tag}
                </span>
              ))}
            </div>

            <hr className="border-t-4 border-primary mb-6" />

            <ul className="space-y-4 text-sm font-medium leading-relaxed flex-grow">
              {points.map((point, i) => (
                <li key={i} className="flex gap-3">
                  <span className="shrink-0">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
