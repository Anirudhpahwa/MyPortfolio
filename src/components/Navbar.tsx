"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "PROJECTS", href: "#projects" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "EDUCATION", href: "#education" },
];

export default function Navbar({
  onContactClick,
}: {
  onContactClick: () => void;
}) {
  const [activeSection, setActiveSection] = useState("");
  const [dateStr, setDateStr] = useState("");

  useEffect(() => {
    function updateDate() {
      const now = new Date();
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const day = days[now.getDay()];
      const m = now.getMonth() + 1;
      const d = now.getDate();
      const y = now.getFullYear();
      setDateStr(`${day}, ${m}/${d}/${y}`);
    }
    updateDate();
  }, []);

  useEffect(() => {
    function onScroll() {
      const sections = document.querySelectorAll<HTMLElement>("section[id]");
      let current = "";
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id;
      });
      setActiveSection(current);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleNavClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({ top: (target as HTMLElement).offsetTop - 80, behavior: "smooth" });
    }
  }

  return (
    <nav
      className="fixed z-[100] left-1/2 -translate-x-1/2 backdrop-blur-md"
      style={{
        top: "1rem",
        width: "1280px",
        maxWidth: "calc(100% - 3rem)",
        background: "rgba(167,139,250,0.9)",
        border: "4px solid #1a1a1a",
        borderRadius: "9999px",
        padding: "1rem 3rem",
      }}
    >
      <div className="flex items-center justify-between gap-4 overflow-x-auto py-2">
        {/* Logo */}
        <div
          className="text-2xl md:text-3xl font-black uppercase tracking-tighter italic shrink-0"
          style={{ fontFamily: "var(--font-headline)", color: "#1a1a1a" }}
        >
          PORTFOLIO
        </div>

        {/* Nav links */}
        <div className="flex items-center gap-4">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = activeSection === href.slice(1);
            return (
              <a
                key={href}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className="px-6 py-2 border-4 border-primary rounded-full font-black text-sm uppercase tracking-tighter transition-all whitespace-nowrap hover:-translate-y-0.5"
                style={{
                  fontFamily: "var(--font-headline)",
                  background: isActive ? "#ffcc00" : "#ffffff",
                  boxShadow: "4px 4px 0px 0px #000",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.boxShadow =
                    "6px 6px 0px 0px #000")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.boxShadow =
                    "4px 4px 0px 0px #000")
                }
              >
                {label}
              </a>
            );
          })}

          <button
            onClick={onContactClick}
            className="px-6 py-2 border-4 border-primary rounded-full font-black text-sm uppercase tracking-tighter transition-all whitespace-nowrap hover:-translate-y-0.5"
            style={{
              fontFamily: "var(--font-headline)",
              background: "#ffdad6",
              boxShadow: "4px 4px 0px 0px #000",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.boxShadow =
                "6px 6px 0px 0px #000")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.boxShadow =
                "4px 4px 0px 0px #000")
            }
          >
            CONTACT
          </button>
        </div>

        {/* Date display */}
        {dateStr && (
          <div
            className="hidden lg:flex items-center gap-2 border-4 border-primary rounded-full px-4 py-2 shrink-0"
            style={{
              background: "#ffcc00",
              boxShadow: "4px 4px 0px 0px #000",
              fontFamily: "var(--font-headline)",
            }}
          >
            <span className="font-black text-sm uppercase">{dateStr}</span>
          </div>
        )}
      </div>
    </nav>
  );
}
