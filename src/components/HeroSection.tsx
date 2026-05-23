"use client";

import { useState } from "react";
import Image from "next/image";
import { Gamepad2 } from "lucide-react";
import VideoModal from "@/components/VideoModal";

export default function HeroSection({
  onContactClick,
}: {
  onContactClick: () => void;
}) {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      {videoOpen && <VideoModal onClose={() => setVideoOpen(false)} />}

      <section
        id="about"
        className="py-24 md:py-32 grid md:grid-cols-12 gap-12 items-start"
      >
        {/* Left: Profile card */}
        <div className="md:col-span-5">
          <div className="bg-white border-[6px] border-primary p-8 rounded-[3rem] neo-shadow flex flex-col items-center">
            {/* Profile photo */}
            <div className="relative mb-8">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-white/60 border-2 border-primary/20 backdrop-blur-sm -rotate-2 z-10" />
              <div className="w-48 h-48 rounded-full border-[6px] border-primary overflow-hidden bg-primary-container relative">
                <Image
                  src="/portfolio image.png"
                  alt="Anirudh Pahwa"
                  fill
                  className="object-cover object-center scale-110"
                />
              </div>
            </div>

            {/* Name + badge */}
            <div className="text-center mb-6">
              <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-2">
                ANIRUDH PAHWA
              </h2>
              <div className="bg-primary text-surface px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                Backend Developer • Game Developer • VR Developer
              </div>
            </div>

            {/* Info rows */}
            <div className="w-full space-y-4 mb-8 pt-6 border-t-2 border-primary/10">
              <div className="flex items-center gap-3">
                <span className="bg-primary-container border-2 border-primary px-2 py-0.5 text-[10px] font-black uppercase">
                  [LOCATION]
                </span>
                <span className="text-sm font-bold uppercase">Delhi, India</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-secondary-container border-2 border-primary px-2 py-0.5 text-[10px] font-black uppercase">
                  [STATUS]
                </span>
                <span className="text-sm font-bold uppercase">Open to Projects</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-tertiary-container border-2 border-primary px-2 py-0.5 text-[10px] font-black uppercase">
                  [MISSION]
                </span>
                <span className="text-sm font-bold uppercase">Always Building Something.</span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="w-full space-y-4 mb-8">
              <a
                href="/Anirudh_Pahwa_Resume.pdf"
                download
                className="w-full bg-[#6EE7B7] border-4 border-primary py-4 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#1a1a1a] transition-all"
              >
                DOWNLOAD_RESUME
              </a>
              <button
                onClick={onContactClick}
                className="w-full bg-secondary border-4 border-primary py-4 rounded-2xl font-black text-surface uppercase tracking-widest flex items-center justify-center gap-2 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#1a1a1a] transition-all"
              >
                CONTACT ME
              </button>
            </div>

            {/* Social icon row */}
            <div className="flex gap-6">
              {/* GitHub */}
              <a
                href="https://github.com/Anirudhpahwa"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:text-secondary transition-colors"
                aria-label="GitHub"
              >
                <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/anirudh-pahwa-885034276/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:text-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              {/* VR Game video */}
              <button
                onClick={() => setVideoOpen(true)}
                className="cursor-pointer hover:text-secondary transition-colors"
                aria-label="VR Game Demo"
              >
                <Gamepad2 size={30} />
              </button>
            </div>
          </div>
        </div>

        {/* Right: Editorial intro card */}
        <div className="md:col-span-7">
          <div className="bg-primary-container/30 border-[6px] border-primary p-12 md:p-16 rounded-[4rem] h-full">
            <h1 className="text-5xl md:text-7xl font-black italic mb-12 uppercase tracking-tighter">
              HI PEOPLE! 👋
            </h1>
            <div className="space-y-8">
              <p className="text-2xl md:text-3xl font-medium leading-relaxed">
                I&apos;m a pre-final year CS student at GGSIPU. I build backend systems and games, currently exploring VR and experimental mechanics. I enjoy solving tough bugs and making things feel good to use.
              </p>

              {/* Availability badge */}
              <div className="pt-8">
                <div className="inline-flex items-center gap-4 bg-white border-4 border-primary px-8 py-4 rounded-2xl neo-shadow-sm">
                  <span className="text-2xl">🕹️</span>
                  <span className="text-xl font-black uppercase tracking-tight">
                    Open to Backend, Game Dev &amp; VR Projects
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
