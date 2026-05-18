"use client";

const CONTACT_LINKS = [
  { label: "GitHub", bg: "#ffb3ab", href: "https://github.com/Anirudhpahwa" },

  {
    label: "LinkedIn",
    bg: "#a8c6ff",
    href: "https://www.linkedin.com/in/anirudh-pahwa-885034276/",
  },
];

export default function ContactModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-surface border-4 border-primary p-8 rounded-3xl shadow-[8px_8px_0px_0px_#1a1a1a] w-full max-w-md">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-primary hover:scale-110 transition-transform text-3xl font-black leading-none"
        >
          ✕
        </button>

        <h2 className="text-4xl font-black uppercase tracking-tighter mb-8">
          Get in Touch 📬
        </h2>

        <div className="space-y-4">
          <div
            className="flex items-center gap-4 p-4 border-4 border-primary rounded-xl"
            style={{ background: "#ffcc00" }}
          >
            <span className="font-black tracking-widest">
              anirudhpahwa12@gmail.com
            </span>
          </div>

          {CONTACT_LINKS.map(({ label, bg, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 border-4 border-primary rounded-xl hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#1a1a1a] transition-all"
              style={{ background: bg }}
            >
              <span className="font-black uppercase tracking-widest">
                {label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
